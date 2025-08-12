import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CarContext from '../../../store/cart-context'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'

export default function CartDetails(props) {
  const ctx = useContext(CarContext)
  // 控制确认框的显示
  const [showConfirm, setShowConfirm] = useState(false)
  // 函数显示确认窗口
  const showConfirmHandler = () => {
    setShowConfirm(true)
  }
  const cancelHandler = (e) => {
    e.stopPropagation()//防止事件冒泡
    setShowConfirm(false)
  }
  const okHandler = () => {
    ctx.clearCart()
  }

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          ConfirmTxt="确认清空购物车吗？"
          onCancel={cancelHandler}
          onOk={okHandler}
        />
      )}

      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div className={classes.Clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrashCan} />
            <span>清空购物车</span>
          </div>
        </header>
        <div className={classes.Meallist}>
          {ctx.items.map((e) => (
            <Meal key={e.id} meal={e} />
          ))}
        </div>
      </div>
    </Backdrop>
  )
}
