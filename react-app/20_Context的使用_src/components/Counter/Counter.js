import React from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
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
  return (
    <div className={classes.Counter}>
      {props.amount !== 0 && props.amount !== 0 ? (
        <>
          <button className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus}/>
          </button>
          <span className={classes.Count}>{props.amount}</span>
        </>
      ) : null}

      <button className={classes.Add}>
          <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}
