import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  lang: string;
  isNotificationsOn: boolean;
}

const initialState: State = {
  lang: 'en',
  isNotificationsOn: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<{ lang: string }>) {
      state.lang = action.payload.lang;
    },
    setSettings(state, action: PayloadAction<State>) {
      state.lang = action.payload.lang;
      state.isNotificationsOn = action.payload.isNotificationsOn;
    },
  },
});

export const { setLanguage, setSettings } = settingsSlice.actions;
export const { reducer } = settingsSlice;
