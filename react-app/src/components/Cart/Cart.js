import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import iconImg from '../../assets/bag.png'
import CarContext from '../../store/cart-context'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'

export default function Cart() {
  const ctx = useContext(CarContext)
  //添加state设置是否显示购物车详情
  const [showDetail, setShowDetail] = useState(false)
  // 显示详情页的函数
  const toggleDetailHandler = () => {
    console.log(`output->toggleDetailHandlerchufale1`)
    if (ctx.totalAmount === 0) {
      setShowDetail(false)
      return
    }
    setShowDetail((prevState) => !prevState)
  }
  // 控制结账页的显隐
  const [showCheckout, setShowCheckout] = useState(false)

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return
    setShowCheckout(true)
  }

  const hideCheckoutHandler = () => {
    setShowCheckout(false)
  }

  return (
    <div className={classes.Cart} onClick={toggleDetailHandler}>
      {showCheckout ? <Checkout onHide={hideCheckoutHandler} /> : null}
      {(showDetail && ctx.totalAmount) ? <CartDetails /> : null}
      <div className={classes.Icon}>
        <img src={iconImg} alt="加载失败" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalPrice === 0 ? (
        <p className={classes.EmptyMeal}>未选购商品</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}
      <button
        className={`${classes.Button} ${
          ctx.totalPrice === 0 ? classes.Disabled : ''
        }`}
        onClick={showCheckoutHandler}
      >
        去结算
      </button>
    </div>
  )
}
