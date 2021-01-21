/* 列表页通用 */

import { useState, useEffect } from "react";

export function useList(fun, columns) {
  const [tableData, setTableData] = useState([]); // table 数据
  const [page, setPage] = useState(1); // 页码
  const [size, setSize] = useState(10); // 每页条数
  const [total, setTotal] = useState(0); // 总条数
  const [params, setParams] = useState({}); // 请求数据
  const [loading, setLoading] = useState(false); // Table loading状态
  const [scrollWidth, setScrollWidth] = useState(0);

  // 请求 list
  const list = async () => {
    console.log("list", page, size);
    setLoading(true);
    const res = await fun({ ...params, page, size }).finally(() =>
      setLoading(false)
    );
    setTableData((res.data && res.data.records) || []);
    setTotal((res.data && res.data.total) || 0);
  };

  // 分页数据 change
  const pageChange = (page) => {
    console.log("pageChange");
    setPage(page);
  };

  // 分页 size change
  const sizeChange = (page, size) => {
    console.log("sizeChange");
    setSize(size);
  };

  // 提交检索
  const onSearch = (values) => {
    console.log(values);
    let newValues = {};
    Object.keys(values).forEach((item) => {
      if (values[item]) newValues[item] = values[item];
    });
    setParams(newValues);
  };

  // 重置检索
  const onReset = () => {
    setParams({});
  };

  // 计算 table 宽度
  const tableWidth = () => {
    let width = 0;
    columns.forEach((item) => {
      if (item.width) width += item.width;
    });
    setScrollWidth(width);
  };

  // 分页数据 change 时请求 list
  useEffect(() => {
    console.log("搜素数据", params);
    list();
  }, [page, size, params]);

  useEffect(() => {
    tableWidth();
  });

  return [
    list,
    tableData,
    scrollWidth,
    loading,
    page,
    total,
    pageChange,
    sizeChange,
    onSearch,
    onReset,
  ];
}
