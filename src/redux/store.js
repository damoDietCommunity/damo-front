/*스토어를 설정할 때 로컬 스토리지에서 상태를 로드하고, 
상태가 변경될 때마다 로컬 스토리지에 저장*/
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { loadState, saveState } from '../utils/localStorage';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

// 상태가 변경될 때마다 로컬 스토리지를 업데이트
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});