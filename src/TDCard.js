import './App.css';

function TDCard(props) {
    return (
        <section className="td">
        <section>
            <span><label className="hide">
                <input type='checkbox'/>
                <span></span>
                <label className="tdtxt"> { props.tdtext } </label>
              </label> </span>
        </section>
        <section>
          <label className="lbltext"> { props.date } </label><input type="image" className="btnD trash" src="premium-icon-trash-can-4914888.png" title="Delete plan"/>
      </section>
    </section>
    )
}

export default TDCard