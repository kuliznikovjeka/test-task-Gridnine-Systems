import { configureStore } from '@reduxjs/toolkit';
import flightsSlice from './flights/slice';

export const store = configureStore({
  reducer: {
    flights: flightsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
