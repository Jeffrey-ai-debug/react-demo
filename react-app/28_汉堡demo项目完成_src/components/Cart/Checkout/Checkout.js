import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CarContext from '../../../store/cart-context'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import Bar from './Bar/Bar'

export default function Checkout(props) {
  const checkoutRoot = document.getElementById('checkout-root')

  const ctx = useContext(CarContext)

  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Close} onClick={props.onHide}>
        <FontAwesomeIcon icon={faXmark} />
      </div>

      <div className={classes.MealsDesc}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
        </header>

        <div className={classes.MealsList}>
          { ctx.items.map(e => <CheckoutItem key={e.id} meal={e}/>)}
        </div>

        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>

      <Bar totalPrice={ctx.totalPrice}/>
    </div>,
    checkoutRoot
  )
}
