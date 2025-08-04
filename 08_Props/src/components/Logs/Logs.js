/* 
  日志的容器
*/
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = () => {
  return (
    <div className="logs">
      {/* 
        在父组件中可以直接在子组件中设置属性
      */}
      <LogItem date={new Date(Date.now() - 1000 * 60 * 60 * 24)} desc={"学习React"} time={"720"} fn={() => {}} />
      <LogItem date={new Date()} desc={"学习React"} time={"721"} fn={() => {}} />
    </div>
  )
}

export default Logs
