import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "./index.less";

export const Edit = (props) => {
  return (
    <span className="table-operate-button">
      <EditOutlined onClick={props.onClick} />
    </span>
  );
};

export const Delete = (props) => {
  return (
    <span className="table-operate-button">
      <DeleteOutlined onClick={props.onClick} />
    </span>
  );
};

Edit.propTypes = {
  onClick: PropTypes.func,
};

Delete.propTypes = {
  onClick: PropTypes.func,
};
