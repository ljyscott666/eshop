import { Button, Form, Input, Upload,Select, message } from "antd"
import Layout from "../core/Layout"
import { UploadOutLined} from '@ant-design/icons'
import { useEffect, useState } from "react"
//useEffect当事件挂载上了以后来触发 所以用useEffect
import axios from "axios"
import { API } from "../../config"
import { isAuth } from "../../helpers/auth"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



function AddProduct() {

    const [file,setFile] =useState()
    const  [categories,setCategories]  = useState([])
    const  history =useHistory()
    //利用history的钩子函数来完成条件 这里使用了history.push完成跳转
    useEffect(()=>{
        async function getCategories()
        {
           let res = await axios.get(`${API}/categories`)
           setCategories(res.data)
        }
        getCategories()
        
    },[])

    const props = {
        beforeUpload(file  ) {
            setFile(file)
            return false
        }
    }
   
    const { user, token} = isAuth()
  //结构user和token 用于上传
  const [form] = Form.useForm() 
//1、从Form.useForm()里面拿到form
//2、 <Form form={form} 将Form标签的form方法赋予Form.useForm()
//3、 form.resetFields()然后form就有了全套功能 就可以调用resetFileds方法
    const onFinish = value =>{
        const formData =new FormData()
        for(let arr in value) {
            formData.append(arr,value[arr])
        }
        formData.append('photo',file)

        axios.post(`${API}/product/create/${user._id}`,formData,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(()=>{message.success('add product success ')
         form.resetFields()
         history.push('/admin/dashboard')
    })
    }

    return <Layout title="AddProduct">
       <Form form={form} onFinish={onFinish} initialValues={{type:'-1'}}>
        <Form.Item>
            <Upload {...props}>
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
            <Select >
                <Select.Option value='-1'></Select.Option>
                {
                    categories.map(({name,_id}) => (
                        <Select.Option key={_id } value={_id}>{name}</Select.Option>
                    )
                )}
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