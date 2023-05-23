import { Menu } from "antd"
import { useSelector } from "react-redux"
import { Link} from 'react-router-dom'

function Navigation() {
    const router = useSelector(state=>state.router)


    return <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
        <Menu.Item key='/'>
            <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key='/shop'>
            <Link to="/shop">商城</Link>
        </Menu.Item>
        <Menu.Item key='/signin'>
            <Link to="/signin">denglu</Link>
        </Menu.Item>
        <Menu.Item key='/signup'>
            <Link to="/signup">dengru</Link>
        </Menu.Item>
    </Menu>
}

export default Navigation