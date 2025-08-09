import React from 'react'
// import Out from './Out'

export default function App() {

  /* 
    <React.Fragment></React.Fragment>
      -是一个专门用来作为父容器的组件
        他只会将他里面的元素直接返回，不会创建多余的结构
        等同于<Fragment></Fragment>
        等同于<></>
      -当我们需要一个父容器，
        但同时有不希望父容器在网页中产生多余的结构时，
        就可以使用Fragment
  */

  return (
    <>
      <div>第一个组件</div>
      <div>第二个组件</div>
      <div>第三个组件</div>
    </>
  )
}
