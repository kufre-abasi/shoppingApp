
// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Add other reducers as needed
  },
});
