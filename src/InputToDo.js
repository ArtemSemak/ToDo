import './App.css'
import { useState } from 'react'


function InputToDo({ addTodo }) {
    const [value, setValue] = useState('')
    
    return (
        <section>
          <form onSubmit={event => {
        event.preventDefault()
        addTodo(value)
        setValue('')
      }}>
            <input autoFocus type="text" value={value} onChange={event => setValue(event.target.value)} placeholder="I want to do..." className="inpTD" title="Write your plan here"/>
            <button type="submit"  className="btnAdd" title="Add your plan">Add</button>
          </form> 
        </section>
    )
}


export default InputToDo