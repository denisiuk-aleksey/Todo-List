import React from 'react'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'
import cx from 'classnames'
import styles from './TodoHeader.module.scss'

const TodoHeader = () => {
  return (
    <header className={styles.todoHeader}>
      <Icon
        path={mdiMenu}
        size={1}
        color='white'
      />
      <span className={styles.todoSpan}>Website todo</span>
    </header>
  )
}

export default TodoHeader
