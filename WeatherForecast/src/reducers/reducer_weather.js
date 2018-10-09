import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  //console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
    //creates new array instead of pushing & mutating the state
    //return state.concat([action.payload.data]);
    return [action.payload.data, ...state];

  }
  return state;
}
