import './App.css';

import { useState, useEffect } from 'react'
import TDList from './TDlLst'
import Pagination from './Pagination'

function App() {
  const date = new Date()
  const [todos, setTodos] = useState([])
  const [sortedTodos, setSortedTodos] = useState([])
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState()
  const todosPerPage = 5
  const [sortedCount, setSortedCount] = useState(0)
  const [doneUnDone, setDoneUnDone] = useState('all')
  
  
  
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
    setSortedTodos(sortedTodos.filter(todo => todo.id !== id))
  }


function doneTodo(id) {
    setTodos(
      todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }
      )
    ) 
    
  }
  
  
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
      setSortedCount(todos.length)
      setSortedTodos(todos)
      setDoneUnDone('all')
    }
    else if (flag == 'done'){
      setSortedCount(todos.filter(it => it.completed === true).length)
      setSortedTodos(todos.filter(it => it.completed === true))
      setDoneUnDone('done')
    } else {
      setSortedCount(todos.filter(it => it.completed === false).length)
      setSortedTodos(todos.filter(it => it.completed === false))
      setDoneUnDone('undone')
    }


  }





  function addTodo(event) {
    
    event.preventDefault()
      const id = Date.now()
      setSortedCount(sortedCount + 1)
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
        
        setValue(' ')
        setSortedCount(sortedCount + 1)
      }
    }
    
    function hanlePageClick(data) { 
      setCurrentPage(data.selected)
    }

    useEffect(() => {
      if (doneUnDone === 'all') {
        setSortedTodos(todos.slice(currentPage * todosPerPage, currentPage * todosPerPage + 5 ))
        console.log(sortedTodos)
      } else if (doneUnDone == 'done'){
        console.log(sortedTodos)
        
        
        console.log(sortedTodos)
        console.log(todos)
        setSortedTodos(todos.filter(it => it.completed === true))
        console.log(todos)
        console.log(sortedTodos)
        setSortedTodos(sortedTodos.slice(currentPage * todosPerPage, currentPage * todosPerPage + 5 ))
        console.log(currentPage)
        
        
      } else {
        setSortedTodos(todos.filter(it => it.completed === false))
        setSortedTodos(sortedTodos.slice(currentPage * todosPerPage, currentPage * todosPerPage + 5 ))
      }
      
    }, [currentPage])

    

  return (
    <div className="App">
    <body>
      <header>
        <section>
            <p className="title">ToDo</p>
        </section>
        <section>
          <form onSubmit={addTodo}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)} placeholder="I want to do..." className="inpTD" title="Write your plan here"/>
            <button type="submit"  className="btnAdd" title="Add your plan">Add</button>
          </form> 
        </section>
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

    <TDList sortedTodos={sortedTodos} doneTodo={doneTodo} removeTodo={removeTodo} flag={doneUnDone}/>

    

    <footer>
    
      <Pagination todosLength={sortedCount} todosPerPage={todosPerPage} pageClick={hanlePageClick}/>  
    
    </footer>
    </body>
    </div>
  );
}

export default App;
