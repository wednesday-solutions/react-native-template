import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { fonts } from '@themes';
import If from '@molecules/If';
import CharacterWithQuote from '@molecules/CharacterWithQuote';
import LogoWithInstructions from '@molecules/LogoWithInstructions';

const Error = styled.Text`
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

function SimpsonsLoveWednesday({ instructions, user, userErrorMessage }) {
  return (
    <>
      <LogoWithInstructions instructions={instructions} />
      <If
        condition={!userErrorMessage}
        otherwise={<Error>{userErrorMessage}</Error>}
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
