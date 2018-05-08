import React from 'react'
import './style.css'
import { Pagination } from 'antd'

export default function(ReactDOM, mountNode) {
  function showTotal(total) {
    return `Total ${total} items`
  }

  ReactDOM.render(
    <div>
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <Pagination size="small" total={50} showTotal={showTotal} />
    </div>,
    mountNode,
  )
}
