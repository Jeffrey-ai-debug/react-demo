import React from 'react'
import './LogFilter.css'

export default function LogFilter(props) {
  // 创建监听change事件的响应函数
  const changeHandler = e => {
    props.onChangeYear(e.target.value * 1)
  }
  return (
    <div className='filterData'>
      年份：
      <select value={props.year} onChange={changeHandler}>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
        <option value={-1}>全部</option>
      </select>
    </div>
  )
}
