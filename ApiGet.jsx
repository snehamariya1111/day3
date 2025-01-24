import { getListItemSecondaryActionClassesUtilityClass, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var[data,setData]=useState([])
    // axios.get("url").then().catch();
    // useEffect(()=>(axios.get).[])
    useEffect (() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);

        })
        .catch((err)=>console.log(err));
      })



  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                
                <TableRow>
            <TableCell>name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>city</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.address.city}</TableCell>


                        </TableRow>
                    )
                })}
                    
                </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ApiGet
