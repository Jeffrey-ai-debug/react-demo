import React, { useMemo, useState } from 'react'
import Sum from './components/Sum'
import Some from './components/Some'

function sum() {
  
  console.log(`函数执行了`)
  const arr = [...arguments]
  return arr.reduce((prev, currt) => prev + currt)
}

export default function App() {
  const [count,setCount] = useState(1)

  let a = 123,b = 456, c = 789;
  if(count % 10 === 0){
    a += count
  }

  // sum()函数每次组件渲染，都会执行
  // const result = sum(123, 456, 789)

  // useMemo用来存储函数的执行结果
  const result = useMemo(()=>{
    return sum(a, b, c)
  },[a, b, c])

  // useMemo缓存组件
  const someEle = useMemo(()=>{
    return <Some a={10} b={22}/>
  },[])

  return (
    <div>
      <h1>App</h1>
      {/* <h2>{result}</h2> */}
      {someEle}
      <h3>{count}</h3>
      <button onClick={() => setCount(prevState => prevState + 1)}>点我</button>
    </div>
  )
}
