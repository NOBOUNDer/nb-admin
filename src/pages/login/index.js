import React, {useEffect} from 'react'
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import PropTypes from "prop-types";
import Logo from '@/img/logo.png'
import './index.less'
import {setToken, isLogined} from "@/utils/auth"

const prefix = 'login-container'

function Login (props) {

  useEffect(() => {
    if (isLogined()) { // 已经登录过直接跳转首页
      props.history.push('/')
    }
  }, [])

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const {username, password} = values
    if (username === 'admin' && password === 'admin') { // 账号密码验证通过，存储token，跳转首页
      setToken('ejikdld930393ldldls01203ff')
      message.success('登录成功')
      props.history.push('/')
    } else {
      message.error('用户名或密码错误')
    }
  };

  return (
      <div className={prefix}>
        <div className={`${prefix}-wrap`}>
          <div className={`${prefix}-wrap-title`}>
            <img src={Logo} alt="logo"/>
            <span className={`${prefix}-wrap-title-content`}>商标分析平台</span>
          </div>
          <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
          >
            <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ]}
            >
              <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="密码"
              />
            </Form.Item>
            {/*<Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="http://www.baidu.com">
                Forgot password
              </a>
            </Form.Item>*/}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              {/*Or <a href="http://www.baidu.com">register now!</a>*/}
            </Form.Item>
          </Form>
        </div>
      </div>
  )
}

Login.propTypes = {
  history: PropTypes.func,
};

export default Login
