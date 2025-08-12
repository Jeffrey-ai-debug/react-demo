import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import classess from './FilterMeals.module.css'

export default function FilterMeals(props) {
  const [keyword, setKeyword] = useState('')
  const inputChangeHandler = (e) => {
    // const keyword = e.target.value.trim()
    // props.onFilter(keyword)
    setKeyword(e.target.value.trim())
  }

  useEffect(() => {
    // 降低数据过滤的次数
    // 用户输入完了再过滤，输入过程中，不过滤
    // 当用户停止输入动作一秒后，我们这才做查询
    // 在开启一个定时器时，要关闭上一个的定时器
    const timer = setTimeout(() => {
      props.onFilter(keyword)
    }, 1000)

    return () => {
      // 在Effect的回调函数中，可以指定一个函数返回值
      // 这个函数可以称其为清理函数，他会在下次Effect执行前调用
      clearTimeout(timer)
    } 
  }, [keyword])

  /* 
    App.js:82 Maximum update depth exceeded.
     This can happen when a component calls setState inside useEffect,
      but useEffect either doesn't have a dependency array,
       or one of the dependencies changes on every render.
  */

  return (
    <div className={classess.FilterMeals}>
      <div className={classess.InputOuter}>
        <input
          placeholder="请输入关键字"
          className={classess.SearchInput}
          value={keyword}
          onChange={inputChangeHandler}
        />
        <FontAwesomeIcon className={classess.SearchIcon} icon={faSearch} />
      </div>
    </div>
  )
}
