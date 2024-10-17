import { configureStore } from '@reduxjs/toolkit';
import efoReducer from './efoSlice.ts';

const store = configureStore({
  reducer: {
    efo: efoReducer,
  },
});

// Export types for the store and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
