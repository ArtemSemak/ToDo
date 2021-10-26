import './App.css';
import upAr from './images/premium-icon-up-arrow-3987238.png'
import downAr from './images/reverse.png'

function Filters({ doneUnDone, setDoneUnDone, setOrder }) {
    return (
        <section className="control">
            <section className="dund">
                {doneUnDone === '' ? <input type="button" onClick={() => setDoneUnDone('')} value="All" className='active' title="Show all plans"/> : 
                <input type="button" onClick={() => setDoneUnDone('')} value="All"  title="Show all plans"/>} 
                {doneUnDone === 'done' ? <input type="button" onClick={() => setDoneUnDone('done')} value="Done" className='active' title="Show completed plans"/> : 
                <input type="button" onClick={() => setDoneUnDone('done')} value="Done"  title="Show completed plans"/>}
                {doneUnDone === 'undone' ? <input type="button" onClick={() => setDoneUnDone('undone')} value="Undone" className='active' title="Show uncompleted plans"/> : 
                <input type="button" onClick={() => setDoneUnDone('undone')} value="Undone"  title="Show uncompleted plans"/>}
            </section>
            <section className="dund">
                <span className="lblar"> Sort by date </span>
                    <input className="btnD" onClick={() => setOrder('asc')} type="image" src={upAr} title="New first"/>
                
                    <input className="btnD" onClick={() => setOrder('desc')} type="image" src={downAr} title="Old first"/>
                
            </section>
        </section>
    )
}


export default Filters