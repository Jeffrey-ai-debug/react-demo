import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        {/* <li>
          <Link to="/student">学生</Link>
        </li> */}
      </ul>
    </div>
  )
}
