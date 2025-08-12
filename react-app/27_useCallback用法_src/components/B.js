import React from 'react'

function B(props) {
  console.log(`B组件渲染了`)

  return (
    <div>
      <h2>B组件</h2>
      <p>{props.test && '哈哈'}</p>
    </div>
  )
}
/* 
  React.memo() 是一个高阶组件
    它接收另一个组件作为参数，并且会返回一个包装过的新组件
    它包装过的新组件具有缓存功能，
      包装过后，只有组件的props发生变化，
      才会触发组件的重新渲染，否则总是返回缓存中的结果
*/
export default React.memo(B)
