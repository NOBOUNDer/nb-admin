import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

const { Search } = Input;

function QuickSearch(props) {
  console.log(props);
  const { onSearch, loading } = props;

  return (
    <Search
      loading={loading}
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
      allowClear
    />
  );
}

QuickSearch.propTypes = {
  onSearch: PropTypes.func,
  loading: PropTypes.bool,
};

export default QuickSearch;
