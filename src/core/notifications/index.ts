import OneSignal from 'react-native-onesignal';

export const setupNotifications = () => {
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId('05e2d964-5be9-4918-adbe-d3ab24dc6a6a');
};
