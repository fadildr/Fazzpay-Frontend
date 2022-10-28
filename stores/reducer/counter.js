const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      const incrementCount = state.count + action.data;

      return {
        ...state,
        count: incrementCount,
      };
    }
    case "DECREASE": {
      const decrementCount = state.count - 1;

      return {
        ...state,
        count: decrementCount,
      };
    }
    case "RESET": {
      return {
        ...state,
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default counter;
