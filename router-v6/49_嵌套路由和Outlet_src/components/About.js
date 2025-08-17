import React from 'react'
import Hello from './Hello'
import { Outlet, Route, Routes } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h2>江南皮革厂倒闭了</h2>
      {/* 
        通过子路由来对Hello进行映射 /about/hello
      */}
      {/* <Routes>
        <Route path={'hello'} element={<Hello />} />
      </Routes> */}

      {/* 
        Outlet 用来表示嵌套路由中的组件
          当嵌套路由中的路径匹配成功了，Outlet则表示嵌套路由中的组件
          当嵌套路由中的路径匹配失败，Outlet就什么也不展示
      */}
      <Outlet />
    </div>
  )
}
