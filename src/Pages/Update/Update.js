import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { updateUsers } from '../../ReduxFile/UserReducer';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(user => user.id === parseInt(id));
    const {name, email} = existingUser[0]
    const [updateName, setName] = useState(name);
    const [updateEmail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(users && id){
    //         const existingUser = users.find(user => user.id === parseInt(id));
    //         console.log('existingUser', existingUser)
    //         if(existingUser){
    //             const { name, email } = existingUser;
    //             setEmail(email)
    //             setName(name)
    //         }
    //     }
    // },[users, id])
   

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUsers({
            id: parseInt(id),
            name: updateName,
            email: updateEmail
        }));
        navigate('/')
    }

    return (
        <div className="d-flex w-100 justify-content-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h1>Update User</h1>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter your Name"
                            className="form-control"
                            value={updateName}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="pb-3 pt-2">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            name='email'
                            placeholder="Enter email"
                            className="form-control"
                            value={updateEmail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update Done
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
