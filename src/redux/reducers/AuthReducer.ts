import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Iuser } from "../../types";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null
let initailState : Iuser  ;
if(user){
    initailState = user
}else{
    initailState = {
        userId:  null,
        username:  null,
        loading: false,
        error: null,
    };
}


const fakeAPI = async (username: string ,password: string): Promise<{userId : string}> =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username === "admin" && password === "1234" ){
                return resolve({userId : '11'})
            }else{
                return reject("User Dosen't Exist")
            }
        },3000)
    })
}

export const LoginIn = createAsyncThunk(
    'auth/loginuser',
    async (payload:{username:string,password:string},{rejectWithValue})=>{
        try{
            const respose = await fakeAPI(payload.username,payload.password)
            return {userId : respose.userId , username : payload.username}
        }catch(err){
            return rejectWithValue(err)
        }
    }
)

export const authReducer = createSlice({
    name: "auth",
    initialState : initailState,
    reducers:{
        logout(state : Iuser){
            state.userId = null;
            state.username = null;
            state.error = null;
           
            localStorage.setItem("user",JSON.stringify(state));
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(LoginIn.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(LoginIn.fulfilled,(state, action)=>{
            state.loading = false;
            state.userId = action.payload.userId ;
            state.username = action.payload.username ;
            state.error = null;
            localStorage.setItem("user",JSON.stringify(state));
        })
        .addCase(LoginIn.rejected,(state , action )=>{
            state.loading = false;
            state.error = action.payload as string || "Failed To Login"
        })
    }
})

export const authActions = authReducer.actions

