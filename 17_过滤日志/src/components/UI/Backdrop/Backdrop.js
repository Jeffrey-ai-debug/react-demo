import React from 'react'
import './Backdrop.css'
import ReactDOM from 'react-dom'

// 获取backdrop的根元素
const backdropRoot = document.getElementById('backdrop-root')

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className='backdrop'>{props.children}</div>, backdropRoot
  )
}
