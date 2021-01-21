import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "antd";
import PropTypes from "prop-types";
import "./search-form.less";

const FormItem = Form.Item;

/*
 * 1、items  搜索条件  Array
 * 2、onSearch  搜索 按钮回调  Function
 * 3、formEmptyMsg  搜索条件为空时错误提示  String?
 * 4、formLayout  搜索表单layout  String?, 默认'inline'
 * 5、style  表单样式  Object?
 * 6、onReset  重置 按钮回调  Function?
 * 7、needReset  是否需要重置按钮  Boolean?  默认false
 * 8、resetText  重置按钮文字  String?  默认'重置'
 * 9、okText  确认按钮文字 String?  默认'搜索'
 * 10、children  表单最后插入元素  String/ReactNode?
 * 11、searching  确认按钮loading状态  Boolean?  默认false
 */

function SearchForm(props) {
  const [form] = Form.useForm();
  const [spellArr, setSpellArr] = useState([]);

  // 重置表单
  const handleFormReset = (e) => {
    if (e) {
      e.preventDefault();
    }
    const { onReset } = props;
    form.resetFields();
    if (typeof onReset === "function") {
      onReset();
    }
  };

  //
  const handleFormSubmit = (values) => {
    props.onSearch(values);
  };

  const {
    children,
    items,
    /* 搜索条件选项，元素为Object，包含字段：
     * content -> 搜索框  ReactNode
     * decorator -> getFieldDecorator的标识符  String
     * label -> FormItem的label  String?
     * options -> getFieldDecorator的options  Object?
     * */
    needReset,
    okText,
    resetText,
    searching = false,
    layout = "inline",
    style,
    formItemLayout = {
      xs: 24,
      sm: 12,
      md: 8,
      lg: 6,
    },
  } = props;

  // 表单项
  const formItems = items.map((item) => (
    <Col {...formItemLayout} key={item.name}>
      <label htmlFor="" className="search-label">
        {item.label}
      </label>
      <FormItem name={item.name} rules={item.rules}>
        {item.content}
      </FormItem>
    </Col>
  ));

  const formItemsSpell = () => {
    console.log("formItemsSpell");
    const clientWidth = document.body.clientWidth;
    let col = 0;
    if (clientWidth < 576) {
      col = 1;
    } else if (clientWidth >= 576 && clientWidth < 768) {
      col = 2;
    } else if (clientWidth >= 768 && clientWidth < 992) {
      col = 3;
    } else {
      col = 4;
    }
    let length = 4;
    length =
      items.length - col > 0
        ? col - 1 - (items.length % col)
        : items.length - col === 0
        ? col - 1
        : col - 1 - items.length;
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push({ label: "spell" + i });
    }
    // if (length === spellArr.length) return false;
    setSpellArr(arr);
  };

  useEffect(() => {
    formItemsSpell();
    window.addEventListener("resize", formItemsSpell);

    // 页面卸载移除监听
    return () => {
      console.log("页面卸载移除监听");
      window.removeEventListener("resize", formItemsSpell);
    };
  }, []);

  return (
    <div className="search-form-container">
      <Form
        form={form}
        layout={layout}
        onFinish={handleFormSubmit}
        style={{ marginBottom: 15, ...style }}
      >
        {formItems}
        {spellArr.map((item, index) => (
          <Col {...formItemLayout} key={"spell" + index}>
            <FormItem />
          </Col>
        ))}
        <Col {...formItemLayout}>
          <label htmlFor="" className="search-label-empty">
            empty-label
          </label>
          <FormItem>
            <div style={{ textAlign: "right" }}>
              {needReset && (
                <Button
                  htmlType="reset"
                  style={{ marginRight: 15 }}
                  onClick={handleFormReset}
                >
                  {resetText || "重置"}
                </Button>
              )}
              <Button htmlType="submit" type="primary" loading={searching}>
                {okText || "搜索"}
              </Button>
            </div>
          </FormItem>
        </Col>
        {children}
      </Form>
    </div>
  );
}

SearchForm.propTypes = {
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
export default SearchForm;
