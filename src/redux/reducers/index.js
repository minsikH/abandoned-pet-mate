import { combineReducers } from "redux";
import petReducers from "./petReducers";

export default combineReducers({
    pet: petReducers,
});


