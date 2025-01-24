import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
const inCount = () => 
    setCount(++count);
const deCount = () => 
    setCount(--count);
    return(
    <div>
      <Typography variant="h3">Counter</Typography>
      <Typography variant='h2'>{count}</Typography>
      <Button variant="contained" onClick={inCount}>+</Button> &nbsp;
      <Button variant="contained" onClick={deCount}>-</Button>

    </div>
    )
}

export default Counter
