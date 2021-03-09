import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { USER_TASK_SCHEMA } from '../../utils/validationSchems.js'

const TodoInput = props => {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: 'Your task may be here...',
      isDone: true,
      createdAt: new Date()
    }
  ])

  const onSubmit = values => {
    const newTask = {
      body: values.userTask,
      id: Date.now(),
      isDone: false
    }
    setTodoArray([...todoArray, newTask])
  }

  return (
    <Formik
      initialValues={{ todoBody: '' }}
      onSubmit={onSubmit}
      validationSchema={USER_TASK_SCHEMA}
    >
      <Form>
        <Field type='text' name='task' placeholder='Task...' />
        <ErrorMessage component='span' name='task' />
      </Form>
    </Formik>
  )
}

export default TodoInput
