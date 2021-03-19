import React from 'react'
import ListItem from './ListItem'

const TaskList = props => {
  const { todoArray, deleteTask } = props

  return (
    <ul>
      {todoArray.map(task => {
        return <ListItem {...task} key={task.id} deleteTask={deleteTask}/>
      })}
    </ul>
  )
}

export default TaskList
