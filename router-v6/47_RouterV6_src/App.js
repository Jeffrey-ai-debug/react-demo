import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Menu />
      <Routes>
        {/* 
          Routes是V6版本新增的组件
            作用和Switch类似，都是用于Route容器
            Routes中的Route只有一个会被匹配
          V6中，Route的component render children都变了
            需要通过element来指定要挂载的组件
        */}
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}
