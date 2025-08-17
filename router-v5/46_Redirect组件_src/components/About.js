import React from 'react'
import { Redirect, Route, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import Hello from './Hello'

export default function About(props) {
  const { path } = useRouteMatch()

  const clickHandler = () => {}
  return (
    <div>
      <h2>关于组件</h2>

      {/* 
          Redirect 用于跳转页面      
            push表示push跳转
      */}
      {/* <Redirect push to={"/form"} /> */}

      <button onClick={clickHandler}>点击push跳转学生页面并过滤数据</button>
      <ul>
        <li>张三</li>
        <li>李四</li>
        <li>王五</li>
      </ul>

      <Route path={`${path}/hello`}>
        <Hello />
      </Route>
    </div>
  )
}
