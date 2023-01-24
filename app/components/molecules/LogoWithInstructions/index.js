import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { fonts, images } from '@themes';
import T from '@atoms/T';

const styles = {
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

function LogoWithInstructions({ instructions }) {
  return (
    <View style={{ margin: '30px 0' }}>
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
