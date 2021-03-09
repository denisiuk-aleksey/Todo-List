import React from 'react'
import ListItem from './ListItem'

const TaskList = props => {
  const { todoArray } = props
  return (
    <ul>
      {todoArray.map(item => {
        return <ListItem key={item.id} />
      })}
    </ul>
  )
}

export default TaskList
