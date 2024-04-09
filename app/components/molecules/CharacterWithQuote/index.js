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
 * A component that displays a character's information along with their quote.
 * @param {object} props - The props object containing component properties.
 * @param {object} props.user - The user object representing the character's details.
 * @param {string} props.user.character - The character's name.
 * @param {string} props.user.image - The URL of the character's image.
 * @param {string} props.user.quote - The character's quote.
 * @returns {React.ReactNode} JSX elements displaying the character's information and quote.
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
