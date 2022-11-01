const initialState = {
  data: [],
  id: "",
  form: [],
};
const formTransfer = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_TRANSFER": {
      return {
        ...state,
        data: action.data,
        id: action.id,
        form: action.form,
      };
    }
    default: {
      return state;
    }
  }
};
export default formTransfer;
