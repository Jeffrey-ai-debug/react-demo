import React, { useState } from 'react'
import MyDate from './MyDate'
import './LogItem.css'
import Card from '../../UI/Card/Card'
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal'

export default function LogItem(props) {
  // 在组件中，属性就相当于是函数的参数，可以通过参数来访问
  // 可以在函数组件中定义一个pro对象
  // 它包含父组件中传递的所有参数

  // 添加一个state，记录是否显示确认窗口
  const [showConfirm, setShowConfirm] = useState(false)

  console.log(`output->props`, props)

  const deleteHandler = () => {
    setShowConfirm(true)
    // const isDel = window.confirm(`确认删除当前数据吗？`)
    // if (isDel) {
    // 删除就是从数据的state移除指定的数据
    // props.onDelLog(props.id)
    // }
  }

  const okHandler = () => {
    props.onDelLog(props.id)
    setShowConfirm(false)
  }

  const cancelHandler = () => {
    setShowConfirm(false)
  }

  return (
    // {/* 日志容器 */}
    <Card className="item">
      {showConfirm && (
        <ConfirmModal
          confirmTxt="删除操作不可恢复，确认吗？"
          onOk={okHandler}
          onCancel={cancelHandler}
        />
      )}
      <MyDate date={props.date} />

      {/* 日志内容的容器 */}
      <div className="content">
        {/* 
            在组件间，父组件可以通过props（属性）向子组件传递数据
          */}
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>

      {/* 删除按钮 */}
      <div>
        <div className="delete" onClick={deleteHandler}>
          ×
        </div>
      </div>
    </Card>
  )
}
