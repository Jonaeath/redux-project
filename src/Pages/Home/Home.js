import React from "react";
import { useSelector } from "react-redux";

const Home = () => {

    const users = useSelector((state) => state.users);
    console.log(users)

  return (
    <div className="container">
      <h1>This is Redux Project</h1>
      <button className="btn btn-success my-3"> Create + </button>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default Home;
