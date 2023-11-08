import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../ReduxFile/UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelSubmit = (event) =>{
        event.preventDefault();
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1; 
        //  Improve ID generation logic
        dispatch(addUser({ id: newId, name, email }));
        navigate('/');
    }

  return (
    <div className="d-flex w-100 justify-content-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1>Add New User</h1>
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder="Enter your Name" className="form-control"
            value={name} 
            onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className="pb-3 pt-2">
            <label htmlFor="email">Email address</label>
            <input type="text" name='email' placeholder="Enter email" className="form-control" 
            value={email}
             onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
