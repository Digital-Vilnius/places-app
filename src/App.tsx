import React, { FC, useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from 'react-query';
import queryClient from '@core/query';
import { persistor, store } from '@core/store';
import { Provider } from 'react-redux';
import RootNavigator from '@navigation/RootNavigator';
import Toast from 'react-native-toast-message';
import { setupTranslations } from '@core/translations';
import { setupNotifications } from '@core/notifications';
import { Platform } from 'react-native';
import { CurrentLocationProvider } from '@core/location/provider';
import SplashScreen from 'react-native-splash-screen';

setupNotifications();
setupTranslations();

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CurrentLocationProvider>
              <RootNavigator />
            </CurrentLocationProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
      <Toast topOffset={Platform.OS === 'android' ? 20 : 40} />
    </>
  );
};

export default App;
