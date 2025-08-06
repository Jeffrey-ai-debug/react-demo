import React from 'react'
import './ConfirmModal.css'
import Card from '../Card/Card'
import BackDrop from '../BackDrop/BackDrop'

export default function ConfirmModal(props) {
  return (
    <BackDrop>
      <Card className="ConfirmModal">
        <div className="confirmText">{props.confirmTxt}</div>
        <div className="confirmButton">
          <button className="okButton" onClick={props.onOk}>
            确认
          </button>
          <button onClick={props.onCancel}>取消</button>
        </div>
      </Card>
    </BackDrop>
  )
}
