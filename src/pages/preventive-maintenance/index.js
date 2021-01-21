import React from "react";
import { Button, Space, Table } from "antd";
import {
  FilterOutlined,
  EnvironmentOutlined,
  UserOutlined,
  CalendarOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { useList } from "@/hooks/list";
import { listWorkOrder } from "@/api";
import { Edit, Delete } from "@/components/Button";
import Paginations from "@/components/Paginations";
import "./index.less";
import PropTypes from "prop-types";

const prefix = "preventive-maintenance-container";

function PreventiveMaintenance(props) {
  // 筛选项
  const filters = [
    {
      prop: "moreFilter",
      content: (
        <Button>
          <FilterOutlined />
        </Button>
      ),
    },
    {
      prop: "person",
      content: (
        <Button>
          <UserOutlined /> everyone
        </Button>
      ),
    },
    {
      prop: "person",
      content: (
        <Button>
          <EnvironmentOutlined /> AnyWhere
        </Button>
      ),
    },
    {
      prop: "priority",
      content: (
        <Button>
          <CalendarOutlined /> Any Priority
        </Button>
      ),
    },
  ];

  // 列表项
  const columns = [
    {
      title: "Due",
      dataIndex: "due",
      width: 120,
    },
    {
      title: "WO #",
      dataIndex: "wo",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 100,
    },
    {
      title: "Work Order Title",
      dataIndex: "orderTitle",
      width: 140,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      width: 100,
    },
    {
      title: "Assignee(s)",
      dataIndex: "assignee",
      width: 120,
    },
    {
      title: "Location Name",
      dataIndex: "location",
      width: 140,
    },
    {
      title: "Asset",
      dataIndex: "asset",
      width: 100,
    },
    {
      title: "Last Updated",
      dataIndex: "updatedTime",
      width: 120,
    },
    {
      title: "Created On",
      dataIndex: "createdTime",
      width: 120,
    },
    {
      title: "操作",
      width: 90,
      // eslint-disable-next-line react/display-name
      render: () => {
        return (
          <div>
            <Edit />
            <Delete />
          </div>
        );
      },
      fixed: "right",
    },
  ];

  const [
    list,
    tableData,
    scrollWidth,
    loading,
    page,
    total,
    pageChange,
    sizeChange,
  ] = useList(listWorkOrder, columns);

  return (
    <div className={prefix}>
      <div className={`${prefix}-operation`}>
        <div className={`${prefix}-filter`}>
          <Space>
            {filters.map((f, i) => {
              return <span key={i}>{f.content}</span>;
            })}
          </Space>
        </div>
        <Space>
          <SyncOutlined className={`${prefix}-operation-sync`} onClick={list} />
          <Button
            type="primary"
            shape="round"
            onClick={() =>
              props.history.push("/admin/preventiveMaintenance/triggerAdd")
            }
          >
            + Trigger
          </Button>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={tableData}
        loading={loading}
        pagination={false}
        rowKey={"id"}
        scroll={{
          x: scrollWidth,
        }}
      />
      <Paginations
        page={page}
        total={total}
        pageChange={pageChange}
        sizeChange={sizeChange}
      />
    </div>
  );
}

PreventiveMaintenance.propTypes = {
  history: PropTypes.object,
};

export default PreventiveMaintenance;
