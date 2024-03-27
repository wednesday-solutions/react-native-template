import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { fonts } from '@themes';
import If from '@molecules/If';
import CharacterWithQuote from '@molecules/CharacterWithQuote';
import LogoWithInstructions from '@molecules/LogoWithInstructions';

const Err = styled.Text`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5px;
  color: red;
`;

const SeparatedView = styled.View`
  > * {
    margin: 10px;
  }
`;

/**
 * Description
 * @param {any} {instructions
 * @param {any} user
 * @param {any} userErrorMessage}
 * @returns {any}
 */
function SimpsonsLoveWednesday({ instructions, user, userErrorMessage }) {
  return (
    <>
      <LogoWithInstructions instructions={instructions} />
      <If
        condition={!userErrorMessage}
        otherwise={<Err>{userErrorMessage}</Err>}
      >
        <SeparatedView>
          <CharacterWithQuote user={user} />
        </SeparatedView>
      </If>
    </>
  );
}

SimpsonsLoveWednesday.propTypes = {
  user: PropTypes.object,
  instructions: PropTypes.string,
  userErrorMessage: PropTypes.string
};

export default SimpsonsLoveWednesday;
