import { legacy_createStore as createStore, compose } from "redux";
import { rootReducer } from "../reducer";
import { getMiddlewares } from "./middlewares";

export default () => {
  const store = createStore(rootReducer, compose(getMiddlewares()));
  return store;
}