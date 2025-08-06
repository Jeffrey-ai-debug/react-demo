import Logs from './components/Logs/Logs'
import LogsForm from './components/LogsForm/LogsForm'
import './index.css'
const App = () => {
  return (
    <div className='app'>
      {/* 
        引入LogsForm
      */}
      <LogsForm/>
      <Logs />
    </div>
  )
}

// 导出App
export default App
