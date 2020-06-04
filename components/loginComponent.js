import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col } from 'antd';
export default function LoginComponent () {

  return (
    /*
     xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}
     xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}
     xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}

     <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    */
    
      <Row style={{width: '100%'}}>
     <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{backgroundColor: '#333'}}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{backgroundColor: '#666'}}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{backgroundColor: '#999'}}>
      Col
    </Col>
    </Row>
   
      
      
      

    


      
      
      
      
    );
  };
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
