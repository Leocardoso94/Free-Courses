import { FETCH_COURSES } from '../actions/actions_types';


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COURSES: return action.payload;
    default: return state;
  }
}
