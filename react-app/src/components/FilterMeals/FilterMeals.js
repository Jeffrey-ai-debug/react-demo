import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {  } from 'react'
import classess from './FilterMeals.module.css'

export default function FilterMeals(props) {

  const inputChangeHandler = (e) => {
    const keyword = e.target.value.trim()
    props.onFilter(keyword)
  }

  return (
    <div className={classess.FilterMeals}>
      <div className={classess.InputOuter}>
        <input
          placeholder="请输入关键字"
          className={classess.SearchInput}
          onChange={inputChangeHandler}
        />
        <FontAwesomeIcon className={classess.SearchIcon} icon={faSearch} />
      </div>
    </div>
  )
}
