import {createSlice} from '@reduxjs/toolkit' ;

export interface Iuserdata {
  initialState : any
}

const UserReducer = createSlice({
  // What action do we need in our application....
  name: "user",
  initialState: [],
  reducers: {
    addUser(state: any, action: any) {
      state.push(action.payload);
    },
    removeUser(state: any, action: any) {
        state.splice(action.payload , 1);
    },
    clearAlldata(state, action) {
        return [];
    },
  },

//   we can use extraReducer in our app 
// some same action perform in multiple component that's time we can use it .......

//   extraReducers(builder){
//     builder.addCase(UserReducer.actions.clearAlldata,()=>{
//         return [];
// }); 
//   }

});
// console.log( "This is Example"  , UserReducer) ; 
export default UserReducer.reducer; 
export const { addUser, removeUser, clearAlldata } = UserReducer.actions; ; 


