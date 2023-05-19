 import {configureStore} from '@reduxjs/toolkit' ;
import UserReducer from './reducer/UserReducer';
import { TypedUseSelectorHook, useDispatch , useSelector } from 'react-redux';


const Store = configureStore ({
  reducer : {
    users : UserReducer, 
  },
}) ; 

// "RootState" & "AppDispatch" types from the store itself
export default Store; 
export type AppDispatch = typeof Store.dispatch
export type RootState = ReturnType<typeof Store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector ; 