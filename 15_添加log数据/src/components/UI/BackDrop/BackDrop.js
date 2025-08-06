import React from 'react'
import './BackDrop.css'

export default function BackDrop(props) {
  return (
    <div className='backDrop'>{props.children}</div>
  )
}
