/*安装位置*/
import React, { useRef, useState } from "react";
import { Button, Drawer, Space, Table, Input, Select } from "antd";
import { useList } from "@/hooks/list";
import { listWorkOrder } from "@/api";
import { Edit, Delete } from "@/components/Button";
import Paginations from "@/components/Paginations";
import { FilterOutlined, SyncOutlined } from "@ant-design/icons";
import "./index.less";
import CustomForm from "@/components/CustomForm";

const prefix = "location-container";
const { Option } = Select;

function Location() {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const AddForm = useRef();

  const handleSubmit = async () => {
    const res = await AddForm.current.onSubmit();
    console.log("2323123123", res);
  };

  const handleOnClose = () => {
    AddForm.current.onReset();
    setVisibleAdd(false);
  };

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

  // 筛选项
  const filters = [
    {
      prop: "moreFilter",
      content: (
        <Button>
          <FilterOutlined /> Filter
        </Button>
      ),
    },
  ];

  // 表单项
  const formItems = [
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a1",
      label: "公司名称",
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a2",
      label: "商标名称",
    },
    {
      content: (
        <Select
          style={{ width: "100%" }}
          placeholder="请选择"
          optionFilterProp="children"
        >
          <Option value="0">已注册</Option>
          <Option value="1">申请中</Option>
          <Option value="2">初审通过</Option>
          <Option value="3">异议跟进</Option>
          <Option value="4">初审失败</Option>
          <Option value="5">无效</Option>
        </Select>
      ),
      name: "a3",
      label: "商标状态",
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a6",
      label: "商标类别",
      rules: [{ required: true }],
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a7",
      label: "注册号",
      rules: [{ required: true }],
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a8",
      label: "注册号8",
      rules: [{ required: true }],
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a9",
      label: "注册号9",
      rules: [{ required: true }],
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a10",
      label: "注册号10",
      rules: [{ required: true }],
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a11",
      label: "注册号11",
      rules: [{ required: true }],
    },
    {
      content: <Input placeholder="请输入" allowClear autoComplete="off" />,
      name: "a12",
      label: "注册号12",
      rules: [{ required: true }],
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
            onClick={() => setVisibleAdd(true)}
          >
            + Location
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

      {/*新建安装位置*/}
      <Drawer
        width={360}
        title="Add Location"
        placement="right"
        onClose={() => handleOnClose()}
        visible={visibleAdd}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={() => handleOnClose()} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={() => handleSubmit()} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <CustomForm items={formItems} ref={AddForm} />
      </Drawer>
    </div>
  );
}

export default Location;
