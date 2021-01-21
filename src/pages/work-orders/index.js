/* 工单 */
import React, { useState, useRef } from "react";
import { useList } from "@/hooks/list";
import {
  Button,
  Table,
  Drawer,
  Select,
  Popover,
  Modal,
  Input,
  Space,
  Divider,
} from "antd";
import Paginations from "@/components/Paginations";
import { listWorkOrder } from "@/api";
import "./index.less";
import {
  FilterOutlined,
  EnvironmentOutlined,
  UserOutlined,
  CalendarOutlined,
  BarsOutlined,
  BarChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import QuickSearch from "@/components/QuickSearch";
import CustomForm from "@/components/CustomForm";
import { Edit, Delete } from "@/components/Button";
import ButtonGroup from "antd/es/button/button-group";

const prefix = "work-orders-container";

const { Option } = Select;

function WorkOrders() {
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [currentTab, setCurrentTab] = useState("table");
  const AddForm = useRef();

  const statusOptions = [
    {
      value: "open",
    },
    {
      value: "On Hold",
    },
    {
      value: "In Progress",
    },
    {
      value: "Complete",
    },
  ];

  const tagRender = (pro) => {
    const { label } = pro;
    return (
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        {label};
      </div>
    );
  };

  const handleCancel = () => {
    setVisibleSearch(false);
  };

  const handleOk = () => {
    setVisibleSearch(false);
  };

  const onSearch = (val) => {
    setLoadingSearch(true);
    console.log(val);
    setTimeout(() => {
      setLoadingSearch(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    const res = await AddForm.current.onSubmit();
    console.log("2323123123", res);
  };

  const handleOnClose = () => {
    AddForm.current.onReset();
    setVisibleAdd(false);
  };

  // 筛选项
  const filters = [
    {
      prop: "moreFilter",
      content: (
        <Button onClick={() => setVisible(true)}>
          <FilterOutlined /> Filter
        </Button>
      ),
    },
    {
      prop: "person",
      content: (
        <Popover
          content={<QuickSearch loading={loadingSearch} onSearch={onSearch} />}
          trigger="click"
          placement="bottom"
        >
          <Button>
            <UserOutlined /> everyone
          </Button>
        </Popover>
      ),
    },
    {
      prop: "person",
      content: (
        <Button onClick={() => setVisibleSearch(true)}>
          <EnvironmentOutlined /> AnyWhere
        </Button>
      ),
    },
    {
      prop: "date",
      content: (
        <Button onClick={() => setVisible(true)}>
          <CalendarOutlined /> Any Day
        </Button>
      ),
    },
    {
      prop: "status",
      content: (
        <Select
          prefix={<CalendarOutlined />}
          mode="multiple"
          showArrow
          tagRender={tagRender}
          placeholder="工单状态"
          style={{ minWidth: "260px" }}
          options={statusOptions}
        />
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

  // tabs
  const tabList = [
    {
      title: "table",
      icon: <BarsOutlined />,
    },
    {
      title: "view",
      icon: <BarChartOutlined />,
    },
    {
      title: "calendar",
      icon: <CalendarOutlined />,
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
    <div className={`${prefix}`}>
      {/*tabs*/}
      <div className={`${prefix}-tabs`}>
        <div className={`${prefix}-tabs-left`}>
          <Space>
            <ButtonGroup>
              {tabList.map((tab) => {
                return (
                  <Button
                    key={tab.title}
                    onClick={() => setCurrentTab(tab.title)}
                    className={currentTab === tab.title && "active"}
                    icon={tab.icon}
                  />
                );
              })}
            </ButtonGroup>
            <QuickSearch loading={loadingSearch} onSearch={onSearch} />
          </Space>
        </div>
        <div className={`${prefix}-tabs-right`}>
          <Button
            type="primary"
            shape="round"
            onClick={() => setVisibleAdd(true)}
          >
            + Work Order
          </Button>
        </div>
      </div>

      <Divider />

      {/*顶部操作 筛选、新建工单*/}
      <div className={`${prefix}-operation`}>
        <div className={`${prefix}-filter`}>
          <Space>
            {filters.map((f, i) => {
              return <span key={i}>{f.content}</span>;
            })}
          </Space>
        </div>
        <SyncOutlined className={`${prefix}-operation-sync`} onClick={list} />
      </div>

      {currentTab === "table" && (
        <div className={`${prefix}-table`}>
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
      )}

      {currentTab === "view" && (
        <div className={`${prefix}-view`}>数据看板</div>
      )}

      {currentTab === "calendar" && (
        <div className={`${prefix}-calendar`}>日历</div>
      )}

      {/*条件筛选*/}
      <Drawer
        title="Filter Drawer"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>Filter Form</p>
      </Drawer>

      {/*新建工单*/}
      <Drawer
        width={360}
        title="Add Work Order"
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

      {/*搜索弹框*/}
      <Modal
        title="Search Modal"
        visible={visibleSearch}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <QuickSearch onSearch={onSearch} loading={loadingSearch} />
        <p style={{ marginTop: "20px", textAlign: "center" }}>搜索结果...</p>
      </Modal>
    </div>
  );
}

export default WorkOrders;
