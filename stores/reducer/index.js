import { combineReducers } from "redux";

import user from "./user";
import counter from "./counter";
import transfer from "./transfer";
import topup from "./topup";
export default combineReducers({
  user,
  counter,
  transfer,
  topup,
});
