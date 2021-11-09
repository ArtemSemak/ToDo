import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import TDList from './TDlLst'
import Pagination from './Pagination'
import InputToDo from './InputToDo'
import Filters from './Filters'
import Modal from './Modal';
import Registration from './Registration';
import Login from './Login';


const myID = process.env["REACT_APP_ID"]
const url = process.env["REACT_APP_URL"]

function App() {
  const [todos, setTodos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [doneUnDone, setDoneUnDone] = useState('all')
  const [order, setOrder] = useState('desc')
  const [show, setShow] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showRegistration, setShowRegistration] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [jwt, setJwt] = useState('')
  const [user, setUser] = useState('')
  const todosPerPage = 5
  const todosForCurrentPage = todos.slice(currentPage * todosPerPage - todosPerPage, currentPage * todosPerPage )
  const config = {
    headers : {
      "x-auth": jwt
    }
  }
  function onClose() {
    setShow(false)
  }

  async function removeTodo(id) {
    try {
      setTodos(todos.filter(todo => todo.uuid !== id))
      console.log(id)
      console.log(todos)
      await axios.delete(`${url}/${id}/${user}`, config)
      
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
    await axios.put(`${url}/${id}/${user}`, {
        name: title,
        done: !completed
        }, config)
        setTodos(
          todos.map( todo => {
            if (todo.uuid === id) {
              todo.done = !todo.done
            }
            return todo
          }
          )
        ) } catch(err) {
          console.log(err)
          }
    
    
  }
  
  async function editToDo(id, newTitle, completed) {
    try {
      await axios.put(`${url}/${id}/${user}`, {
        name: newTitle,
        done: completed
        }, config)
      setTodos( 
        todos.map( todo =>{
          if (todo.uuid === id) {
            todo.name = newTitle
          } return todo}
      ))} catch(err) {
        console.log(err)
        }
    }
  

  async function addUser(user) {
    try {
      await axios.post('https://todo-api-artemsemak.herokuapp.com/registration', user)
      setShowLogin(true)
      setShowRegistration(false)
    } catch(e) {
      console.log(e)
    }
  }

  async function loginUser(logUser) {
    try {
      
      const response = await axios.post('https://todo-api-artemsemak.herokuapp.com/login', logUser)
      setUser(logUser.login)
      console.log(user)
      setJwt(response.data)
      setShowLogin(false)
    } catch(e) {
      console.log(e)
      // setErrorMsg(e)
      // setShow(true)
      // setTimeout(() => setShow(false), 3000)
    }
  }


  async function addTodo(value) {
      try {
        setDoneUnDone('')
        await axios.post(`${url}/${user}`, {
          name: value,
          done: false
      }, config)
        setCurrentPage(1)
        setDoneUnDone('all')
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
        console.log(user)
        const data = await axios.get(`${url}s/${user}?order=${order}&filterBy=${doneUnDone}`, config)
        setTodos(data.data)
      } catch(err) {
        // setErrorMsg(err)
        // setShow(true)
        // setTimeout(setShow(false), 3000)
        }
      
    }



    useEffect(() => {
      setCurrentPage(1)
      getTodos()
      
    }, [doneUnDone, order, jwt])

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
    <Registration addUser={addUser} showRegistration={showRegistration} setShowRegistration={setShowRegistration} setShowLogin={setShowLogin}/>
    <Login loginUser={loginUser} showLogin={showLogin} setShowLogin={setShowLogin} setShowRegistration={setShowRegistration}/>
    </body>
    </div>
  );
}

export default App;
