import {all} from 'redux-saga/effects'
import signupSaga from './signup'







export default function* rootSaga() {
    yield all([signupSaga()])
    //all方法里面接受的是数组，数组的各个项就是传递进来的saga文件
}