import React, { useRef, useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../../store/api/authApi'
import { useDispatch } from 'react-redux'
import { login } from '../../store/reducer/authSlice'
import { useNavigate } from 'react-router-dom'

export default function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true)

  const [regFn, { error: regError }] = useRegisterMutation()

  const [loginFn, { error: loginError }] = useLoginMutation()

  const usenameInp = useRef()
  const pwdInp = useRef()
  const emailInp = useRef()

  // 获取dispatch
  const dispatch = useDispatch()

  // 获取Navigate
  const navigate = useNavigate()
  
  const submitHandler = (e) => {
    e.preventDefault()
    // 获取用户输入的内容
    const username = usenameInp.current.value
    const password = pwdInp.current.value
    // 处理登录功能
    if (isLoginForm) {
      loginFn({
        identifier: username,
        password,
      }).then(res => {
        if(!res.error){
          dispatch(login({
            token: res.data.jwt,
            user: res.data.user,
          }))
          // 登陆成功，需要向系统添加一个标识，标记用户的登陆状态
          // 登录状态（布尔值，token（JWT），用户信息）
          // 重定向到根目录
          navigate("/", {replace: true})
        }
      })
    } else {
      const email = emailInp.current.value
      regFn({
        username,
        password,
        email,
      }).then((res) => {
        if(!res.error){
          setIsLoginForm(true)
        }
        console.log(`output->res`, res)})
    }
  }

  return (
    <div>
      <p style={{color: 'red'}}>{ (!isLoginForm && regError) && regError.data.error.message}{(isLoginForm && loginError) && '用户名或密码错误'}</p>
      <h2>{isLoginForm ? '登录' : '注册'}</h2>
      <form>
        <div>
          <input type="text" placeholder={'用户名'} ref={usenameInp} />
        </div>
        {!isLoginForm && (
          <div>
            <input type="email" placeholder={'电子邮件'} ref={emailInp} />
          </div>
        )}
        <div>
          <input type={'password'} placeholder={'密码'} ref={pwdInp} />
        </div>
        <div>
          <button onClick={submitHandler}>
            {isLoginForm ? '登录' : '注册'}
          </button>
          <a
            href="javascript:;"
            onClick={(event) => {
              event.preventDefault()
              setIsLoginForm((prevState) => !prevState)
            }}
          >
            {!isLoginForm ? '已有帐号？点击登录' : '没有账号？点击注册'}
          </a>
        </div>
      </form>
    </div>
  )
}
