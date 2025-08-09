import React from 'react'
import Meal from './Meal/Meal'
import classes from './Meals.module.css'

/* 
  食物列表组件
*/
export default function Meals() {
  return (
    /* 
      将给滚动条设置给Meals
    */
    <div className={classes.Meals}>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
      <Meal/>
    </div>
  )
}
