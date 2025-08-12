import React, { useState } from 'react'
import B from './B'

function A(props) {
  console.log(`A组件渲染了`)

  const [count, setCount] = useState(1)

  const addHandler = () => {
    setCount(count + 1)
  }

  const test = count % 4 === 0

  return (
    <div>
      <h2>A组件--{count}</h2>
      <button onClick={addHandler}>增加A</button>
      <button onClick={props.onAdd}>增加App</button>
      <B test={test} />
    </div>
  )
}

export default React.memo(A)
