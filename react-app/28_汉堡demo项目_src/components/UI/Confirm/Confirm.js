import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'

export default function Confirm(props) {

  return (
    <Backdrop className={classes.ConfirmOuter} onClick={props.onCancel}>
      <div className={classes.Confirm}>
        <p>{props.ConfirmTxt}</p>
        <div className={classes.ConfirmText}>
          <button className={classes.Cancel} onClick={props.onCancel}>取消</button>
          <button className={classes.Ok} onClick={props.onOk}>确认</button>
        </div>
      </div>
    </Backdrop>
  )
}
