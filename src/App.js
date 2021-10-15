import './App.css';
import TDCard from './TDCard';
import { useState } from 'react'

function App() {
  let id = 4
  const date = new Date()
  const [todos, setTodos] = useState([])
  let [sortedTodos, setSortedTodos] = useState([])
  const [value, setValue] = useState('')
  
  
  
  
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
    else {
      setSortedTodos(todos.filter(it => it.completed === flag))
    }


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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
    setSortedTodos(sortedTodos.filter(todo => todo.id !== id))
  }


  function addTodo(event) {
    
    event.preventDefault()
    
      if (value.trim()) {
        console.log(value)
        setTodos(todos.concat(
          {
            id: Date.now(),
            title: value,
            completed: false,
            date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    
          }
        ))
        setSortedTodos(todos.concat(
          {
            id: Date.now(),
            title: value,
            completed: false,
            date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    
          }
        ))
        
        setValue(' ')
      }
    }

  

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
                <input type="button" onClick={() => sortByComplete(true)} value="Done" title="Show completed plans"/>
                <input type="button" onClick={() => sortByComplete(false)} value="Undone" className="btnU" title="Show uncompleted plans"/>
            </section>
            <section className="dund">
                <span className="lblar"> Sort by date </span>
                    <input className="btnD" onClick={() => sortByDate('up')} type="image" src="premium-icon-up-arrow-3987238.png" title="New first"/>
                
                    <input className="btnD" onClick={() => sortByDate('down')} type="image" src="reverse.png" title="Old first"/>
                
            </section>
        </section>
    </header>

    <main className="tds">
      { sortedTodos.length ?  sortedTodos.map( todo => {
        return <TDCard todo={todo} onChange={doneTodo} deleteTodo={removeTodo}/>
      }) : <p className="noTD">You dont have ToDos</p>}
    </main>

    

    <footer className="footer">
      
        <input className="btnD arrows" type="image" src="left.png" title="Previous page"/>
        <input type="button" value="1"/>
        <input type="button" value="2"/>
        <input type="button" value="3"/>
        <input className="btnD arrows" type="image" src="right.png" title="Next page"/>
      
    </footer>
    </body>
    </div>
  );
}

export default App;
