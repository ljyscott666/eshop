import { Menu } from "antd"
import { Link} from 'react-router-dom'

function Navigation() {
    return <Menu>
        <Menu.Item>
            <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/shop">商城</Link>
        </Menu.Item>
    </Menu>
}

export default Navigation