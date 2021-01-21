import React, { useContext } from "react";
import { Row, Col, Space, Button } from "antd";
import { StoreContext } from "@/store";
import "./index.less";

const prefix = "trigger-edit-container";

function TriggerEdit() {
  const {
    state: { collapsed },
  } = useContext(StoreContext);

  return (
    <div className={prefix}>
      <div
        className={`${prefix}-operation`}
        style={{ left: collapsed ? "80px" : "200px" }}
      >
        <Space>
          <Button type="primary">Cancel</Button>
          <Button type="primary">Submit</Button>
        </Space>
      </div>
      <Row justify={"center"} gutter={20}>
        <Col xxl={10} xl={14} lg={13} md={23}>
          <div className={`${prefix}-form`}>form</div>
        </Col>
        <Col xxl={7} xl={8} lg={10} md={23}>
          <div className={`${prefix}-schedule`}>schedule</div>
        </Col>
      </Row>
    </div>
  );
}

export default TriggerEdit;
