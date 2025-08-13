import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // React.StrictMode表示开启了React的严格模式
  // 暂时关闭严格模式，防止useReducer调用两次
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
