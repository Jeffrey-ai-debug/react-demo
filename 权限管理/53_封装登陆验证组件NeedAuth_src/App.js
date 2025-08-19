import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage'
import { useSelector } from 'react-redux'
import NeedAuth from './components/NeedAuth/NeedAuth'

export default function App() {
  const auth = useSelector((state) => state.auth)

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
