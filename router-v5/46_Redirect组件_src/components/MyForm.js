import React, { useState } from 'react'
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min'

export default function MyForm() {

  const [isPrompt, setIsPrompt] = useState(false)

  return (
    <div>
      {/* 
        Prompt
          当前页面的输入框有输入值，离开当前页面会弹出提示文字
      */}
      <Prompt when={isPrompt} message={'将要离开页面！确认吗？'} />
      <h2>表单</h2>
      <input type="text" onChange={e => setIsPrompt(e.target.value.trim().length !== 0)}/>
    </div>
  )
}
