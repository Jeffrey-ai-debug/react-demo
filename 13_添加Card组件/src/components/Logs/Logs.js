/* 
  日志的容器
*/
import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = () => {
  // 模拟从服务器中加载的数据
  const logsData = [
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
  ]

  //将数据放进JSX中
  const logItemData = logsData.map(
    (e) => <LogItem date={e.date} desc={e.desc} time={e.time} key={e.id} />
    // <LogItem {...e} />
  )

  return (
    <Card className="logs">
      {/* 
        在父组件中可以直接在子组件中设置属性
      */}
      {/* <LogItem date={new Date(Date.now() - 2800 * 60 * 60 * 24)} desc={"学习React"} time={"720"} fn={() => {}} />
      <LogItem date={new Date()} desc={"学习React"} time={"721"} fn={() => {}} /> */}
      {logItemData}
    </Card>
  )
}

export default Logs
