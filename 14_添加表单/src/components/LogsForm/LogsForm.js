import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './Logs Form.css'

export default function LogsForm() {
  /* 
      当表单项发生变化时，获取用户输入的内容
    */

  // 创建变量存储表单的数据
  // let inputDate = null
  // let inputDesc = ''
  // let inputTime = 0
  // const [inputDate, setInputDate] = useState('')
  // const [inputDesc, setInputDesc] = useState('')
  // const [inputTime, setInputTime] = useState(0)
  const [formData, setFormData] = useState({
    inputDate: '',
    inputDesc: '',
    inputTime: 0,
  })

  // 创建一个响应函数，监听表单项的变化
  const dateChangeHandler = (e) => {
    // const desc = document.getElementById('desc')
    // console.log(`output->desc变化了`, desc.value)
    // inputDate = e.target.value
    // setInputData(e.target.value)
    setFormData({...formData, inputDate:e.target.value})
  }

  const descChangeHandler = (e) => {
    // setInputDesc(e.target.value)
    setFormData({...formData, inputDesc:e.target.value})
  }

  const timeChangeHandler = (e) => {
    // setInputTime(e.target.value)
    setFormData({...formData, inputTime:e.target.value})
  }

  // 表单提交时，汇总表单的数据
  /* 
    在React中，通常不需要自行提交，
      而是需要React提交
  */
  const formSubmitHandler = (event) => {
    // 取消默认行为
    event.preventDefault()
    // const newLog = {
    //   date: new Date(inputDate),
    //   desc: inputDesc,
    //   time: inputTime * 1,
    // }
    console.log(`表单提交了`, formData)

    // 重置表单
    // setInputDate('')
    // setInputDesc('')
    // setInputTime(0)
    setFormData({
      inputDate: '',
      inputDesc: '',
      inputTime: 0,
    })

    /* 
      提交表单之后如何清空表单中的旧数据
        现在这种表单，在React我们称之为非受控组件

      我们可以将表单中的数据存储到state中，
        然后将state设置为表单项value值，
        这样当表单项发生变化，state也随之变化，
        反之，state发生变化，表单项也随之变化，这种操作我们称之为双向绑定
        这样一来，表单就成了一个受控组件
    */
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
