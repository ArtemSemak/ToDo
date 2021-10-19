import './App.css';

import { useState } from 'react'
import TDList from './TDlLst'
import Pagination from './Pagination'
import InputToDo from './InputToDo'

function App() {
  const date = new Date()
  const [todos, setTodos] = useState([])
  const [sortedTodos, setSortedTodos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const todosPerPage = 5
  const todosForCurrentPage = sortedTodos.slice(currentPage * todosPerPage - 5, currentPage * todosPerPage )
  
  
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
    setSortedTodos(sortedTodos.filter(todo => todo.id !== id))
  }


function doneTodo(id) {
    setTodos(
      sortedTodos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }
      )
    ) 
    
  }
  
  function editToDo(id, newTitle) {
    setTodos(
      todosForCurrentPage.map( todo =>{
        if (todo.id === id) {
          todo.title = newTitle
        } return todo}
    )
    )}
  
  function sortByDate(flag) {
    if (flag === 'up') {
     
      const list = sortedTodos.sort((a, b) => b.id - a.id)
      let newList = []
      Object.assign(newList, list)
      setSortedTodos(newList)
    } else { 
      const list = sortedTodos.sort((a, b) => a.id - b.id)
      let newList = []
      Object.assign(newList, list)
      setSortedTodos(newList)
    }


  }

  function sortByComplete(flag) {
    
    if (flag === 'all') {
      setSortedTodos(todos)
    }
    else if (flag === 'done'){
      
      setSortedTodos(todos.filter(it => it.completed === true))
    } else {
      setSortedTodos(todos.filter(it => it.completed === false))
    }


  }

  function nextPage() {
    if (currentPage != Math.ceil(sortedTodos.length / todosPerPage)) setCurrentPage(currentPage + 1)
      
  }

  function prevPage() {
    if (currentPage != 1) setCurrentPage(currentPage - 1)
    
  }



  function addTodo(value) {
    
     
      const id = Date.now()
      if (value.trim()) {
        console.log(value)
        setTodos(todos.concat(
          {
            id: id,
            title: value,
            completed: false,
            date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    
          }
        ))
        setSortedTodos(todos.concat(
          {
            id: id,
            title: value,
            completed: false,
            date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    
          }
        ))
        
        
      }
    }
    
    function hanlePageClick(number) { 
      setCurrentPage(number)
    }

    

    

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
                <input type="button" onClick={() => sortByComplete('all')} value="All" title="Show all plans"/>
                <input type="button" onClick={() => sortByComplete('done')} value="Done" title="Show completed plans"/>
                <input type="button" onClick={() => sortByComplete('undone')} value="Undone" className="btnU" title="Show uncompleted plans"/>
            </section>
            <section className="dund">
                <span className="lblar"> Sort by date </span>
                    <input className="btnD" onClick={() => sortByDate('up')} type="image" src="premium-icon-up-arrow-3987238.png" title="New first"/>
                
                    <input className="btnD" onClick={() => sortByDate('down')} type="image" src="reverse.png" title="Old first"/>
                
            </section>
        </section>
    </header>

    <TDList edit={editToDo} sortedTodos={todosForCurrentPage} doneTodo={doneTodo} removeTodo={removeTodo}/>

    

    <footer>
    
      <Pagination todosLength={sortedTodos.length} todosPerPage={todosPerPage} pageClick={hanlePageClick} nextPage={nextPage} prevPage={prevPage}/>  
    
    </footer>
    </body>
    </div>
  );
}

export default App;
