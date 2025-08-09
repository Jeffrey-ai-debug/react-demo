import React from 'react'
import classes from './Meal.module.css'

/* 食物组件 */
export default function Meal() {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src="/img/meals/1.png" alt='加载失败'/>
      </div>
      <div>
        <h2 className={classes.Title}>汉堡包</h2>
        <p className={classes.Desc}>百分百纯牛肉搭配爽脆酸黄瓜洋葱粒与番茄酱经典滋味让你无法抵挡！</p>
        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>12</span>
          <div className={''}>数量</div>
        </div>
      </div>
    </div>
  )
}
