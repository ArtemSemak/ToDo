import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import TDList from './TDlLst'
import Pagination from './Pagination'
import InputToDo from './InputToDo'
import Filters from './Filters'
import Modal from './Modal';


const myID = process.env["REACT_APP_ID"]
const url = process.env["REACT_APP_URL"]

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
      await axios.delete(`${url}/${myID}/${id}`)
      
      if (todosForCurrentPage.length - 1 === 0 && currentPage != 1) {
        setCurrentPage(currentPage - 1)
      }} catch(err) {
        setErrorMsg(err.response.data.message)
        setShow(true)
        setTimeout(() => setShow(false), 3000)
        }
  }


async function doneTodo(id, completed, title) {
  try {
    await axios.patch(`${url}/${myID}/${id}`, {
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
          setTimeout(() => setShow(false), 3000)
          }
    
    
  }
  
  async function editToDo(id, newTitle, completed) {
    try {
      await axios.patch(`${url}/${myID}/${id}`, {
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
        setTimeout(() => setShow(false), 3000)
        }
    }

  async function addTodo(value) {
      try {
        setDoneUnDone('')
        await axios.post(`${url}/${myID}`, {
          name: value,
          done: false
      })
        getTodos()
      } catch(err) {
        setErrorMsg(err.response.data.message)
        setShow(true)
        setTimeout(() => setShow(false), 3000)
    }
    }
    
    function hanlePageClick(number) { 
      setCurrentPage(number)
    }

    async function getTodos() {
      try {
        const data = await axios.get(`https://todo-api-artemsemak.herokuapp.com/api/todos`, {headers: {
          "x-auth": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6InRlc3QifQ.pjMdOthXfkkXhhI6ZV5iEfWdqb0DV6dVXVzEwHM0fa0"
        }})
        setTodos(data.data)
      } catch(err) {
        // console.log(err)
        // setErrorMsg(err)
        // setShow(true)
        // setTimeout(setShow(false), 3000)
        }
      
    }

    useEffect(() => {getTodos()}, [])

    useEffect(() => {
      setCurrentPage(1)
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
          <Filters doneUndone={doneUnDone} setDoneUnDone={setDoneUnDone} setOrder={setOrder} order={order} />
    </header>

    <TDList edit={editToDo} sortedTodos={todosForCurrentPage} doneTodo={doneTodo} removeTodo={removeTodo}/>
    
    

    <footer>
    
      <Pagination  todosLength={todos.length} todosPerPage={todosPerPage} pageClick={hanlePageClick} />  
    
    </footer>
    <Modal visible={show} onClose={onClose} content={errorMsg} />
    </body>
    </div>
  );
}

export default App;
