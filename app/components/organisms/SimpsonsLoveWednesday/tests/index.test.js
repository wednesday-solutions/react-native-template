/**
 *
 * Tests for SimpsonsLoveWednesday
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithI18next } from '@utils/testUtils';
import { rerender } from '@testing-library/react-native';
import SimpsonsLoveWednesday from '../index';
describe('<SimpsonsLoveWednesday />', () => {
  it('Should render and match the snapshot', () => {
    const baseElement = renderWithI18next(<SimpsonsLoveWednesday />);
    expect(baseElement).toMatchSnapshot();
  });
  it('Should render the Error component if userErrorMessage is not empty', () => {
    const props = {
      userErrorMessage: 'Fetch failed',
      instructions: 'PRESS CMD + D for iOS',
      user: {
        character: 'Homer',
        image:
          'https://www.onthisday.com/images/people/homer-simpson-medium.jpg',
        quote: "D'Oh!"
      }
    };
    const { getByText } = renderWithI18next(
      <SimpsonsLoveWednesday {...props} />
    );
    expect(getByText(props.userErrorMessage)).toBeTruthy();
  });
  it('Should render the component if userErrorMessage is empty', () => {
    const props = {
      userErrorMessage: null,
      instructions: 'PRESS CMD + D for iOS',
      user: {
        character: 'Homer',
        image:
          'https://www.onthisday.com/images/people/homer-simpson-medium.jpg',
        quote: "D'Oh!"
      }
    };
    const { getByText: textQueryOnReRender } = renderWithI18next(
      <SimpsonsLoveWednesday {...props} />,
      rerender
    );
    expect(textQueryOnReRender(`wednesday_lover`)).toBeTruthy();
  });
});
