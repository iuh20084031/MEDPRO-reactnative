import * as types from './types';

export const login = (userData) => ({
  type: types.LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: types.LOGOUT,
});