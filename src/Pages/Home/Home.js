import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../ReduxFile/UserReducer";

const Home = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handelDelete =(id)=>{
      dispatch(deleteUser({id: id}))

    }

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
            <button onClick={()=> handelDelete(user.id)} className="btn btn-danger ms-2"> Delete </button>
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
