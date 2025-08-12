import React, { useState } from 'react'
import B from './B'

export default function App() {
  console.log(`App组件重新渲染了`)
  /* 
    Uncaught Error: Too many re-renders.
      -当我们直接在函数体中调用setState时，就会触发上述报错
      -问题：
        已知，当新的state值和旧的state值相同时，是不会触发组件的重新渲染的
      -setState()的执行流程（函数式组件）
        setCount() --> 底层调用dispatchSetDate()
          --> 会先判断，组件当前处于什么阶段
            如果是`渲染阶段` --> 不会检查state值是否相同
            如果不是`渲染阶段` --> 会检查state值是否相同
              -如果值不同，则会对组件进行重新渲染
              -如果值相同，则不会对组件进行重新渲染
                如果值相等，React在一些情况下会继续执行当前组件的渲染
                  但是在这个渲染不会触发其子组件的渲染，这次渲染不会产生实际的效果，
                  这种情况通常发生在值第一次相同时

  */
  const [count, setCount] = useState(0)

  // setCount(0)

  /* 
    count 0
      第一次点击按钮 count -->
  */
  const clickHandler = () => {
    setCount(1)
  }
  
  return (
    <div>
      {count}
      <B/>
      <button onClick={clickHandler}>点我一下</button>
    </div>
  )
}
