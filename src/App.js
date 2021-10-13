import './App.css';
import TDCard from './TDCard';

function App() {
  return (
    <div classNameName="App">
    <body>
      <header>
        <section>
            <p className="title">ToDo</p>
        </section>
        <section>
            <input type="text" placeholder="I want to do..." className="inpTD" title="Write your plan here"/>
            <input type="button" className="btnAdd" value="Add" title="Add your plan"/>
        </section>
        <section className="control">
            <section className="dund">
                <input type="button" value="All" title="Show all plans"/>
                <input type="button" value="Done" title="Show completed plans"/>
                <input type="button" value="Undone" className="btnU" title="Show uncompleted plans"/>
            </section>
            <section className="dund">
                <span className="lblar"> Sort by date </span>
                    <input className="btnD" type="image" src="premium-icon-up-arrow-3987238.png" title="New first"/>
                
                    <input className="btnD" type="image" src="reverse.png" title="Old first"/>
                
            </section>
        </section>
    </header>

    <main className="tds">
      <TDCard tdtext ='todo'  date = '12.23.2001'/>
      <TDCard tdtext ='todo'  date = '12.23.2001'/>
      <TDCard tdtext ='todo'  date = '12.23.2001'/>
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
