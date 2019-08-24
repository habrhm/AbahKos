import * as types from './../types';

const initialState = {
  isLoading: false,
  data: [],
  error: null
}

export default function dorms(state = initialState, action) {
  switch (action.type) {
    case types.GET_DORMS:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_DORMS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case types.GET_DORMS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload.message
      };

    case types.ADD_DORMS:
      return {
        ...state,
        isLoading: true
      };
    case types.ADD_DORMS_FULFILLED:
      return {
        ...state,
        isLoading: false,
      };
    case types.ADD_DORMS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload.message
      };
    default:
      return state
  }
}