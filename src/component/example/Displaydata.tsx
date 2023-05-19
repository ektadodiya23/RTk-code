import { Box, Button, TableCell, TableRow } from '@mui/material';
import React from 'react'

import { useAppSelector , useAppDispatch } from '../store/Store';
import { removeUser } from '../store/reducer/UserReducer';

export default function Displaydata() {

    const dispatch = useAppDispatch();

    const data = useAppSelector((state: any) => {
      return state.users;
    });

    const handleRemove = (id:any) => {
      dispatch(removeUser(id));
    };

  return (
    <>
      {data.map((userData: string, id: React.Key | null | undefined) => {
        return (
          <TableRow
            key={id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {userData}
            </TableCell>
            <TableCell component="th" scope="row">
              <Button onClick={()=>handleRemove(id)}>Remove</Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
