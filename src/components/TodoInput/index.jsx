import { Formik, Form, Field, ErrorMessage } from 'formik'
import { USER_TASK_SCHEMA } from '../../utils/validationSchems.js'
import styles from './TodoInput.module.scss'

const TodoInput = props => {
  const { onSubmit } = props
  const initialValues = { todo: '' }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={USER_TASK_SCHEMA}
      onSubmit={(values, formikBag) => {
        onSubmit(values)
        formikBag.resetForm()
      }}
    >
      <Form className={styles.container}>
        <Field
          type='text'
          name='todo'
          placeholder='Task...'
          className={styles.input}
        />
        <ErrorMessage name='todo' component='span'  className={styles.errorMessage}/>

        <button type='submit' className={styles.submitButton} onSubmit={onSubmit}>
          Add Task
        </button>

      </Form>
    </Formik>
  )
}

export default TodoInput
