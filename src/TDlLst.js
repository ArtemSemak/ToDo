import './App.css';
import TDCard from './TDCard';


function TDList({ sortedTodos, doneTodo, removeTodo, flag}) {
    return (
        <main className="tds">
            { sortedTodos.length ?  sortedTodos.slice(0, 5).map( todo => {
            return <TDCard todo={todo} onChange={doneTodo} deleteTodo={removeTodo}/>
            }) : <p className="noTD">You dont have ToDos</p>}
        </main>
    )
}

export default TDList