import React from 'react';
import {Form, DatePicker} from "antd"
import {ConfigProvider} from "antd"
import locale from 'antd/lib/locale/zh_CN'; // 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
import PropTypes from "prop-types";


const {RangePicker} = DatePicker

function HDatePicker (props) {
  return (
      <div className="h-inline-datePicker">
        <label htmlFor="" className='search-label'>{props.label}</label>
        <Form.Item
            name={props.name}
            rules={props.rules}
        >
          <ConfigProvider locale={locale}>
            <RangePicker onChange={props.onChange} style={{width: '100%'}}/>
          </ConfigProvider>
        </Form.Item>
      </div>
  )
}

HDatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.array,
  onChange: PropTypes.fun,
};

export default HDatePicker
