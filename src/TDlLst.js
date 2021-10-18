import './App.css';
import TDCard from './TDCard';


function TDList({ sortedTodos, doneTodo, removeTodo}) {
    return (
        <main className="tds">
            { sortedTodos.length ?  sortedTodos.map( todo => {
            return <TDCard todo={todo} onChange={doneTodo} deleteTodo={removeTodo}/>
            }) : <p className="noTD">You dont have ToDos</p>}
        </main>
    )
}

export default TDList