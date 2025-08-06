import './App.css'
import { useState, useRef } from 'react'

const App = () => {
  /* 
    获取原生的DOM对象
      1.可以使用传统的document来对DOM进行操作
      2.直接从React处获取DOM对象
        步骤：
          1.创建一个存储DOM对象的容器
            -使用useRef() 钩子函数
              钩子函数注意事项：
                ① React中的钩子函数只能用于函数组件或自定义钩子
                ② 钩子函数只能直接在函数组件中调用
          2.将容器设置为想要获取DOM对象元素的Ref属性
            <h1 ref={xxx}></h1>
            -React会自动将当前元素的DOM对象，设置为容器的current属性

    useRef()
      -返回的就是一个普通的JS对象
      -{current: undefined}
      -所以我们直接创建一个js对象，也能代替useRef()
      -区别：
        我们创建的对象，每次组件渲染都会创建对象
        useRef()可以确保每次渲染取到的都是同一个对象
      
      -当你需要一个对象不会因为组建的重新渲染而改变时，就可以使用useRef()
  */

  const h1Ref = useRef() //创建一个容器
  // const h1Ref = { current: null }

  const clickHandler = () => {
    // 通过id获取h1
    // const header = document.getElementById('header')
    // header.innerHTML = '哈哈哈'

    console.log(`output->h1Ref`, h1Ref)
    h1Ref.current.innerHTML = '我是陈冠希'
  }

  return (
    <div className={'app'}>
      <h1 id="header" ref={h1Ref}>
        我是标题
      </h1>
      <button onClick={clickHandler}>1</button>
      <button onClick={() => {}}>2</button>
    </div>
  )
}

export default App
