import { combineReducers } from "redux";
import testReducer from "./test";
import { connectRouter } from 'connected-react-router';

const createRootReducer =history=> combineReducers({
    test:testReducer,
    router:connectRouter(history)
})
//在store里面包含两个信息，最后返回的是  {test：0} test对象，对象的值是0 
export default createRootReducer

/**
 * 这里是为了初始化数据 testjs里面初始化了一个test：0的 ，然后在home里面引用得到了 初始化后的全局store
 */

/**
 * connectRouter 关于全局路由 该项目里面是用connected-react-router包和history库，但是在现在版本中已经中不了
 * 1、在combineReducer中  用  createRootReducer = history(arguments)=>{router:connectReducer(history)}
 * 2、在store的index中注册router中间件，createRootReducer(history),
    applyMiddleware(rouerMiddleware(history))
    3、在Provider里面再套一层<ConnectedRouter history={history}>往下传递路由信息
 */