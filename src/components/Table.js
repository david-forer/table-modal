import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import Modal from "./Modal";
import Paginate from "./Paginate";

const baseURL = `https://reqres.in/api/users`;

const Table = () => {
  const [users, setUsers] = useState();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState();

  const handleShow = () => {
    setShowModal((prev) => !prev);
    console.log(users)
  };

  const rowEvents = {
    onClick: (user, row) => {
      // console.log(user)
    }
  }

  useEffect(() => {
    axios
      .get(`${baseURL}?page=${currentPage}&per_page=${perPage}`)
      .then((res) => {
        const { data, page, per_page, total_pages } = res.data;
        setUsers(data);
        setCurrentPage(page);
        setPerPage(per_page);
        setTotalPages(total_pages);
      });
  }, [currentPage]);

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
            {users &&
              users.map((user) => (
                <tr key={user.id} onClick={handleShow}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Paginate
          page={currentPage}
          totalPages={totalPages}
          onPageChanged={setCurrentPage}
        />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} user={users} rowEvents={rowEvents} />
    </>
  );
};

export default Table;
