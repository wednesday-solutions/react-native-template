import React from 'react';
import styled from 'styled-components/native';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { fonts } from '@themes';
import T from '@atoms/T';

const Result = styled(T)`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5;
`;

const CharacterImage = styled.Image`
  height: 80px;
  width: 80px;
  margin: 0 auto;
`;

/**
 * Renders a component displaying a character with associated quote and image.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Object} props.user - The user object containing character and quote information.
 * @param {string} props.user.character - The character name to display.
 * @param {string} props.user.image - The URL of the image associated with the character.
 * @param {string} props.user.quote - The quote associated with the character.
 * @returns {JSX.Element} A React element representing the character display with quote.
 */
function CharacterWithQuote({ user }) {
  return (
    <>
      <Result
        id="wednesday_lover"
        values={{
          username: get(user, 'character', 'character')
        }}
      />
      <Result id="because" />
      <CharacterImage
        resizeMode="contain"
        testID="character-image"
        source={{ uri: get(user, 'image') }}
      />
      <Result text={get(user, 'quote')} />
    </>
  );
}

CharacterWithQuote.propTypes = {
  user: PropTypes.object
};

export default CharacterWithQuote;
