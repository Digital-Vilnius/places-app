import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AboutContent } from '@features/about/types';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';
import { center } from '@styles/styles';

interface Props {
  content: AboutContent;
}

const AboutProject: FC<Props> = (props) => {
  const { content } = props;

  return (
    <View>
      <Text style={styles.description}>{content.description}</Text>
      {content.logos.length > 0 && (
        <View style={styles.logosContainer}>
          {content.logos.map((logo, index) => (
            <View style={[styles.logoContainer, center]} key={index}>
              <Image style={styles.logo} source={{ uri: logo }} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.xl,
    color: hexToRgba(colors.text.primary, 0.6),
    fontFamily: fonts.secondary.regular,
    textAlign: 'center',
  },
  logosContainer: {
    marginTop: sizes.l,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  logoContainer: {
    flexBasis: '50%',
    padding: sizes.xs,
  },
  logo: {
    height: 100,
    width: '100%',
    resizeMode: 'center',
  },
});

export default AboutProject;
