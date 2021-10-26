import React from 'react';
import {  HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './paginate.css';


const Paginate = ({page, totalPages, onPageChanged}) => {

  // const onPrevious = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  
  // const handleClick = () => {
  //   console.log((data.page))
  //   setCurrentPage(prev => !prev)
  // }

  const pageNumbers = [];
  for (let index = 0; index < totalPages; index++) {
    pageNumbers.push(index + 1);
  }

  const previousPage = (page - 1 < 1) ? 1 : page - 1;
  const nextPage = (page + 1 > totalPages) ? totalPages : page + 1;

  return (
    <>
       <nav className="nav-pag">
          <ul className="pagination">
            <li
              style={{ 
                cursor: 'pointer',  
                color: page === 1 ? '#c0c0c0' : '#036'
              }}  
              onClick={() => { onPageChanged(1) }}> 
              <HiChevronDoubleLeft /> 
            </li>
            <li
              style={{ 
                cursor: 'pointer',  
                color: page === 1 ? '#c0c0c0' : '#036'
              }}  
              onClick={() => { onPageChanged(previousPage) }}> 
               <HiChevronLeft />
            </li>
            {
              pageNumbers.map(pageNumber => (
                <li 
                  style={{ 
                    cursor: 'pointer',  
                    color: page === pageNumber ? '#c0c0c0' : '#036'
                  }} 
                  onClick={() => { onPageChanged(pageNumber) }}
                > 
                  {pageNumber}
                </li>
              ))
            }
            <li
              style={{ 
                cursor: 'pointer',  
                color: page === totalPages ? '#c0c0c0' : '#036'
              }}  
              onClick={() => { 
                onPageChanged(nextPage)
              }}> 
               <HiChevronRight />
            </li>
            <li
               style={{ 
                cursor: 'pointer',  
                color: page === totalPages ? '#c0c0c0' : '#036'
              }}   
              onClick={() => { onPageChanged(totalPages) }}
            > 
              <HiChevronDoubleRight /> 
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Paginate
