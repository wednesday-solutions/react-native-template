/**
 *
 * Tests for SimpsonsLoveWednesday
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithIntl } from '@utils/testUtils';
import { rerender } from '@testing-library/react-native';
import SimpsonsLoveWednesday from '../index';

describe('<SimpsonsLoveWednesday />', () => {
  it('Should render and match the snapshot', () => {
    const baseElement = renderWithIntl(<SimpsonsLoveWednesday />);
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
    const { getByText } = renderWithIntl(<SimpsonsLoveWednesday {...props} />);
    expect(getByText(props.userErrorMessage)).toBeTruthy();
    props.userErrorMessage = null;
    const { getByText: textQueryOnReRender } = renderWithIntl(
      <SimpsonsLoveWednesday {...props} />,
      rerender
    );
    expect(
      textQueryOnReRender(`${props.user.character} loves Wednesday`)
    ).toBeTruthy();
  });
});
