import React, { FC } from 'react';
import { Linking, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { bottomSpacings, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';
import { useTranslation } from 'react-i18next';

const UsagePolicy: FC = () => {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={bottomSpacings.m}>
        <Text style={styles.description}>{t('gdpr.data_collected_parties')}</Text>
        <Text style={styles.description}>
          {t('gdpr.one_signal')}
          <Text
            onPress={() => Linking.openURL('https://onesignal.com/privacy_policy')}
            style={styles.link}
          >{` https://onesignal.com/privacy_policy`}</Text>
        </Text>
      </View>
      {Platform.OS === 'android' && (
        <View style={bottomSpacings.m}>
          <Text style={styles.description}>{t('gdpr.device_permissions')}</Text>
          <Text style={styles.description}>{t('gdpr.internet')}</Text>
          <Text style={styles.description}>{t('gdpr.network_state')}</Text>
          <Text style={styles.description}>{t('gdpr.external_storage')}</Text>
          <Text style={styles.description}>{t('gdpr.message')}</Text>
        </View>
      )}
      {Platform.OS === 'ios' && (
        <View style={bottomSpacings.m}>
          <Text style={styles.description}>{t('gdpr.device_permissions')}</Text>
          <Text style={styles.description}>{t('gdpr.internet_ios')}</Text>
          <Text style={styles.description}>{t('gdpr.network_state_ios')}</Text>
          <Text style={styles.description}>{t('gdpr.message_ios')}</Text>
        </View>
      )}
      <View style={bottomSpacings.m}>
        <Text style={styles.description}>
          {t('gdpr.disclaimer')}
          <Text onPress={() => Linking.openURL('mailto:info@imas.lt')} style={styles.link}>
            {` info@imas.lt`}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: sizes.xs,
  },
  description: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.xl,
    color: hexToRgba(colors.text.primary, 0.6),
    fontFamily: fonts.secondary.regular,
  },
  link: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.xl,
    color: colors.primary,
    fontFamily: fonts.secondary.regular,
  },
});

export default UsagePolicy;
