import { TOGGLE_FORMREVIEW } from '../actions/types';

export default function formReviewReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_FORMREVIEW:
      return action.payload;
    default:
      return state;
  };
};