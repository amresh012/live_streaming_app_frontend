// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi,streamApi } from '../../services/index';   // 👈 import authApi
import authReducer from '../slices/authSlice';
import streamReducer from '../slices/streamslice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],  // ✅ Only persist auth slice
};

const rootReducer = combineReducers({
  auth: authReducer,
  stream: streamReducer,
  [authApi.reducerPath]: authApi.reducer,
  [streamApi.reducerPath]: streamApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this
    }).concat(authApi.middleware).concat(streamApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
