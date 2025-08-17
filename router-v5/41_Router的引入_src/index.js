import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'
/* 
  react router 使用步骤
    1.引入react-router-dom包
    2.在index.js中引入BrowserRouter组件
    3.将BrowserRouter设置为跟组件
    
*/
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>
)
