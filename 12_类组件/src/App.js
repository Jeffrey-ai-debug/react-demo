/* 
  vscode中的快捷方式：（需安装插件 ES7+ React/Redux/React-Native snippets）
  rfc => 函数组件（不带props）
  rfcp =>函数组件（带props）
  rcc => 类组件
*/

import React, { Component } from 'react'
import './App.css'
import User from './components/User.js'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <User name="Walter White" age="30" gender="male" />
      </div>
    )
  }
}
