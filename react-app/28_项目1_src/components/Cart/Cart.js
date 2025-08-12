import React, { useContext, useEffect, useState } from 'react'
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

  // 组件每次重新渲染的时候，检查一下商品的数量，如果数量为0，则修改ShowDetails为false
  // 组件每次重新渲染，组件的函数体就会执行
  // 以下代码会报错（Too many re-render.）原因是：在组件内，直接修改useState的值（不是在函数内），
  // 组件会不断循环渲染，最后内存溢出
  // if(ctx.totalAmount === 0){
  //   //清空购物车
  //   setShowDetail(false)
  // }


  /* 
    默认情况下，useEffect()中的函数，会在组件渲染完成后调用。
    并且是每次渲染完成后都会调用

    在useEffect()可以传递第二个参数
      第二个参数是一个数组，在数组中可以指定Effect的依赖项，
      指定后，只有当依赖项发生变化时，Effect才会被触发
        通常会将Effect中使用的局部变量都设置为依赖项，
          在这样一来可以确保这些值发生变化时，会触发Effect的执行
    
    像setState()是由钩子函数useState()生成的
      useState()会确保组件的每次渲染都会获取相同的setState()
      所以setState()方法可以不设置到Effect依赖中

    如果依赖项设置为空数组，则意味着Effect只会在组件初始化时触发一次
  */

  useEffect(() => {
    console.log(`effect执行了`)
    if (ctx.totalAmount === 0) {
      //清空购物车
      setShowDetail(false)
      setShowCheckout(false)
    }
  },[ctx.totalAmount])

  console.log(`组件执行了渲染-------------`)

  return (
    <div className={classes.Cart} onClick={toggleDetailHandler}>
      {showCheckout ? <Checkout onHide={hideCheckoutHandler} /> : null}
      {showDetail ? <CartDetails /> : null}
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
