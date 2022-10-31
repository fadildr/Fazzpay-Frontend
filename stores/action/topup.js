import axios from "utils/axios";

export const topup = (data) => {
  return {
    type: "TOPUP",
    payload: axios.post(`transaction/top-up`, data),
  };
};
