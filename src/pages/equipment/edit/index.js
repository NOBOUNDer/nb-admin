import React, { useContext } from "react";
import { Row, Col, Space, Button } from "antd";
import { StoreContext } from "@/store";
import "./index.less";

const prefix = "equipment-edit-container";

function EquipmentEdit() {
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
        <Col xxl={12} xl={16} lg={18} xs={23}>
          <div className={`${prefix}-form`}>form</div>
        </Col>
      </Row>
    </div>
  );
}

export default EquipmentEdit;
