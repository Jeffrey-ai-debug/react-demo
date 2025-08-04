import React from 'react'
import MyDate from './MyDate'
import './LogItem.css'

export default function LogItem() {
  return (
    <div>
      {/* 日志容器 */}
      <div className="item">
        <MyDate />

        {/* 日志内容的容器 */}
        <div className="content">
          <h2 className="desc">学习React</h2>
          <div className="time">720分钟</div>
        </div>
      </div>
    </div>
  )
}
