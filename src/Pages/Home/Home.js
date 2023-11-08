import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {

    const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <h1>This is Redux Project</h1>
      <Link to = "/create"><button className="btn btn-success my-3"> Create + </button></Link>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
        {users.map((user,i)=>(
          <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            <Link to = {`/update/${user.id}`}><button className="btn btn-info"> Edit </button></Link>
            <button className="btn btn-danger ms-2"> Delete </button>
          </td>
          </tr>

          )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
