import React from 'react'
import { Col, Row, Pagination } from 'antd'
import './index.less'
import PropTypes from 'prop-types'

function Paginations (props) {
  const { page, total, pageChange, sizeChange, children } = props
  return (
    <Row justify="space-between" className="pagination-container">
      <Col span={6}>
        {children}
      </Col>
      <Col span={18}>
        <Pagination
          showQuickJumper
          showSizeChanger
          current={page}
          total={total}
          onChange={pageChange}
          onShowSizeChange={sizeChange}
        />
      </Col>
    </Row>
  )
}

Paginations.propTypes = {
  page: PropTypes.number,
  total: PropTypes.number,
  pageChange: PropTypes.func,
  sizeChange: PropTypes.func,
  children: PropTypes.element
}

export default Paginations
