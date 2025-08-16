import React, { useContext } from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CarContext from '../../store/cart-context'

/* 
  引入FontAwesome
    -安装依赖
      //添加 React 组件
      npm i --save @fortawesome/react-fontawesome@latest
      //添加SVG核心
      npm i --save @fortawesome/fontawesome-svg-core
      //添加免费图标包
      npm i --save @fortawesome/free-solid-svg-icons
      npm i --save @fortawesome/free-regular-svg-icons
      npm i --save @fortawesome/free-brands-svg-icons
    -引入组件
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    -引入图标
      import { faPlus } from '@fortawesome/free-solid-svg-icons'
    -使用组件
      <FontAwesomeIcon icon={faPlus} />
*/

// 计算器的组件
export default function Counter(props) {
  const ctx = useContext(CarContext)

  const addButtonHandler = () => {
    // console.log(`output->props.meal`, props.meal)
    /* ctx.addItem(props.meal) */
    ctx.cartDataDispatch({type: 'ADD', meal: props.meal})
    console.log(`addButtonHandler触发了`)
  }
  const reduceButtonHandler = () => {
    /* ctx.reduceItem(props.meal) */
    ctx.cartDataDispatch({type: 'SUB', meal: props.meal})
    console.log(`reduceButtonHandler触发了`)
  }

  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.Sub} onClick={reduceButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button className={classes.Add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}
