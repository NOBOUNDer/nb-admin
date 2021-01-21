import React from "react";
import { Link } from "react-router-dom";
import { pathTo } from "@/utils/utils";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const Breadcrumbs = ({ route }) => (
  <Breadcrumb style={{ marginBottom: "3px" }}>
    <Breadcrumb.Item>
      <Link to={"/"}>
        <HomeOutlined />
      </Link>
    </Breadcrumb.Item>
    {pathTo(route).map((crumb, index, breadcrumbs) => {
      return crumb.path !== "/admin/dashboard" ? (
        <Breadcrumb.Item key={index}>
          {index < breadcrumbs.length - 1 &&
            (!crumb.root ? (
              <Link to={crumb.path}>{crumb.title}</Link>
            ) : (
              crumb.title
            ))}
          {index === breadcrumbs.length - 1 && crumb.title}
        </Breadcrumb.Item>
      ) : null;
    })}
  </Breadcrumb>
);

Breadcrumbs.propTypes = {
  route: PropTypes.object,
};

export default Breadcrumbs;
