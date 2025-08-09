import React, { useState } from 'react'
import classes from './App.module.css'
import A from './A'

export default function App() {
/* 
  CSS模块
    使用步骤：
      1.创建一个XXX.module.css
      2.在组件中引入css
        import classes from './App.module.css'
      3.通过classes来设置类
        className={classes.p1}
    CSS模块可以动态设置唯一的class值
      App_p1__DzNEL
    
*/

  const [showBorder,setShowBorder] = useState(false)

  const clickHandler = () => {
    setShowBorder(!showBorder)
  }

  return (
    <div>
      <A/>
      <p className={`${classes.p1} ${showBorder ? classes.borderBlue : ''}`}>我是一个段落</p>
      <button onClick={clickHandler}>点击</button>
    </div>
  )
}
