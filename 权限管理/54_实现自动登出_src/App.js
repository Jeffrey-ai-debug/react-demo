import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage'
import { useDispatch, useSelector } from 'react-redux'
import NeedAuth from './components/NeedAuth/NeedAuth'
import { logout } from './store/reducer/authSlice'
import useAutoLogout from './hooks/useAutoLogout'

export default function App() {
  useAutoLogout()

  return (
    <div>
      <Layout>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          {/* <Route path={'/profile'} element={ auth.isLogged ? <ProfilePage /> : <Navigate to={'/auth-form'} replace/>} />  */}
          <Route path={'/profile'} element={ <NeedAuth><ProfilePage /></NeedAuth> } /> 
          <Route path={'/auth-form'} element={<AuthPage />} />
        </Routes>
      </Layout>
    </div>
  )
}
