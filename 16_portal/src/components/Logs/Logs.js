/* 
  日志的容器
*/
import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = (props) => {


  /* 
    logsData 用来存储学习日志，
      这个数据出来当前组件Logs需要使用外，LogsFoem也需要使用
      当遇到一个数据需要被多个组件使用时，我们可以将数据放进这些组件共同的祖先元素中
      这样就可以使得多个组件都能方便的访问到这个数据

    state的提升

  */

  // // 模拟从服务器中加载的数据
  // const logsData = [
  //   {
  //     id: '001',
  //     date: new Date(2025, 0, 28, 18, 20),
  //     desc: '吃饭',
  //     time: 88,
  //   },
  //   {
  //     id: '002',
  //     date: new Date(2025, 1, 28, 18, 20),
  //     desc: '睡觉',
  //     time: 88,
  //   },
  //   {
  //     id: '003',
  //     date: new Date(2025, 2, 28, 18, 20),
  //     desc: '撸啊撸',
  //     time: 88,
  //   },
  //   {
  //     id: '004',
  //     date: new Date(2025, 3, 28, 18, 20),
  //     desc: '撸啊撸',
  //     time: 88,
  //   },
  //   {
  //     id: '005',
  //     date: new Date(2025, 4, 28, 18, 20),
  //     desc: '学习高级JavaScript',
  //     time: 888,
  //   },
  //   {
  //     id: '006',
  //     date: new Date(2025, 5, 28, 18, 20),
  //     desc: '学习typescript',
  //     time: 888,
  //   },
  //   {
  //     id: '007',
  //     date: new Date(2025, 6, 28, 18, 20),
  //     desc: '学习Vue3',
  //     time: 888,
  //   },
  //   {
  //     id: '008',
  //     date: new Date(2025, 7, 28, 18, 20),
  //     desc: '学习React',
  //     time: 888,
  //   },
  // ]

  //将数据放进JSX中
  const logItemData = props.logsData.length ? props.logsData.map(
    (e) => <LogItem date={e.date} desc={e.desc} time={e.time} key={e.id} id={e.id} onDelLog={props.onDelLog}/> 
    // <LogItem {...e} />
  ): <p className='empty-logs'>没有找到日志！</p>

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
