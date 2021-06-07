import { UPDATE_THEME_COLOR } from '../actions/types';

export default function authReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_THEME_COLOR:
      return action.payload;
    default:
      return state;
  }
};