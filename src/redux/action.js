import axios from "axios";

const url = process.env.REACT_APP_BACK_URL;

export function getValue() {
  return async function (dispatch) {
    const response = await axios.get(`${url}/value`);
    dispatch({
      type: "GET_VALUE",
      payload: response.data
    });
  };
}
