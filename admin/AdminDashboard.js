import { Col, Menu, Row ,Typography,Descriptions} from "antd"
import { Layout } from "../core/Layout"
import Link from "next/link"
import { ShoppingCartOutlined,UserOutlined,OrderedListOutlined} from '@ant-design/icons'
import { isAuth } from "../../helpers/auth"



const { Title } =Typography

function AdminDashboard() {

      const {user:{name, email} } = isAuth()


   //添加分类  添加商品 订单列表
    const adminLinks = ()=>{
        <>
        <Title level={5} >Admin link</Title>
        <Menu>  
            <Menu.Item>
                <ShoppingCartOutlined></ShoppingCartOutlined>
                <Link>添加分类</Link>
            </Menu.Item>
            <Menu.Item>
                <UserOutlined></UserOutlined>
                <Link>添加商品</Link>
            </Menu.Item>
            <Menu.Item>
                <OrderedListOutlined></OrderedListOutlined>
                <Link>订单列表</Link>
            </Menu.Item>
        </Menu></>
    }

    const adminInfo = ()=> {
          <> 
          <Descriptions title="admin info" bordered>
            <Descriptions.Item label='name'>{name}</Descriptions.Item>
            <Descriptions.Item label='email'>{email}</Descriptions.Item> 
            <Descriptions.Item label='role'>admin</Descriptions.Item>   
          </Descriptions>
          </>
    }

    return <Layout title="ADMIN DASHBOARD">
         <Row gutter={[10,20]}>
            <Col span="4">{adminLinks()}</Col>
            <Col span="20">{adminInfo()}</Col>
         </Row>

    </Layout>
}

export default AdminDashboard


/**
 * 主要是针对antd的一个应该用了栅格来分左右
 * 用了Menu, Row ,Typography,Descriptions来实现内容
 * 因为是管理员界面所以角色是确定的 只需要有name和email信息从
 * isAuth（）方法中拿到信息就行了 这些信息存在localStorage里面
 * 
 */