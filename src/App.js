import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import TDList from './TDlLst'
import Pagination from './Pagination'
import InputToDo from './InputToDo'
import Filters from './Filters'
import Modal from './Modal';


const myID = process.env["REACT_APP_ID"]

function App() {
  const [todos, setTodos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [doneUnDone, setDoneUnDone] = useState('')
  const [order, setOrder] = useState('desc')
  const [show, setShow] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const todosPerPage = 5
  const todosForCurrentPage = todos.slice(currentPage * todosPerPage - todosPerPage, currentPage * todosPerPage )

  function onClose() {
    setShow(false)
  }

  async function removeTodo(id) {
    try {
      setTodos(todos.filter(todo => todo.uuid !== id))
      await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/${myID}/${id}`)
      
      if (todosForCurrentPage.length - 1 === 0 && currentPage != 1) {
        setCurrentPage(currentPage - 1)
      }} catch(err) {
        setErrorMsg(err.response.data.message)
        setShow(true)
        }
  }


async function doneTodo(id, completed, title) {
  try {
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/${myID}/${id}`, {
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
          setErrorMsg(err.response.data.message)
          setShow(true)
          }
    
    
  }
  
  async function editToDo(id, newTitle, completed) {
    try {
      await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/${myID}/${id}`, {
        name: newTitle,
        done: completed
        })
      setTodos( 
        todos.map( todo =>{
          if (todo.uuid === id) {
            todo.name = newTitle
          } return todo}
      ))} catch(err) {
        setErrorMsg(err.response.data.message)
        setShow(true)
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
        setDoneUnDone('')
        await axios.post(`https://todo-api-learning.herokuapp.com/v1/task/${myID}`, {
          name: value,
          done: false
      })
        getTodos()
      } catch(err) {
        setErrorMsg(err.response.data.message)
        setShow(true)
    }
    }
    
    function hanlePageClick(number) { 
      setCurrentPage(number)
    }

    async function getTodos() {
      try {
        const data = await axios.get(`https://todo-api-learning.herokuapp.com/v1/tasks/${myID}?order=${order}&filterBy=${doneUnDone}`)
        setTodos(data.data)
      } catch(err) {
        setErrorMsg(err.response.data.message)
        setShow(true)
        }
      
    }

    useEffect(() => {getTodos()}, [])

    useEffect(() => {
      getTodos()
    }, [doneUnDone, order])

  return (
    <div className="App">
    <body>
      <header>
        <section>
            <p className="title">ToDo</p>
        </section>
          <InputToDo addTodo={addTodo}/>
          <Filters doneUndone={doneUnDone} setDoneUnDone={setDoneUnDone} setOrder={setOrder} />
    </header>

    <TDList edit={editToDo} sortedTodos={todosForCurrentPage} doneTodo={doneTodo} removeTodo={removeTodo}/>
    <Modal visible={show} onClose={onClose} content={errorMsg} footer={<button onClick={onClose}>Close</button>}/>
    

    <footer>
    
      <Pagination currentPage={currentPage} todosLength={todos.length} todosPerPage={todosPerPage} pageClick={hanlePageClick} nextPage={nextPage} prevPage={prevPage}/>  
    
    </footer>
    </body>
    </div>
  );
}

export default App;
