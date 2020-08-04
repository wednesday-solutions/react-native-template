/**
 *
 * Tests for CharacterWithQuote
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithIntl } from '@utils/testUtils';
import CharacterWithQuote from '../index';

describe('<CharacterWithQuote />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<CharacterWithQuote />);
    expect(baseElement).toMatchSnapshot();
  });
});
