import React, { FC } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from 'react-query';
import queryClient from '@core/query';
import { persistor, store } from '@core/store';
import { Provider } from 'react-redux';
import RootNavigator from '@navigation/RootNavigator';
import Toast from 'react-native-toast-message';
import { setupTranslations } from '@core/translations';
import { setupNotifications } from '@core/notifications';

setupNotifications();
setupTranslations();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
          <Toast topOffset={20} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
