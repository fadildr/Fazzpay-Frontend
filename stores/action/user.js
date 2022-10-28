import axios from "utils/axios";

export const getDataUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/profile/${id}`),
  };
};
