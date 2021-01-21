import React from 'react'
import { Select, Form } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

function HSelect (props) {
  return (
    <div className="h-inline-select">
      <label htmlFor="" className='search-label'>{props.label}</label>
      <Form.Item
        name={props.name}
        rules={props.rules}
      >
        <Select defaultValue={props.defaultValue} style={{ width: '100%' }}
                placeholder={props.placeholder ? props.placeholder : '请选择'} onChange={props.onChange}>
          {
            props.options.map((item, index) => {
              return <Option key={index} value={item.value} disabeld={item.disabled}>{item.label}</Option>
            })
          }
        </Select>
      </Form.Item>
    </div>
  )
}

HSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string | PropTypes.array,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  rules: PropTypes.array,
  onChange: PropTypes.fun,
}

export default HSelect
