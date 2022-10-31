const initialState = {
  data: [],
  id: "",
};
const formTransfer = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_TRANSFER": {
      return {
        ...state,
        data: action.data,
        id: action.id,
      };
    }
    default: {
      return state;
    }
  }
};
export default formTransfer;
