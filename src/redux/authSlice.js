import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuthenticated: false,
      accountId: '',
      accessToken: '',
      refreshToken: '',
    },
    reducers: {
      login(state, action) {
        state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.accountId = action.payload.accountId;
      },
      logout(state) {
        state.isAuthenticated = false;
        state.accessToken = '';
        state.refreshToken = '';
        state.accountId = '';
      },
      setTokens(state, action) {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      }
    },
});

export const { login, logout, setTokens } = authSlice.actions;

export default authSlice.reducer;