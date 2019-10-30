/**
 *
 * Container
 *
 */

import React from 'react';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  display: flex;
  flex: 1;
`;
const Container = ({ ...props }) => (
  <StyledContainer testID="container" {...props} />
);

Container.propTypes = {};

export default Container;
