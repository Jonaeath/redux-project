import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";



const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser: (state, action) =>{
            state.push(action.payload)
        },

        updateUsers: (state, action) =>{
            const { id, name, email} = action.payload;
            const userUpdate = state.find(user => user.id === id);
            if(userUpdate){
                userUpdate.name = name;
                userUpdate.email = email;
            }

        }

    } 
})

export const {addUser, updateUsers} = userSlice.actions;
export default userSlice.reducer;