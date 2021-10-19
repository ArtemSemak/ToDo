import './App.css';
import { useState } from 'react'

function TDCard({ todo, onChange, deleteTodo, editing}) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('')
  const classes = ['titleToDo']
  if (todo.completed) {
    classes.push('done')
  }

  function clickHandler() {
    setEdit(true)
  }
    return (
        <section className="td">
        <section >
            <span><label>
                <input  type='checkbox' onChange={ () => onChange(todo.id) } checked={ todo.completed }/>
                <span className="test"></span>
              </label>
               </span>
               {edit ? <form className='input-for-edit' onSubmit={event => {
                 event.preventDefault()
                 editing(todo.id, value)
                 setEdit(false)
               }}><input onKeyDown={ (e) => {
                 if (e.keyCode === 27) {
                   setEdit(false)
                 }
               }} value={value} onChange={event => setValue(event.target.value)} placeholder="I want to do..." /></form> : <button onClick={ clickHandler } className='qwe'><span  className={ classes.join(' ') }> { todo.title } </span></button>}
        </section>
        <section>
          <label className="lbltext"> { todo.date } </label>
          <input type="image" className="btnD trash" src="premium-icon-trash-can-4914888.png" title="Delete plan" onClick={ () => {
            deleteTodo(todo.id)
            setEdit(false)} }/>
      </section>
    </section>
    )
}

export default TDCard