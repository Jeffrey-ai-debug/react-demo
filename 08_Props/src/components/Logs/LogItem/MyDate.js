import React from 'react'
import './MyDate.css'

export default function MyDate(props) {
  const month = new Date(props.date).toLocaleString('zh-CN', {month: 'long'})
  const date = new Date(props.date).getDate()
  return (
    <div>
      {/* 日期容器 */}
      <div className="date">
        <div className="month">{month}</div>
        <div className="day">{date}</div>
      </div>
    </div>
  )
}
