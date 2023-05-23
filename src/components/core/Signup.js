import { Button, Form, Input,Spin, Result } from "antd"
import { Layout } from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../../store/actions/signup"
import { useEffect } from "react"
import {Link }from 'react-router-dom'

function Signup() {
   //获取状态
   const {loading, loaded,success, message} = useSelector(state=>state.signup)
   //将数据预注册组件相结合
   const dispatch = useDispatch()
   //表单提交
   const handleOnFinish = value=>{
     dispatch(signup(value))
   }
   
  //获取表单实例对象
    const [ form] = Form.useForm()

   //正在发送注册请求 显示loading
   const showLoading = () =>{ 
              if(loading) {
                return <Spin></Spin>
              }
   }
   //注册成功 清空表单
   useEffect(()=>{
         if(loaded && success) 
          {form.resetFields()}
         
   },[loaded,success])
   //注册成功 显示成功提示信息
   const showSuccess = () => {
    if(loaded && success) 
    return (
        <Result
    status="success"
    title="Successfully"
    
    extra={[
      <Button type="primary" >
       <Link to='/signin'> denglu</Link>
      </Button>
      
    ]}
  />
    )
   }
   //注册失败 显示失败提示信息
   const showError = () =>{
    if(loaded && !success) 
    return (
        <Result
    status="fail"
    title="fail"
    subTitle={message}
    extra={[
      <Button type="primary" >
       <Link to='/signin'> denglu</Link>
      </Button>
      
    ]}
  />
    )
   }
   //离开页面 重置注册状态
   


    return( <Layout title="denglu"  subTitle="" >
                   {showLoading()}
                   {showSuccess()}
        <Form onFinish={handleOnFinish}>
            <Form.Item name='name' label='username'>
            <Input></Input>
            </Form.Item>
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
)
}
export default Signup