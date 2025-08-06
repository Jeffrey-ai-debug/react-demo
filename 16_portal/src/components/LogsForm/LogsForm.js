import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './Logs Form.css'

export default function LogsForm(props) {
  // 创建变量存储表单的数据
  const [formData, setFormData] = useState({
    inputDate: '',
    inputDesc: '',
    inputTime: 0,
  })

  // 创建一个响应函数，监听表单项的变化
  const dateChangeHandler = (e) => {
    setFormData({ ...formData, inputDate: e.target.value })
  }

  const descChangeHandler = (e) => {
    setFormData({ ...formData, inputDesc: e.target.value })
  }

  const timeChangeHandler = (e) => {
    setFormData({ ...formData, inputTime: e.target.value })
  }

  // 表单提交时，汇总表单的数据
  const formSubmitHandler = (event) => {
    // 取消默认行为
    event.preventDefault()
    console.log(`表单提交了`, formData)

    const newLogs = {
      date: new Date(formData.inputDate),
      desc: formData.inputDesc,
      time: formData.inputTime,
    }

    // 当提交新日志时，调用父组件传递过来的函数
    props.onSaveLogs(newLogs)

    // 重置表单
    setFormData({
      inputDate: '',
      inputDesc: '',
      inputTime: 0,
    })
  }

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            value={formData.inputDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            value={formData.inputDesc}
            onChange={descChangeHandler}
          />
        </div>

        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            value={formData.inputTime}
            onChange={timeChangeHandler}
          />
        </div>

        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  )
}
