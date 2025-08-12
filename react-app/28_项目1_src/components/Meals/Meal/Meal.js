import React from 'react'
import classes from './Meal.module.css'
import Counter from '../../Counter/Counter'

/* 食物组件 */
export default function Meal(props) {
  // console.log(`output->props`,props)
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={props.meal.img} alt="加载失败" />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        {!props.noDesc ? null : <p className={classes.Desc}>{props.meal.desc}</p>}
        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  )
}
