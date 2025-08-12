import React, { useCallback, useState } from 'react'
import A from './components/A'

export default function App() {
  console.log(`App组件渲染了`)

  const [count, setCount] = useState(1)

  /* 
    useCallback
      是一个钩子函数，用来创建React中的回调函数，
      它创建的回调函数不会总在组件重新渲染时重新创建

      useCallback 参数：
        1.回调函数
        2.依赖数组
          -当依赖数组中变量发生变化时，回调函数才会重新创建
          -如果不指定依赖数组，回调函数每次都会重新创建
          -一定要将回调函数中使用到的所有变量都设置到依赖数组中，
            除了（setState）
  */
  // const clickHandler = () => {
  //   setCount(prevState => prevState + 1)
  // }

  const [num,setNumber] = useState(1)

  /* 
    //useCallback没有指定依赖数组
    //下列函数只会初始化时创建一次，之后每次执行的都是函数缓存，
    //初始化时函数中 num = 1，以后每次调用的函数缓存的 num 也是1
    const clickHandler = useCallback(() => {
      setCount(prevState => prevState + num)
      setNumber(num + 1)
    }, [])
  */

  // 以下useCallback指定了依赖数组，每次依赖变化，
  // 都会重新创建回调函数
  const clickHandler = useCallback(() => {
    setCount(prevState => prevState + num)
    setNumber(num + 1)
  }, [num])

  return (
    <div>
      <h2>App--{count}</h2>
      {<button onClick={clickHandler}>增加</button>}
      <A onAdd={clickHandler} />
    </div>
  )
}
