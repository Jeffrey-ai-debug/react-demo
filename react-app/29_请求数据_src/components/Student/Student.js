import React from 'react'
import './Student.module.css'

export default function Student({ stu: { name, gender, age, address } }) {

  // { stu: { name, gender, age, address } } = props //解构赋值

  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{address}</td>
    </tr>
  )
}
