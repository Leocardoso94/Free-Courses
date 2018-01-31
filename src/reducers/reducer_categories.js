import { FETCH_CATEGORIES, FILTER_CATEGORIES } from '../actions/actions_types';


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES: return action.payload;
    case FILTER_CATEGORIES: return action.payload;
    default: return state;
  }
}

