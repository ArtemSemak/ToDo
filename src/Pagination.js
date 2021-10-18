import './App.css';
import ReactPaginate from 'react-paginate';
function Pagination({ todosLength, todosPerPage, pageClick  }) {   
        return (
            <section>
                <ReactPaginate 
                    containerClassName="pagination"
                    pageCount={todosLength / todosPerPage}
                    previousLabel='<<'
                    nextLabel='>>'
                    pageClassName=''
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    onPageChange={pageClick}
                />
            </section>
        )
    } 

export default Pagination