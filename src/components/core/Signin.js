import { Button, Form, Input } from "antd"
import { Layout } from "./Layout"





function Signin() {
    return <Layout title="denglu" subTitle="">
      <Form>
          
            <Form.Item name='password' label='password'>
            <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item name='email' label='email'>
            <Input></Input>
            </Form.Item>
            <Form.Item >
            <Button type="primary" htmlType="submit" ></Button>
            </Form.Item>
        </Form>
        </Layout>
}

export default Signin