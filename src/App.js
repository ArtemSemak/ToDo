import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import TDList from './TDlLst'
import Pagination from './Pagination'
import InputToDo from './InputToDo'

function App() {
  const [todos, setTodos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [doneUnDone, setDoneUnDone] = useState('all')
  const todosPerPage = 5
  const todosForCurrentPage = todos.slice(currentPage * todosPerPage - todosPerPage, currentPage * todosPerPage )

  
  async function removeTodo(id) {
    try {
      setTodos(todos.filter(todo => todo.uuid !== id))
      await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/4/${id}`)
      if (todosForCurrentPage.length - 1 === 0 && currentPage != 1) {
        setCurrentPage(currentPage - 1)
      }} catch(err) {
        alert(err.response.data.message)
        }
  }


async function doneTodo(id, completed, title) {
  try {
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/4/${id}`, {
        name: title,
        done: !completed
        })
        setTodos(
          todos.map( todo => {
            if (todo.uuid === id) {
              todo.done = !todo.done
            }
            return todo
          }
          )
        ) } catch(err) {
          alert(err.response.data.message)
          }
    
    
  }
  
  async function editToDo(id, newTitle, completed) {
    try {
      await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/4/${id}`, {
        name: newTitle,
        done: completed
        })
      setTodos(
        todos.map( todo =>{
          if (todo.uuid === id) {
            todo.name = newTitle
          } return todo}
      ))} catch(err) {
        alert(err.response.data.message)
        }
    }
  
  async function sortByDate(flag) {
    try {
      if (flag === 'up') {
        if (doneUnDone === 'all') {
          const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?order=asc")
          setTodos(data.data)
        }
        else if (doneUnDone === 'done'){
          const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=done&order=asc")
          setTodos(data.data)
        } else {
          const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=undone&order=asc")
          setTodos(data.data)
        }
      } else { 
        if (doneUnDone === 'all') {
          const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?order=desc")
          setTodos(data.data)
        }
        else if (doneUnDone === 'done'){
          const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=done&order=desc")
          setTodos(data.data)
        } else {
          const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=undone&order=desc")
          setTodos(data.data)
        }
      } } catch(err) {
        alert(err.response.data.message)
        }


  }

  async function sortByComplete(flag) {
    try {
      setCurrentPage(1)
      if (flag === 'all') {
        getTodos()
        setDoneUnDone('all')
      }
      else if (flag === 'done'){
        const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=done&order=desc")
        setDoneUnDone('done')
        setTodos(data.data)
      } else {
        const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=undone&order=desc")
        setTodos(data.data)
        setDoneUnDone('undone')
      } } catch(err) {
        alert(err.response.data.message)
        }


  }

  function nextPage() {
    if (currentPage != Math.ceil(todos.length / todosPerPage)) setCurrentPage(currentPage + 1)
      
  }

  function prevPage() {
    if (currentPage != 1) setCurrentPage(currentPage - 1)
    
  }



  async function addTodo(value) {
      try {
        setDoneUnDone('all')
        await axios.post("https://todo-api-learning.herokuapp.com/v1/task/4", {
          name: value,
          done: false
      })
        getTodos()
      } catch(err) {
          alert(err.response.data.message)
    }
    }
    
    function hanlePageClick(number) { 
      setCurrentPage(number)
    }

    async function getTodos() {
      try {
        const data = await axios.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?order=desc")
        setTodos(data.data)
      } catch(err) {
        alert(err.response.data.message)
        }
      
    }

    useEffect(() => {getTodos()}, [])

  return (
    <div className="App">
    <body>
      <header>
        <section>
            <p className="title">ToDo</p>
        </section>
          <InputToDo addTodo={addTodo}/>
        <section className="control">
            <section className="dund">
                {doneUnDone === 'all' ? <input type="button" onClick={() => sortByComplete('all')} value="All" className='active' title="Show all plans"/> : 
                <input type="button" onClick={() => sortByComplete('all')} value="All"  title="Show all plans"/>} 
                {doneUnDone === 'done' ? <input type="button" onClick={() => sortByComplete('done')} value="Done" className='active' title="Show completed plans"/> : 
                <input type="button" onClick={() => sortByComplete('done')} value="Done"  title="Show completed plans"/>}
                {doneUnDone === 'undone' ? <input type="button" onClick={() => sortByComplete('undone')} value="Undone" className='active' title="Show uncompleted plans"/> : 
                <input type="button" onClick={() => sortByComplete('undone')} value="Undone"  title="Show uncompleted plans"/>}
            </section>
            <section className="dund">
                <span className="lblar"> Sort by date </span>
                    <input className="btnD" onClick={() => sortByDate('up')} type="image" src="images/premium-icon-up-arrow-3987238.png" title="New first"/>
                
                    <input className="btnD" onClick={() => sortByDate('down')} type="image" src="images/reverse.png" title="Old first"/>
                
            </section>
        </section>
    </header>

    <TDList edit={editToDo} sortedTodos={todosForCurrentPage} doneTodo={doneTodo} removeTodo={removeTodo}/>

    

    <footer>
    
      <Pagination currentPage={currentPage} todosLength={todos.length} todosPerPage={todosPerPage} pageClick={hanlePageClick} nextPage={nextPage} prevPage={prevPage}/>  
    
    </footer>
    </body>
    </div>
  );
}

export default App;
