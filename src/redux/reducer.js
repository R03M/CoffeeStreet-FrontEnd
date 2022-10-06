const initialState = {
  value: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.payload) {
    case "GET_VALUE":
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
