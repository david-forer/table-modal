
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import Modal from './Modal';
import Paginate from "./Paginate";


const baseURL = `https://reqres.in/api/users`;

const Table = () => {
  const [users, setUsers] = useState();
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState()
 
  const handleShow = () => {
    console.log('clicked')
    setShowModal(prev => !prev)
  }

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const resUsers = res.data;
      console.log(resUsers);
      setUsers(resUsers);
    });
  }, []);


  return (
    <>
      <div className="div">  
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>GIVEN NAME</th>
            <th>FAMILY NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users &&  users.data.map((user) => (
              
                <tr key={user.id}　onClick={handleShow}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
             
            ))}
        </tbody>
      </table>
      <Paginate currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div> 
      <Modal showModal={showModal} setShowModal={setShowModal} />
      </>
    )
  
          }

export default Table;
