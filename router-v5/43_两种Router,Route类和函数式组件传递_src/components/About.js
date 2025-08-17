import React from 'react'

export default function About(props) {
  console.log(props)
  const clickHandlerPush = () => {
    // push()需要一个location作为参数
    props.history.push({
      pathname: '/student/2',
    })
  }
  const clickHandlerReplace = () => {
    props.history.replace({
      pathname: '/student/1',
      state:{ name: '我是state'}
    })
  }
  return (
    <div>
      <h2>关于组件</h2>
      <button onClick={clickHandlerPush}>点击push跳转学生页面并过滤数据</button>
      <button onClick={clickHandlerReplace}>点击replace跳转学生页面并过滤数据</button>
      <ul>
        <li>张三</li>
        <li>李四</li>
        <li>王五</li>
      </ul>
    </div>
  )
}
