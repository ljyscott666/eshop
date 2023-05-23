import { handleActions as createReducers} from "redux-actions";
import { signup, signup_fail, signup_reset, signup_success } from "../actions/signup";
//创建reducer，并对在reducer中定义怎么具体操作这些指令，reducer接受action

const intialState = {
    loading:false,
    loaded:false,
    success:false,
    message: ''
}

const signupReducer = createReducers({
    [signup]:()=>({
        loading:true,
        loaded:false,
        success:false,
        message: ''
    })
    //由于signup是常量，必须由中括号才能赋予返回值。返回值是动态变化的
    //所以要返回最新状态用 （）=》（），相当于从里面取值
    ,
    [signup_success]:()=>({
        loading:false,
        loaded:true,
        success:true,
        message: ''
    }),
    [signup_fail]:(state,action)=>({
        loading:false,
        loaded:true,
        success:false,
        message: action.payload.message
    }),
    [signup_reset]:()=>({
        loading:false,
        loaded:false,
        success:false,
        message: ''
    })
     




    
},intialState)
//handleActions第一个参数是一个对象，第二个参数是intialState默认的状态


export default signupReducer