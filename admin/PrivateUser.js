import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min"

import { isAuth } from "../../helpers/auth"



function PrivateUser({component:Component,...rest}) {
    return <Route {...rest} render= {(props)=>{
    
    if(isAuth()) return <Component {...props}></Component>
       return <Redirect to='/signin/'></Redirect>
    }} ></Route>
}

export default PrivateUser


//PrivateUser里面的解构component 
/***
 * 1、将组件解构把component这个标签属性解构出来，剩余的属性放在rest里面
 *  return <Component></Component>这里面这个Component的意思就是将这个Route公开展示
 * 如果登陆了 等效于 <Route></Route>
 * 2、通过公用标签isAuth来判断是否登录 如果登录了就完整的展示这个组件
 * 3、如果没有登录就返回redirect跳转到登录页面
 * Component {...props}
 */