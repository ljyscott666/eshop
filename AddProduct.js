import { Button, Form, Input, Upload,Select } from "antd"
import Layout from "../core/Layout"
import { UploadOutLined} from '@ant-design/icons'



function AddProduct() {
    return <Layout title="AddProduct">
       <Form>
        <Form.Item>
            <Upload>
                <Button icon={<UploadOutLined/>}>Upload Product Page</Button>
            </Upload>
        </Form.Item>
        <Form.Item label='ProductName' name='name'>
            <Input></Input>
        </Form.Item>
        <Form.Item label='ProductDescription' name='description'>
            <Input></Input>
        </Form.Item>
        <Form.Item label='Price' name='price'>
            <Input></Input>
        </Form.Item>
        <Form.Item label='Type' name='type'>
            <Select>
                <Select.Option></Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label='ProductQuantity' name='quantity'>
            <Input></Input>
        </Form.Item>
        <Form.Item label='shiped?' name='shipping'>
            <Select>
                <Select.Option value='1'>y</Select.Option>
                <Select.Option value='0'>n</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">add</Button>
        </Form.Item>
       </Form>
      
    </Layout>
}

export default AddProduct