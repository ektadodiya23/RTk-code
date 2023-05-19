import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fakeUserdata } from '../api/Userapi';
import { useAppDispatch } from '../store/Store';
import { addUser, clearAlldata } from "../store/reducer/UserReducer";
import Displaydata from './Displaydata';



export default function Admintable() {

  const dispatch = useAppDispatch();

  const addNewuser = (payload: any) => {
   console.log(payload);
   dispatch(addUser(payload));
  }

  const deleteAlluser = (id: any) =>{
    console.log("data");
      dispatch(clearAlldata(id));
  }

  return (
    <div>
      <Box
        sx={{ mt: "4%", borderBottom: "1px solid white" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" sx={{ ml: "3%" }}>
          List of user Details
        </Typography>
        <Button
          onClick={() => addNewuser(fakeUserdata())}
          variant="contained"
          sx={{ bgcolor: "#00b0ff", color: "white", mr: "3%", mb: "3%" }}
        >
          Add new user
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ width: "70%", ml: "15%", mt: "3%" }}
      >
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell sx={{pl:"5%"}}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           <Displaydata />
          </TableBody>
        </Table>
      </TableContainer>
      <Button
      onClick={deleteAlluser}
        variant="contained"
        sx={{
          bgcolor: "#00b0ff",
          color: "white",
          mb: "3%",
          ml: "40%",
          mt: "3%",
        }}
      >
        Clear all user
      </Button>
    </div>
  );
}
