import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'
import cx from 'classnames'
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';

const ListItem = props => {
  const { body, id, isDone, deleteTask } = props
  const [isTaskDone, setIsTaskDone] = useState(isDone)

  const onDeleteTask = () => {
    deleteTask(id)
  }

  const className = cx(styles.taskDefalt, {
    [styles.taskDone]: isTaskDone,
    [styles.taskCancel]: !isTaskDone
  })

  return (
    <div onClick={() => setIsTaskDone(!isTaskDone)} className={styles.container}>
      <li className={className}>
        <span>{body}</span>
      </li>
      <Icon path={mdiTrashCanOutline} size={1} color="white" onClick={onDeleteTask}/>
    </div>
  )
}

ListItem.propTypes = {
  body: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteTask: PropTypes.func,
  switchTask: PropTypes.func
}

export default ListItem
