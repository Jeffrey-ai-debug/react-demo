import React from 'react'
import MyDate from './MyDate'
import './LogItem.css'

export default function LogItem(props) {
  // 在组件中，属性就相当于是函数的参数，可以通过参数来访问
  // 可以在函数组件中定义一个pro对象
  // 它包含父组件中传递的所有参数

  console.log(`output->props`, props)
  return (
    <div>
      {/* 日志容器 */}
      <div className="item">
        <MyDate date={props.date}/>

        {/* 日志内容的容器 */}
        <div className="content">
          {/* 
            在组件间，父组件可以通过props（属性）向子组件传递数据
          */}
          <h2 className="desc">{props.desc}</h2>
          <div className="time">{props.time}分钟</div>
        </div>
      </div>
    </div>
  )
}
