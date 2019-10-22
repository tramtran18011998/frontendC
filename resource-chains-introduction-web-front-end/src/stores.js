
import makeRootReducer from "./reducers";
import {createBrowserHistory, createMemoryHistory} from "history"
import {createStore} from "redux"
import { connectRouter } from "connected-react-router";

export const isServer = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

export const history = isServer ? createMemoryHistory({
    initialEntries : ["/"]
}) : createBrowserHistory()

export default () =>{
    
  const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

  const store = createStore(
    connectRouter(history)(makeRootReducer(history)),
    initialState
  )

  return {
      store,
      history
  }
}