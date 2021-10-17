
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";

const baseURL = `https://reqres.in/api/users`;

const Table = () => {
  const [users, setUsers] = useState();
 
  function handleShow() {
    console.log('clicked')
  }

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const resUsers = res.data;
      console.log(resUsers);
      setUsers(resUsers);
    });
  }, []);


  return (
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
      </div> 
    )
  
          }

export default Table;
