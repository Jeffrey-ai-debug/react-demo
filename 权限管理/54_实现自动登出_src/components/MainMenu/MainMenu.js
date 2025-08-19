import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../store/reducer/authSlice'

export default function MainMenu() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>首页</Link>
        </li>
        {!auth.isLogged && (
          <li>
            <Link to={'/auth-form'}>登录/注册</Link>
          </li>
        )}
        {auth.isLogged && (
          <>
            <li>
              <Link to={'/profile'}>{`${auth.user.username}的用户配置`}</Link>
            </li>
            <li>
              <Link to={'/'} onClick={()=> dispatch(logout())}>登出</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
