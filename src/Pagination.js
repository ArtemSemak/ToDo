import './App.css';



function Pagination({ todosLength, todosPerPage, pageClick, prevPage, nextPage, currentPage }) {   
    const pages = []

    

    for (let i = 1; i <= Math.ceil(todosLength / todosPerPage); i++) {
        pages.push(i)
    }
    
        if (pages.length > 1) {
            return (
                    <section className='footer'>
                            <input class="btnD arrows" type="image" src="left.png" title="Previous page" onClick={prevPage}/>
                            {
                                pages.map(page => {
                                    if (page === currentPage){
                                        return <input className='footer-item active' type="button" value={page} onClick={() => pageClick(page)}/>}
                                        else {
                                            return <input className='footer-item' type="button" value={page} onClick={() => pageClick(page)}/>
                                        }})
                            }
                            <input class="btnD arrows" type="image" src="right.png" title="Next page" onClick={nextPage}/>
                    </section> 
        ) } else {
            return <span></span>
        }
    } 


export default Pagination