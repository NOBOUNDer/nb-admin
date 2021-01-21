import React, { useContext } from "react";
import { Layout } from "antd";
import "./index.less";
import Siders from "../Sider";
import PropTypes from "prop-types";
// import Footers from "@/layout/Footer";
import Headers from "../Header";
import { StoreContext } from "@/store";

const { Content } = Layout;

const Frame = (props) => {
  const {
    state: { collapsed },
  } = useContext(StoreContext);
  return (
    <Layout className="frame-container">
      <Siders />
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? "80px" : "200px",
          transition: "all .2s",
        }}
      >
        <Headers />
        <Content
          style={{
            marginTop: "64px",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {props.children}
        </Content>
        {/*<Footers />*/}
      </Layout>
    </Layout>
  );
};

Frame.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element,
};

export default Frame;
