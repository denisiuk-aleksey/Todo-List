import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import './App.css'

const App = props => {
  return (
    <div className='container'>
      <TodoHeader />
       <TodoInput />
    {/* {  <TodoTaskList />} */}
    </div>
  )
}

export default App
