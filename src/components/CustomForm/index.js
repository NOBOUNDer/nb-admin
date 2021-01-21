import React, { forwardRef, useImperativeHandle } from "react";
import { Form } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

const prefix = "custom-form-container";

// eslint-disable-next-line react/display-name
const CustomForm = forwardRef((props, _ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(_ref, () => ({
    // onSubmit 就是暴露给父组件的方法
    onSubmit: async () => {
      return await form.validateFields();
    },

    onReset: () => {
      form.resetFields();
    },
  }));

  const {
    children,
    items,
    /* 搜索条件选项，元素为Object，包含字段：
     * content -> 搜索框  ReactNode
     * decorator -> getFieldDecorator的标识符  String
     * label -> FormItem的label  String?
     * options -> getFieldDecorator的options  Object?
     * */
    layout = "vertical",
    style,
  } = props;

  // 表单项
  const formItems = items.map((item) => (
    <FormItem
      key={item.name}
      name={item.name}
      label={item.label}
      rules={item.rules}
    >
      {item.content}
    </FormItem>
  ));

  return (
    <div className={prefix}>
      <Form form={form} layout={layout} style={{ marginBottom: 15, ...style }}>
        {formItems}
        <FormItem>{children}</FormItem>
        {/*{children}*/}
      </Form>
    </div>
  );
});

CustomForm.propTypes = {
  onSearch: PropTypes.func,
  onReset: PropTypes.func,
  children: PropTypes.element,
  items: PropTypes.array,
  needReset: PropTypes.bool,
  okText: PropTypes.string,
  resetText: PropTypes.string,
  searching: PropTypes.bool,
  layout: PropTypes.string,
  style: PropTypes.object,
  formItemLayout: PropTypes.object,
};

export default CustomForm;
