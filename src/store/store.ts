'use client';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { sortSlice } from './sort/sortSlice';

export const store = configureStore({
  reducer: {
    sort: sortSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const ReduxProvider = Provider;
