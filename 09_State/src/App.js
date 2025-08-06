import './App.css'
import { useState } from 'react'

const App = () => {
  console.log(`函数执行了=======》 组件创建完毕`)

  /* 
    在React中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染
      要使得组件组件可以受到变量的影响，必须在变量修改后对组件进行重新渲染
      这里我们需要一个特殊变量，当这个变量被修改，组件会自动重新渲染
    state相当一个变量，
      只是React会监控这个变量的变化，当state发生变化时，会自动触发组件重新渲染
      使得我们的修改可以在页面中呈现出来
    
    在函数组件中，我们需要通过钩子函数，获取state

    使用钩子 useState() 来创建state
      import { useState } from "react"
    
    他需要一个值作为参数，这个值就是state的初始值
      该函数会返回一个数组
        数组中第一个元素，是初始值
          -初始值只是用来显示数据，直接修改不会触发组件重新渲染
        数组中第二个元素，是一个函数，通常会命名为setXxx
          -这个函数用来修改state，调用其修改state会触发组件重新渲染，
            并且使用函数中的值作为新的state
    
    state注意事项
      -state实际上就是一个被React管理的变量
        当我们通过setState()修改变量的值时，会触发组建的重新渲染
      -只有state值发生变化时，组件才会重新渲染
  */

  const [num, setNum] = useState(0)
  // const result = useState(0)
  // console.log(`output->result`, result)
  // let num = result[0]
  // let setNum = result[1]
  // const [num, setNum] = result //解构赋值

  /* 
    当点击+时，数字增大
    当点击-时，数字减小
  */
  // let num = 1

  const addHandler = () => {
    // 点击后数字+1
    // num++
    setNum(num + 1)
  }
  const reduceHandler = () => {
    // 点击后数字-1
    // num--
    setNum(num - 1)
  }

  return (
    <div className={'app'}>
      <h1>{num}</h1>
      <button onClick={reduceHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  )
}

export default App
