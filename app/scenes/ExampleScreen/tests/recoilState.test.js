import { renderRecoilHook, useRecoilValue, RecoilRoot } from 'recoil';
import {
  userState,
  userIsLoadingState,
  userErrorMessageState,
  fetchTriggerState,
  fetchUserSelector
} from '../recoilState';
import { getUser } from '@app/services/userService';
import { Errors } from '@app/utils/erros';

jest.mock('@app/services/userService');

describe('Recoil State Management', () => {
  describe('Default State', () => {
    it('should have userState default to null', () => {
      const { result } = renderRecoilHook(() => useRecoilValue(userState), {
        wrapper: RecoilRoot
      });
      expect(result.current).toBeNull();
    });

    it('should have userIsLoadingState default to false', () => {
      const { result } = renderRecoilHook(
        () => useRecoilValue(userIsLoadingState),
        {
          wrapper: RecoilRoot
        }
      );
      expect(result.current).toBe(false);
    });

    it('should have userErrorMessageState default to null', () => {
      const { result } = renderRecoilHook(
        () => useRecoilValue(userErrorMessageState),
        {
          wrapper: RecoilRoot
        }
      );
      expect(result.current).toBeNull();
    });

    it('should have fetchTriggerState default to 0', () => {
      const { result } = renderRecoilHook(
        () => useRecoilValue(fetchTriggerState),
        {
          wrapper: RecoilRoot
        }
      );
      expect(result.current).toBe(0);
    });
  });

  describe('fetchUserSelector', () => {
    it('should fetch user data successfully', async () => {
      const mockUser = { id: 1, name: 'John Doe' };
      getUser.mockResolvedValueOnce({
        ok: true,
        data: [mockUser]
      });

      const { result, waitForNextUpdate } = renderRecoilHook(
        () => useRecoilValue(fetchUserSelector),
        {
          wrapper: RecoilRoot
        }
      );

      await waitForNextUpdate();

      expect(result.current).toEqual(mockUser);
    });

    it('should throw an error if user fetching fails', async () => {
      getUser.mockResolvedValueOnce({
        ok: false
      });

      const { result, waitForNextUpdate } = renderRecoilHook(
        () => useRecoilValue(fetchUserSelector),
        {
          wrapper: RecoilRoot
        }
      );

      await expect(waitForNextUpdate()).rejects.toThrow(
        Errors.USER_FETCH_ERROR
      );
    });
  });
});
