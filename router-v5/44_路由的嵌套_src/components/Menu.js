import React from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './Menu.module.css'

export default function Menu() {
  /* 
    在使用react router时，一定不要使用a标签来创建超链接（会向服务器发请求）
      因为a标签创建的超链接，会自动向服务器发送请求重新加载页面
        我们不希望这种情况发生
    可以使用Link组件来创建超链接
    NavLink和Link的作用相似，只是是可以指定链接激活后的样式
  */
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/">主页</a> */}
          {/* <Link to="/">主页</Link> */}
          <NavLink
            exact
            // activeClassName={classes.active}
            activeStyle={{ textDecoration: 'underline' }}
            to="/"
          >
            主页
          </NavLink>
        </li>
        <li>
          {/* <a href="/about">关于</a> */}
          {/* <Link to="/about">关于</Link> */}
          <NavLink
            exact
            // activeClassName={classes.active}
            activeStyle={{ textDecoration: 'underline' }}
            to="/about"
          >
            关于
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ textDecoration: 'underline' }}
            to="/student"
          >
            学生
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
