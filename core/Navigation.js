import { Menu } from "antd"
import { useSelector } from "react-redux"
import { Link} from 'react-router-dom'
import{ isAuth} from '../../helpers/auth'

function Navigation() {
    const router = useSelector(state=>state.router)
    const auth = isAuth()
    const showAuth = ()=>{
        return(
        <>  <Menu.Item key='/signin'>
            <Link to="/signin">denglu</Link>
        </Menu.Item>
        <Menu.Item key='/signup'>
            <Link to="/signup">dengru</Link>
        </Menu.Item>
        </>)
    }
    const showDashboard = () => {
        const url =auth.user.role ===1 ? '/admin/dashboard':'/user/dashboard'
       return(
        <>    
        <Menu.Item key={url}>
        <Link to={url}>Dashboard</Link>
        </Menu.Item>
        </>
       )  
    //判断用户角色

    }
    return <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
        <Menu.Item key='/'>
            <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key='/shop'>
            <Link to="/shop">商城</Link>
        </Menu.Item>
          {auth ? showDashboard() : showAuth()}
          
    </Menu>
}
//  {auth ? showDashboard() : showAuth()} 判断用户角色 输出对应dashboard
export default Navigation