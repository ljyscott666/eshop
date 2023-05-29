import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min"

import { isAuth } from "../../helpers/auth"



function PrivateAdmin({component:Component,...rest}) {
    return <Route {...rest} render= {(props)=>{
    const auth = isAuth()
    if(auth && auth.user.roles ===1 ) return <Component {...props}></Component>
       return <Redirect to='/signin/'></Redirect>
    }} ></Route>
}

export default PrivateAdmin
