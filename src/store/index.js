import { applyMiddleware,createStore } from "redux";
import {createBrowserHistory} from 'history'
import createRootReducer from "./reducers";
import {rouerMiddleware } from "connected-react-router"
import './style.css'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory()

const sagaMiddleware =createSagaMiddleware()


const store = createStore(
    createRootReducer(history),
    
    composeWithDevTools(applyMiddleware(rouerMiddleware(history)))


    ) 


   sagaMiddleware.run(rootSaga) 

   /**
    * saga的配置从 saga最开始引入开始。需要将所有的saga异步指令
    * 都导入到rootSaga中，然后引入 createSagaMiddleware、
    * 创建变量接受createSagaMiddleware方法 再调用run方法传入rootSaga参数
    */
export default store

