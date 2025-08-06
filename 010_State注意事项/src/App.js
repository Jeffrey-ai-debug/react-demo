import './App.css'
import { useState } from 'react'

const App = () => {
  console.log(`函数执行了=======》 组件创建完毕`)

  /* 
    
    state注意事项
      -state实际上就是一个被React管理的变量
        当我们通过setState()修改变量的值时，会触发组件的重新渲染
      -只有state值发生变化时，组件才会重新渲染
      -当state值是对象时，会直接用新对象替换旧的对象
      -当通过setState去修改state时，并不代表修改当前的state
        它修改的是组件下一次渲染时state值
      -setState()会触发组建的重新渲染，它是异步的
        所以当调用setState()需要用旧的state的值时，一定要注意
        有可能出现计算错误的情况
        为了避免这种情况，可以通过为setState()传递回调函数的形式修改state
  */

  const [user, setUser] = useState({
    name: 'Heisenberg',
    age: 30,
  })

  let [num, setNum] = useState(99)

  const updateUser = () => {
    // 以下操作会丢失设定的其他原始属性
    // setUser({ name: 'walter white' })

    // 以下操作不会触发更新
    // user.name = 'walter white'
    // setUser(user)

    // 以下操作会每次都触发更新
    // const newUser = Object.assign({},user)
    // newUser.name = 'walter white'
    // setUser(newUser)

    // 以下代码效果同上
    user.name = 'walter white'
    setUser({ ...user })
  }

  const addHandler = () => {
    setTimeout(() => {
      // setNum(num++)
      setNum((prevNum) => {
        /* 
          setState()中的回调函数的返回值将会变成新的state值
            回调函数执行时，React会将最新的state值作为参数传递
        */
        return prevNum + 1
      })

      // setNum(prevNum => prevNum + 1)
    }, 1000)
  }

  return (
    <div className={'app'}>
      <h1>
        {user.name} - {user.age}
      </h1>
      <button onClick={updateUser}>update</button>
      <br />
      <h1>blue: {num} %</h1>
      <button onClick={addHandler}>more pure</button>
    </div>
  )
}

export default App
