import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage'

export default function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/auth-form'} element={<AuthPage />} />
        </Routes>
      </Layout>
    </div>
  )
}
