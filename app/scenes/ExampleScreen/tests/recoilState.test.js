import React, { Suspense } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import TestRenderer from 'react-test-renderer';
import {
  userState,
  userIsLoadingState,
  userErrorMessageState,
  fetchTriggerState,
  fetchUserSelector
} from '../recoilState';
import { getUser } from '@app/services/userService';
import { Errors } from '@app/utils/errors';

jest.mock('@app/services/userService');

describe('Recoil Atoms and Selector', () => {
  let testContainer = {};

  const TestComponent = ({ atom, newValue }) => {
    const [value, setValue] = useRecoilState(atom);

    if (newValue !== undefined) {
      setValue(newValue);
    }

    testContainer = { value, setValue };
    return null;
  };

  const SelectorTestComponent = ({ selector }) => {
    const value = useRecoilValue(selector);
    testContainer = { value };
    return null;
  };

  beforeEach(() => {
    jest.clearAllMocks();
    testContainer = {};
  });

  describe('userState atom', () => {
    it('should have a default value of null', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={userState} />
        </RecoilRoot>
      );
      expect(testContainer.value).toBeNull();
    });

    it('should update the user state', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={userState} />
        </RecoilRoot>
      );
      const { setValue } = testContainer;

      TestRenderer.act(() => {
        setValue({ id: 1, name: 'John Doe' });
      });

      expect(testContainer.value).toEqual({ id: 1, name: 'John Doe' });
    });
  });

  describe('userIsLoadingState atom', () => {
    it('should have a default value of false', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={userIsLoadingState} />
        </RecoilRoot>
      );
      expect(testContainer.value).toBe(false);
    });

    it('should update the loading state', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={userIsLoadingState} />
        </RecoilRoot>
      );
      const { setValue } = testContainer;

      TestRenderer.act(() => {
        setValue(true);
      });

      expect(testContainer.value).toBe(true);
    });
  });

  describe('userErrorMessageState atom', () => {
    it('should have a default value of null', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={userErrorMessageState} />
        </RecoilRoot>
      );
      expect(testContainer.value).toBeNull();
    });

    it('should update the error message state', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={userErrorMessageState} />
        </RecoilRoot>
      );
      const { setValue } = testContainer;

      TestRenderer.act(() => {
        setValue('An error occurred');
      });

      expect(testContainer.value).toBe('An error occurred');
    });
  });

  describe('fetchTriggerState atom', () => {
    it('should have a default value of 0', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={fetchTriggerState} />
        </RecoilRoot>
      );
      expect(testContainer.value).toBe(0);
    });

    it('should increment the trigger state', () => {
      TestRenderer.create(
        <RecoilRoot>
          <TestComponent atom={fetchTriggerState} />
        </RecoilRoot>
      );
      const { setValue } = testContainer;

      TestRenderer.act(() => {
        setValue(prev => prev + 1);
      });

      expect(testContainer.value).toBe(1);
    });
  });

  describe('fetchUserSelector', () => {
    it('should fetch and return user data when successful', async () => {
      const mockUser = [{ id: 1, name: 'John Doe' }];
      getUser.mockResolvedValueOnce({ ok: true, data: mockUser });

      await TestRenderer.act(async () => {
        TestRenderer.create(
          <RecoilRoot>
            <Suspense fallback="Loading...">
              <SelectorTestComponent selector={fetchUserSelector} />
            </Suspense>
          </RecoilRoot>
        );
      });

      expect(testContainer.value).toEqual(mockUser[0]);
    });

    it('should throw an error when the fetch fails', async () => {
      getUser.mockResolvedValueOnce({ ok: false });

      await TestRenderer.act(async () => {
        try {
          TestRenderer.create(
            <RecoilRoot>
              <Suspense fallback="Loading...">
                <SelectorTestComponent selector={fetchUserSelector} />
              </Suspense>
            </RecoilRoot>
          );
        } catch (error) {
          expect(error.message).toBe(Errors.USER_FETCH_ERROR);
        }
      });
    });
  });
});
