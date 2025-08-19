import React, { useEffect, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Sum from './components/Sum'
import Some from './components/Some'

function sum() {
  console.log(`函数执行了`)
  const arr = [...arguments]
  return arr.reduce((prev, currt) => prev + currt)
}

export default function App() {
  const [count, setCount] = useState(1)

  /* 
    时机：
      看版本，React V17：页面渲染完成之后执行
              React V18：页面渲染完成之前或之后执行
    作用：避免副作用
  */
  useEffect(() => {
    console.log(`useEffect`)
  })

  /* 
    时机：dom生成之后，页面渲染完成之前执行
    作用：一般用于修改样式
  */
  useLayoutEffect(() => {
    console.log(`useLayoutEffect`)
  })

  /* 
    时机：dom生成之前执行
    作用：一般用于向页面添加元素
  */
  useInsertionEffect(() => {
    console.log(`useInsertionEffect`)
  })

  return (
    <div>
      <h1>App</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        点我
      </button>
    </div>
  )
}
