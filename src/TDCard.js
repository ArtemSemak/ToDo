import './App.css';

function TDCard({ todo, onChange, deleteTodo }) {
  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

    return (
        <section className="td">
        <section>
            <span><label className="hide">
                <input type='checkbox' onChange={ () => onChange(todo.id) } checked={ todo.completed }/>
                <span className="test"></span>
                <span className={ classes.join(' ') }> { todo.title } </span>
              </label> </span>
        </section>
        <section>
          <label className="lbltext"> { todo.date } </label>
          <input type="image" className="btnD trash" src="premium-icon-trash-can-4914888.png" title="Delete plan" onClick={ () => deleteTodo(todo.id) }/>
      </section>
    </section>
    )
}

export default TDCard