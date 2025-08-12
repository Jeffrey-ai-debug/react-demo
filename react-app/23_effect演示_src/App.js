import React, { useEffect, useState } from 'react'
import B from './B'

export default function App() {
  console.log(`App组件重新渲染了`)

  const [count, setCount] = useState(0)

  // 报错Uncaught Error: Too many re-renders.
  // setCount(1)

  // 利用延时解决报错Uncaught Error: Too many re-renders.
  // setTimeout(() => {
  //   setCount(1)
  // }, 0)

  // useEffect()是一个钩子函数，需要一个函数作为参数
  // 这个作为参数的函数，将会在组件渲染完毕之后执行
  // 在开发中，可以将那些会产生副作用的代码编写到useEffect的回调函数中，
  // 这样就可以避免这些代码影响到组件的渲染
  useEffect(()=>{
    setCount(1)
  })

  return (
    <div>
      {count}
      <B />
    </div>
  )
}
