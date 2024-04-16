import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { fonts } from '@themes';
import If from '@app/components/atoms/If';
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
 * A component that displays Simpsons-themed content related to Wednesday, including instructions, character details, and error messages.
 * @param {object} props - The props object containing component properties.
 * @param {string} props.instructions - The instructions text to display.
 * @param {object} props.user - The user object representing character details and quote.
 * @param {string} props.userErrorMessage - The error message to display if user data retrieval fails.
 * @returns {React.ReactNode} JSX elements displaying Simpsons-themed content based on provided props.
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
