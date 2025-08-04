import ReactDOM from "react-dom/client";

import './index.css' 

const APP = <div className="logs">
  {/* 日志容器 */}
  <div className="item">
    {/* 日期容器 */}
    <div className="date">
      <div className="month">
        八月
      </div>
      <div className="day">
        8
      </div>
    </div>

    {/* 日志内容的容器 */}
    <div className="content">
      <h2 className="desc">学习React</h2>
      <div className="time">720分钟</div>
    </div>
  </div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root')) 

root.render(APP)