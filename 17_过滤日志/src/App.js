import { useState } from 'react'
import Logs from './components/Logs/Logs'
import LogsForm from './components/LogsForm/LogsForm'
import ConfirmModal from './components/UI/ConfirmModal/ConfirmModal'
import './index.css'
const App = () => {
  // 模拟从服务器中加载的数据
  const [logsData, setLogsData] = useState([
    {
      id: '001',
      date: new Date(2025, 0, 28, 18, 20),
      desc: '吃饭',
      time: 88,
    },
    {
      id: '002',
      date: new Date(2025, 1, 28, 18, 20),
      desc: '睡觉',
      time: 88,
    },
    {
      id: '003',
      date: new Date(2025, 2, 28, 18, 20),
      desc: '撸啊撸',
      time: 88,
    },
    {
      id: '004',
      date: new Date(2025, 3, 28, 18, 20),
      desc: '撸啊撸',
      time: 88,
    },
    {
      id: '005',
      date: new Date(2025, 4, 28, 18, 20),
      desc: '学习高级JavaScript',
      time: 888,
    },
    {
      id: '006',
      date: new Date(2025, 5, 28, 18, 20),
      desc: '学习typescript',
      time: 888,
    },
    {
      id: '007',
      date: new Date(2025, 6, 28, 18, 20),
      desc: '学习Vue3',
      time: 888,
    },
    {
      id: '008',
      date: new Date(2025, 7, 28, 18, 20),
      desc: '学习React',
      time: 888,
    },
  ])

  /* 
    需要将LogsForm中提交的数据传递给App组件，然后App组件将新的日志添加到数组
  */
  //  定义一个函数
  const saveLogsHandler = (data) => {
    // 先新日志添加id
    data.id = Date.now() + ''
    console.log(`output->data`, data)
    // 降新数据添加到数组中
    // logsData.push(data)
    setLogsData([...logsData, data])
  }

  const delLogById = (id) => {
    console.log(`output->id`,id)
    const delIndex = logsData.findIndex((e) => e.id === id)
    if (delIndex >= 0) {
      setLogsData((prevState) => {
        const newLogs = [...prevState]
        newLogs.splice(delIndex, 1)
        return newLogs
      })
    }
  }

  return (
    <div className="app">
      {/* 
        引入LogsForm
      */}
      <LogsForm onSaveLogs={saveLogsHandler} />
      <Logs logsData={logsData} onDelLog={delLogById} />
    </div>
  )
}

// 导出App
export default App
