import React from "react";
import HInput from "./baseComponents/h-input";
import HSelect from "./baseComponents/h-select";
import HDatePicker from "./baseComponents/h-date-picker";
import SearchForm from "../SearchForm";
import { Form, Col, Button, Input, DatePicker } from "antd";
import QuickSearch from "../QuickSearch";
// import moment from "moment"
import "moment/locale/zh-cn";

const { RangePicker } = DatePicker;

// 表单项配置
const formConfig = [
  {
    type: "input",
    name: "name1",
    label: "字段1",
    placeholder: "ddd",
  },
  {
    type: "select",
    name: "name2",
    label: "字段2",
    options: [
      { label: "选项1", value: 1 },
      { label: "选项2", value: 2 },
    ],
  },
  {
    type: "date-picker",
    name: "name3",
    label: "字段3",
  },
  {
    type: "input",
    name: "name4",
    label: "字段4",
    placeholder: "ddd",
  },
  {
    type: "input",
    name: "name5",
    label: "字段5",
    placeholder: "ddd",
  },
  {
    type: "input",
    name: "name6",
    label: "字段6",
    placeholder: "ddd",
  },
  {
    type: "input",
    name: "name7",
    label: "字段7",
    placeholder: "ddd",
  },
  {
    type: "input",
    name: "name8",
    label: "字段8",
    placeholder: "ddd",
  },
];

// 初始化数据
const initialValues = {
  name1: "name1",
  name2: 1,
  name3: [],
  name4: "name4",
  name5: "name5",
  name6: "name6",
  name7: "name7",
  name8: "name8",
};

const formLayout = "inline";

const formItemLayout = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
};

function componentsDemo() {
  const formItems = [
    {
      content: (
        <Input placeholder="购买人手机号1" allowClear autoComplete="off" />
      ),
      name: "phone1",
      label: "手机号1",
    },
    {
      content: (
        <Input placeholder="购买人手机号2" allowClear autoComplete="off" />
      ),
      name: "phone2",
      label: "手机号2",
    },
    {
      content: (
        <Input placeholder="购买人手机号3" allowClear autoComplete="off" />
      ),
      name: "phone3",
      label: "手机号3",
    },
    {
      content: (
        <Input placeholder="购买人手机号4" allowClear autoComplete="off" />
      ),
      name: "phone4",
      label: "手机号4",
    },
    {
      content: <RangePicker style={{ width: "100%" }} />,
      name: "phone5",
      label: "手机号5",
    },
    {
      content: (
        <Input placeholder="购买人手机号6" allowClear autoComplete="off" />
      ),
      name: "phone6",
      label: "手机号6",
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChangeSelect = (value, option) => {
    console.log("select组件选择onChange", value, option);
  };

  const handleChangeDate = (date, dateString) => {
    console.log("date-picker组件选择onChange", date, dateString);
  };

  return (
    <div className="components-demo-container">
      <h1>组件示例</h1>
      <Form initialValues={initialValues} layout={formLayout}>
        {formConfig.map((item, index) => {
          switch (item.type) {
            case "input":
              return (
                <Col {...formItemLayout} key={index}>
                  <HInput
                    name={item.name}
                    label={item.label ? item.label : ""}
                    rules={item.rules ? item.rules : []}
                    placeholder={item.placeholder ? item.placeholder : "请输入"}
                    addonBefore={item.addonBefore ? item.addonBefore : null}
                    addonAfter={item.addonAfter ? item.addonAfter : null}
                    disabled={item.disabled ? item.disabled : false}
                  />
                </Col>
              );
            case "select":
              return (
                <Col {...formItemLayout} key={index}>
                  <HSelect
                    name={item.name}
                    label={item.label ? item.label : ""}
                    rules={item.rules ? item.rules : []}
                    options={item.options}
                    onChange={handleChangeSelect}
                  />
                </Col>
              );
            case "date-picker":
              return (
                <Col {...formItemLayout} key={index}>
                  <HDatePicker
                    name={item.name}
                    label={item.label ? item.label : ""}
                    rules={item.rules ? item.rules : []}
                    onChange={handleChangeDate}
                  />
                </Col>
              );
            default:
              return (
                <Col {...formItemLayout} key={index}>
                  <HInput
                    name={item.name}
                    label={item.label ? item.label : ""}
                    rules={item.rules ? item.rules : []}
                    placeholder={item.placeholder ? item.placeholder : "请输入"}
                    addonBefore={item.addonBefore ? item.addonBefore : null}
                    addonAfter={item.addonAfter ? item.addonAfter : null}
                    disabled={item.disabled ? item.disabled : false}
                  />
                </Col>
              );
          }
        })}
        <Col {...formItemLayout}>
          <Form.Item>
            <label htmlFor="" className="search-label-empty">
              empty-label
            </label>
            <div style={{ textAlign: "right" }}>
              <Button type="primary">搜索</Button>
              <Button type="primary">重置</Button>
            </div>
          </Form.Item>
        </Col>
      </Form>
      <br />
      <br />
      <br />
      <h1>search-form组件</h1>
      <SearchForm items={formItems} onSearch={handleSubmit} needReset={true} />
      <br />
      <br />
      <br />
      <QuickSearch />
    </div>
  );
}

export default componentsDemo;
