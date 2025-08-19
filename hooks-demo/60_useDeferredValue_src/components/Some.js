import React, { useImperativeHandle, useRef } from 'react'

const Some = React.forwardRef((props, ref) => {
  /* 
    React.forwardRef()
      可以指定组件向外部暴露的ref
  */

  const inputRef = useRef()

  const clickhandler = () => {
    // 点击按钮获取文本值
    console.log(`output->inputRef.current.value`, inputRef.current.value)
  }

  //useImperativeHandle()可以用来指定ref的返回值
  useImperativeHandle(ref, () => {
    // 回调函数的返回值，会成为ref的值
    // return { name: 'WW' }
    return { 
      changeInputValue(value){
        inputRef.current.value = value
      }
     }
  })

  return (
    <div ref={ref}>
      <h2>some</h2>
      <input type="text" ref={inputRef} />
      <button onClick={clickhandler}>Some Btn</button>
    </div>
  )
})

export default Some
