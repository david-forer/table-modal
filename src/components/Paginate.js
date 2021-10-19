import React, {useState} from 'react';
import {  HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './paginate.css';


const Paginate = ({data}) => {
const [currentPage, setCurrentPage] = useState()

  // console.log(data.page)

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  
const handleClick = () => {
  console.log((data.page))
  setCurrentPage(prev => !prev)
}
  return (
    <>
       <nav className="nav-pag">
          <ul className="pagination">
            <li > <HiChevronDoubleLeft /> </li>
            <li > <HiChevronLeft onClick={onPrevious}/></li>
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
