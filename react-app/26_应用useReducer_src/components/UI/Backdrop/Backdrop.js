import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import classes from './Backdrop.module.css'

const backdropRoot = document.getElementById('backdrop-root')

export default function Backdrop(props) {
  useEffect(() => {
    const overlay = document.querySelector('.Backdrop')
    overlay?.addEventListener('touchmove', preventScroll, { passive: false })
    return () => overlay?.removeEventListener('touchmove', preventScroll)
  }, [])
  const preventScroll = (e) => {
    // e.preventDefault()
    // e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <div {...props} className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>,
    backdropRoot
  )
}
