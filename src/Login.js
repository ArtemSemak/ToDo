import React, { useState } from 'react';
import { Modal, Button, Form, Input  } from 'antd';
import './App.css';

function Login({ loginUser, showLogin, setShowLogin, setShowRegistration}) {

    function backToLogin() {
      setShowRegistration(false)
      setShowLogin(true)
    }

    function openRegistration() {
        setShowLogin(false)
        setShowRegistration(true)
    }

    function onFinish(values)  {
        loginUser(values)
        console.log('Success:', values);
      };
    
      function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
      };

    return (
        <Modal title="Basic Modal" visible={showLogin} onCancel={backToLogin} footer={[]}>
         <Form
      name="basic"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 15,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="login"
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

      
    

      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 16,
          span: 16,
        }}
      >
        <Button type="link" onClick={openRegistration}>
          Registration
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    )
}

export default Login