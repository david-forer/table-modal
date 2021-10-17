import React from 'react';
import {  HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './paginate.css';


const Paginate = ({currentPage, setCurrentPage}) => {
  console.log(currentPage)
  
const handleClick = () => {
  console.log('clicked')
  setCurrentPage(prev => !prev)
}
  return (
    <>
       <nav className="nav-pag">
          <ul className="pagination">
            <li > <HiChevronDoubleLeft /> </li>
            <li > <HiChevronLeft /></li>
            <li onClick={handleClick}> 1</li>
            <li onClick={handleClick}> 2</li>
            <li > <HiChevronRight /></li>
            <li > <HiChevronDoubleRight /> </li>
          </ul>
        </nav>
    </>
  )
}

export default Paginate
