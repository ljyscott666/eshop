import { takeEvery, put} from 'redux-saga/effects'
import { signup, signup_fail, signup_success } from '../actions/signup'
import axios from 'axios'
import {API} from '../../config'

function* handleSignup(action) {
  try {
  yield axios.post(`${API}/signup`,action.payload)
  yield put(signup_success())
} catch(ex) { 
    yield put(signup_fail({mesaage:ex.response.data.console.error}))
}
}
//用try catch来捕获失败，如果返回的是200就成功 因为信息放在
//action里面 就post   action.payload 到目的地址
//如果失败 就被catch捕获 调用sign——upfail  返回失败







export default function* signupSaga() {
    yield takeEvery(signup,handleSignup)
}
//接受signup的值，传到handlesignup方法里  在传之前定义这个方法