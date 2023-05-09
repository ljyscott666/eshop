import {Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Shop from './core/Shop'




function Routes() {
    return

    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop' component={Shop}></Route>
    </Switch>
    
}

export default Routes