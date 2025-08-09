/* 
  日志的容器
*/
import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import LogFilter from './LogFilter/LogFilter'
import './Logs.css'
import { useState } from 'react'

const Logs = (props) => {
  // 创建一个存储年份的state
  const [year, setYear] = useState(-1)

  // 过滤数据，只显示某一年的数据
  let filterData = year === -1 ? props.logsData : props.logsData.filter(e => e.date.getFullYear() === year);

  // 创建一个修改年份的函数
  const changeYearHandler = (year) => {
    setYear(year)
  }

  //将数据放进JSX中
  const logItemData = filterData.length ? filterData.map(
    (e) => <LogItem date={e.date} desc={e.desc} time={e.time} key={e.id} id={e.id} onDelLog={props.onDelLog}/> 
    // <LogItem {...e} />
  ): <p className='empty-logs'>没有找到日志！</p>

  return (
    <Card className="logs">
      <LogFilter year={year} onChangeYear={changeYearHandler}/>
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
