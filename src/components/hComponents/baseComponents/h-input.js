import React from 'react'
import { Input, Form } from 'antd'
import PropTypes from 'prop-types'

function HInput (props) {
  return (
    <div className="h-inline-input">
      <label htmlFor="" className='search-label'>{props.label}</label>
      <Form.Item
        name={props.name}
        rules={props.rules}
      >
        <Input placeholder={props.placeholder ? props.placeholder : '请输入'} allowClear
               addonBefore={props.addonBefore}
               addonAfter={props.addonAfter}
               disabled={props.disabled}/>
      </Form.Item>
    </div>
  )
}

HInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  addonBefore: PropTypes.element,
  addonAfter: PropTypes.element,
  disabled: PropTypes.bool,
  rules: PropTypes.array,
  onChange: PropTypes.fun,
}

export default HInput
