import { TYPE } from '../constants';

const defaultState = {
  persons: [],
};

const getPersons = (state, action) => {
  return {
    ...state,
    persons: action.data,
  };
};

const PersonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.RESPONSE: {
      return getPersons(state, action);
    }
    default:
      return state;
  }
};
export default PersonReducer;
