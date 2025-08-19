import React from 'react'

export default React.memo(function StudentList(props) {
  const STU_DATA = []

  for (let i = 0; i < 100; i++) {
    STU_DATA.push('学生' + i)
  }

  const stus = STU_DATA.filter((e) => e.indexOf(props.filterWord) !== -1)

  const begin = Date.now()
  while (1) {
    if (Date.now() - begin > 3000) {
      break
    }
  }

  return (
    <div>
      <ul>
        {stus.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  )
})
