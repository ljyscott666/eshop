import { useSelector } from "react-redux"
import Layout from "./Layout"

//useSelector（） 跟mapStateToProps配合connect的使用差不多的道理 用来订阅Redux store
//并且每次渲染它都会调用 除非前后两次一样没有变化，只要action被dispatched就有变化

function Home() {
  const state = useSelector(state=>state)

    return <Layout>Home{JSON.stringify(state)} </Layout>
}

export default Home