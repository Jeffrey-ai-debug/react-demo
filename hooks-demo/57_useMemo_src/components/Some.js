import React from 'react'

export default function Some(props) {
  const begin = Date.now()

  while (1) {
    if (Date.now() - begin > 3000) {
      break
    }
  }

  return (
    <div>
      <h2>some</h2>
      <h3>{props.a + props.b}</h3>
    </div>
  )
}
