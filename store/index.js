import { applyMiddleware,createStore } from "redux";
import {createBrowserHistory} from 'history'
import createRootReducer from "./reducers";
import {rouerMiddleware } from "connected-react-router"



export const history = createBrowserHistory()
const store = createStore(
    createRootReducer(history),
    applyMiddleware(rouerMiddleware(history))
    ) 


export default store