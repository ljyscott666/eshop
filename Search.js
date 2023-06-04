import { Button, Form, Input, Select } from "antd"

function Search() {
    return<>
    <Form layout="inline" initialValues={{category:'all'}} > 
    <Input.Group>
        <Form.Item name='category'>
            <Select>
                <Select.Option value='all'>
                    all categories
                </Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name='search'>
            <Input placeholder="plz add key words"></Input>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit"></Button>
        </Form.Item></Input.Group>
    </Form>
    </>
}

export default Search