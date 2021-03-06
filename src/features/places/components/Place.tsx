import React, { FC } from 'react';
import {
  Dimensions,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { flex1, row } from '@styles/styles';
import {
  borderRadius,
  bottomSpacings,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  sizes,
  topSpacings,
} from '@styles/constants';
import { Section } from '@components';
import MapView, { Marker, Region } from 'react-native-maps';
import hexToRgba from 'hex-to-rgba';
import Swiper from 'react-native-swiper';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useTranslation } from 'react-i18next';
import { Place as PlaceType } from '../types';

const { width } = Dimensions.get('window');
const mapHeight = (width - sizes.xs) * 0.33;

const phoneIcon = require('@assets/images/phone.png');
const emailIcon = require('@assets/images/email.png');
const globeIcon = require('@assets/images/globe.png');

interface Props {
  place: PlaceType;
}

const Place: FC<Props> = (props) => {
  const { place } = props;
  const { phone, email, locationAddressUrl } = place;

  const { t } = useTranslation();

  const initialRegion: Region = {
    longitude: place.coordinates.longitude,
    latitude: place.coordinates.latitude,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };

  return (
    <ScrollView>
      <Swiper
        showsPagination
        paginationStyle={bottomSpacings.s}
        activeDotColor={colors.white}
        dotColor={hexToRgba(colors.white, 0.4)}
        style={styles.imagesContainer}
      >
        {place.images.map((image, index) => (
          <View key={index} style={flex1}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ))}
      </Swiper>
      <View style={styles.content}>
        <SafeAreaView style={flex1}>
          <View style={[row, bottomSpacings.l]}>
            <Image style={styles.icon} source={{ uri: place.icon }} />
            <View style={flex1}>
              <Text style={styles.title}>{place.title}</Text>
              <Text style={styles.type}>{place.type}</Text>
            </View>
          </View>
          <View style={bottomSpacings.l}>
            <Text style={styles.sectionTitle}>{t('titles.about_place')}</Text>
            <ReadMore
              seeLessText={t('buttons.read_less')}
              seeMoreText={t('buttons.read_more')}
              seeLessStyle={styles.descriptionToggle}
              seeMoreStyle={styles.descriptionToggle}
              seeMoreContainerStyleSecondary={{}}
              numberOfLines={4}
              style={styles.description}
            >
              {place.description}
            </ReadMore>
          </View>
          <Section
            style={bottomSpacings.l}
            contentStyle={styles.section}
            title={t('titles.contacts')}
          >
            {!!phone && (
              <View style={row}>
                <Image source={phoneIcon} />
                <Text onPress={() => Linking.openURL(`tel:${phone}`)} style={styles.contact}>
                  {phone}
                </Text>
              </View>
            )}
            {!!email && (
              <View style={[row, topSpacings.m]}>
                <Image source={emailIcon} />
                <Text onPress={() => Linking.openURL(`mailto:${email}`)} style={styles.contact}>
                  {email}
                </Text>
              </View>
            )}
            {!!locationAddressUrl && (
              <View style={[row, topSpacings.m]}>
                <Image source={globeIcon} />
                <Text
                  onPress={() => Linking.openURL(locationAddressUrl)}
                  numberOfLines={1}
                  style={styles.contact}
                >
                  {locationAddressUrl}
                </Text>
              </View>
            )}
          </Section>
          {place.timetable.length > 0 && (
            <Section
              style={bottomSpacings.l}
              contentStyle={styles.section}
              title={t('titles.visiting_hours')}
            >
              {place.timetable.map((item, index) => (
                <Text
                  key={item.days}
                  style={[
                    styles.hours,
                    index === place.timetable.length - 1 ? undefined : bottomSpacings.m,
                  ]}
                >{`${item.days}: ${item.time}`}</Text>
              ))}
            </Section>
          )}
          <View>
            <Text style={styles.sectionTitle}>{t('titles.address')}</Text>
            <Text
              onPress={() =>
                Linking.openURL(
                  `https://maps.google.com/maps?ll=${place.coordinates.latitude},${place.coordinates.longitude}&q=${place.coordinates.latitude},${place.coordinates.longitude}`
                )
              }
              style={[styles.link, bottomSpacings.m]}
            >
              {place.address}
            </Text>
            <View style={styles.mapContainer}>
              <MapView initialRegion={initialRegion} scrollEnabled={false} style={flex1}>
                <Marker coordinate={place.coordinates} image={{ uri: place.icon }} />
              </MapView>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: sizes.xs,
    paddingTop: sizes.xl,
    borderTopLeftRadius: borderRadius.m,
    borderTopRightRadius: borderRadius.m,
    backgroundColor: colors.background,
    position: 'relative',
    top: -20,
  },
  section: {
    paddingHorizontal: sizes.l,
  },
  description: {
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
    color: hexToRgba(colors.text.primary, 0.6),
  },
  descriptionToggle: {
    color: colors.primary,
    fontFamily: fonts.secondary.semiBold,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
  },
  contact: {
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
    paddingLeft: sizes.m,
  },
  hours: {
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
  },
  sectionTitle: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
    fontFamily: fonts.primary.bold,
    marginBottom: sizes.xxs,
  },
  link: {
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  title: {
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    marginBottom: sizes.xxs1,
  },
  type: {
    fontFamily: fonts.secondary.regular,
    color: colors.text.secondary,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  mapContainer: {
    overflow: 'hidden',
    height: mapHeight,
    borderRadius: borderRadius.s,
    marginBottom: sizes.m,
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: sizes.m,
  },
  imagesContainer: {
    height: 280,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Place;
