import * as Yup from 'yup'

export const USER_TASK_SCHEMA = Yup.object().shape({
  task: Yup.string()
    .max(150, 'To long task')
    .required('You cannot add empty task')
})
