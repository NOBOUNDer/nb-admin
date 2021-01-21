import React from 'react'
import { Result, Button } from 'antd'
import PropTypes from 'prop-types'
import './index.less'

const NotFound = (props) =>
  <Result
    status="404"
    title="404"
    subTitle="对不起，您访问的页面不存在"
    extra={<Button type="primary" onClick={() => props.history.push('/')}>返回首页</Button>}
  />

NotFound.propTypes = {
  history: PropTypes.object
}
export default NotFound
