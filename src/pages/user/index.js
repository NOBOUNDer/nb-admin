import React from "react";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./index.less";

const prefix = "user-container";

function User() {
  const formItems = [
    {
      prop: "username",
      label: "姓名",
      content: <h1 className={`${prefix}-item-user-info-username`}>陆锦天</h1>,
    },
    {
      prop: "email",
      label: "邮箱",
      content: <h1>flutes@163.com</h1>,
    },
    {
      prop: "phoneNumber",
      label: "电话",
      content: <h1>+86 18550126732</h1>,
    },
    {
      prop: "jobTitle",
      label: "职位",
      content: <h1>web前端开发工程师</h1>,
    },
  ];
  return (
    <div className={prefix}>
      <Row justify={"center"} gutter={20}>
        <Col xxl={12} xl={16} lg={18} xs={22} className={`${prefix}-item`}>
          <Row gutter={20}>
            <Col span={6} className={`${prefix}-item-icon-user`}>
              <UserOutlined />
            </Col>
            <Col span={18} className={`${prefix}-item-user-info`}>
              {formItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${prefix}-item-user-info-section`}
                  >
                    {item.prop !== "username" && (
                      <label htmlFor="">{item.label}</label>
                    )}
                    {item.content}
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default User;
