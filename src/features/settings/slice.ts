import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  locale: string | null;
  isNotificationsOn: boolean;
  isTermsAndConditionsAgreed: boolean;
}

const initialState: State = {
  locale: null,
  isNotificationsOn: false,
  isTermsAndConditionsAgreed: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<{ locale: string }>) {
      state.locale = action.payload.locale;
    },
    agreeTermsAndConditions(state) {
      state.isTermsAndConditionsAgreed = true;
    },
    setIsNotificationsOn(state, action: PayloadAction<{ isNotificationsOn: boolean }>) {
      state.isNotificationsOn = action.payload.isNotificationsOn;
    },
  },
});

export const { setLocale, setIsNotificationsOn, agreeTermsAndConditions } = settingsSlice.actions;
export const { reducer } = settingsSlice;
