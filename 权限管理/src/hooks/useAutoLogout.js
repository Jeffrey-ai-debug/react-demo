import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/reducer/authSlice"

const useAutoLogout = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // 创建一个useEffect，用来处理登录状态
  useEffect(()=> {
    const timeOut = auth.expirationTime - Date.now()
    // 判断timeOut的值
    if(timeOut < 60000){
      dispatch(logout())
      return
    }
    const timer = setTimeout(() => {
      dispatch(logout())
    },timeOut)

    return () => {//设置auth变化时，清除定时器的回调首先执行
      clearTimeout(timer)
    }
  },[auth])
}

export default useAutoLogout