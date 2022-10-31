const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: "",
};

const topup = (state = initialState, action) => {
  switch (action.type) {
    case "TOPUP_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "TOPUP_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }
    case "TOPUP_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};
export default topup;
