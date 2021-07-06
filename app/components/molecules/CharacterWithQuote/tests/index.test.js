/**
 *
 * Tests for CharacterWithQuote
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import get from 'lodash/get';
import { renderWithIntl } from '@utils/testUtils';
import CharacterWithQuote from '../index';

describe('<CharacterWithQuote />', () => {
  it('Should render and match the snapshot', () => {
    const baseElement = renderWithIntl(<CharacterWithQuote />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Should render the Character name, image and quote provided as the user prop', () => {
    const props = {
      user: {
        character: 'Homer',
        image:
          'https://www.onthisday.com/images/people/homer-simpson-medium.jpg',
        quote: "D'Oh!"
      }
    };
    const { getByText, getByTestId } = renderWithIntl(
      <CharacterWithQuote {...props} />
    );
    expect(getByText('Homer loves Wednesday')).toBeTruthy();
    expect(getByText(props.user.quote)).toBeTruthy();
    const characterImageURI = get(
      getByTestId('character-image'),
      '_fiber.pendingProps.source.uri'
    );
    expect(characterImageURI).toBe(props.user.image);
  });
});
