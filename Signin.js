import { Button, Form, Input } from "antd"
import { Layout } from "./Layout"
import axios from "axios"
import {API} from '../../config '
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"





function Signin() {
    
     const history = useHistory()
   

    const handleOnFinish = async value => {
      let res=  await  axios.post(`${API}/signin`,value)
      localStorage.setItem('jwt',JSON.stringify(res.data))
      const url = res.data.user.role ===1 ? '/admin/dashboard':'/user/dashboard'
        history.push(url)
    }
   
 

    return <Layout title="denglu" subTitle="">
      <Form onFinish={handleOnFinish}>
          <Form.Item name='email' label='email'>
            <Input></Input>
            </Form.Item>
            <Form.Item name='password' label='password'>
            <Input.Password></Input.Password>
            </Form.Item>
            
            <Form.Item >
            <Button type="primary" htmlType="submit" ></Button>
            </Form.Item>
        </Form>
        </Layout>
}

export default Signin




/**
 * 
 */
 