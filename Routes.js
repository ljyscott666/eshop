import {Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Shop from './core/Shop'
import Signin from './core/Signin'
import Signup from './core/Signup'
import UserDashboard from './admin/UserDashboard'
import AdminDashboard from './admin/AdminDashboard'
import PrivateUser from './admin/PrivateUser'
import AdminPrivate from './admin/PrivateAdmin'




function Routes() {
    return

    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop' component={Shop}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path='/signup' component={Signup}></Route>
        <PrivateUser path='/user/dashboard' component={UserDashboard}></PrivateUser>
        <AdminPrivate path='/admin/dashboard' component={AdminDashboard}></AdminPrivate>
    </Switch>
    
}


export default Routes