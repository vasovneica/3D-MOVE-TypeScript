import { configureStore } from '@reduxjs/toolkit';
import { modelsApi } from './modelsApi';

export const store = configureStore({
  reducer: {
    [modelsApi.reducerPath]: modelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(modelsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch