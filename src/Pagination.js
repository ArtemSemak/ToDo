import './App.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react'


function Pagination({ todosLength, todosPerPage, pageClick, prevPage, nextPage }) {   
    const pages = []

    for (let i = 1; i <= Math.ceil(todosLength / todosPerPage); i++) {
        pages.push(i)
    }
    

        return (
                <section className='footer'>
                        <input class="btnD arrows" type="image" src="left.png" title="Previous page" onClick={prevPage}/>
                        {
                            pages.map(page => <input className='footer-item' type="button" value={page} onClick={() => pageClick(page)}/>)
                        }
                        <input class="btnD arrows" type="image" src="right.png" title="Next page" onClick={nextPage}/>
                </section>
        )
    } 


export default Pagination