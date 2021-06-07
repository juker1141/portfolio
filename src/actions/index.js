import { UPDATE_THEME_COLOR } from './types';

export const updateThemeColor = (color) => {

  return { type: UPDATE_THEME_COLOR, payload: color };
};
