import './App.css';
import { useState } from 'react' 
import trash from './images/premium-icon-trash-can-4914888.png'

function TDCard({ todo, onChange, deleteTodo, editing}) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('')
  const classes = ['titleToDo']
  if (todo.done) {
    classes.push('done')
  }

  function clickHandler() {
    setEdit(true)
  }

  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()) {
      editing(todo.uuid, value, todo.done)
      setEdit(false)
  }
  }

  function escHandler(event) {
    if (event.key === 'Escape') {
      setEdit(false)
    }
  }
    return (
        <section className="td">
        <section >
            <span><label>
                <input  type='checkbox' onChange={ () => onChange(todo.uuid, todo.done, todo.name) } checked={ todo.done }/>
                <span className="test"></span>
              </label>
               </span>
               {edit ? <form className='input-for-edit' onBlur={() => {
                console.log(123) 
                setEdit(false)}} onSubmit={event => submitHandler(event)
               } ><input autoFocus  onKeyDown={ (event) => escHandler(event)} value={value} onChange={event => setValue(event.target.value)} placeholder="I want to do..." /></form> : 
               <button onClick={ clickHandler } className='qwe'><span  className={ classes.join(' ') }> { todo.name } </span></button>}
        </section>
        <section>
          <label className="lbltext"> { todo.createdAt.slice(0, 10) } </label>
          <input type="image" className="btnD trash" src={trash} title="Delete plan" onClick={ () => {
            deleteTodo(todo.uuid)
            setEdit(false)} }/>
      </section>
    </section>
    )
}


export default TDCard