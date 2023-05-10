import Navigation from "./Navigation"
import { PageHeader } from "antd"


function Layout({children,title,subTitle}) {
    return <div>
        <Navigation></Navigation>
        <PageHeader title={title} subTitle={subTitle} className="jumbotron"></PageHeader>
        {children}</div>
}
export default Layout