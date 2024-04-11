import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { fonts, images } from '@themes';
import T from '@atoms/T';

const styles = {
  parentView: {
    marginTop: 30,
    marginBottom: 30
  },
  logoContainer: {
    width: '100%',
    height: 150,
    marginBottom: 25
  },
  logo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  }
};

const Instructions = styled(T)`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5;
  font-style: italic;
`;
/**
 * A component that displays a logo along with instructions.
 * @param {object} props - The props object containing component properties.
 * @param {string} props.instructions - The instructions text to display.
 * @returns {React.ReactNode} JSX elements displaying the logo and instructions.
 */
function LogoWithInstructions({ instructions }) {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={images.wednesdayLogo}
          resizeMode="contain"
        />
      </View>
      <Instructions text={instructions} />
    </View>
  );
}

LogoWithInstructions.propTypes = {
  instructions: PropTypes.string
};

export default LogoWithInstructions;
