import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { Paper, Button, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


export default function PhoneAdd() {

    const [operators, setOperators]= React.useState([]);
   

    
    React.useEffect(()=>{
        loadOperator();
    },[])


    const [email, setEmail] = React.useState('')
    const [operator, setOperator] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [number, setNumber] = React.useState('')



    const loadOperator = async() =>{
        const result = await axios.get('http://localhost:2022/operator/all')
        console.log(result.data)
        setOperators(result.data)
    }

    const handleCreation = async() => {
      const phone = {email, number, amount, operator}
      console.log(phone)    
      await axios.post('http://localhost:2022/Phone-Internet/phone/add',phone)  
      alert('phone created')
    }

  return (
    /**<div style={{ padding: 70}}>
<table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Number</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {
        phones.map((phone, index) => (
            <tr>
        <th scope="row">{index+1}</th>
                <td>{phone.date}</td>
                <td>{phone.number}</td>
                <td>{phone.price} DH</td>
        </tr>

        ))
    }
        
  </tbody>
</table>
</div>*/
<Container>
<Paper elevation={3} style={{ width: '50%', margin: '5% auto'}}>
    <Typography variant="h3" gutterBottom>
        Phone minutes
      </Typography>
    <Box
      component="form"
      method='GET'
      action='/Phone-Internet/phone/add'
      sx={{padding: 4, 
        '& .MuiTextField-root': { m: 1 }
      }}
      noValidate
      autoComplete="off"
      >
        <div>
        <FormControl sx={{ m: 1, width: '90%' }}>
        <InputLabel id="demo-multiple-name-label">Operator</InputLabel>
        <Select
          name='operator'
          value={operator}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          onChange={(e)=>setOperator(e.target.value)}
          input={<OutlinedInput label="Name" 
          />}
        >
          {operators.map((operator, index) => (
            <MenuItem
            
              value={operator}
            >
              {operator.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div>
      <TextField id="outlined-basic" label="Email" name="email" variant="outlined" value={email} style={{ width: '90%'}} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <TextField id="outlined-basic" label="Number" value={number} variant="outlined" style={{ width: '44%'}} name='number' onChange={(e)=>setNumber(e.target.value)}/>
      <FormControl fullWidth sx={{ m: 1, width: '44%' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput name='amount'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">DH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      

      <div>
      <Button variant="contained" onClick={handleCreation} sx={{ mt: 3, ml: 40 }}>Save</Button>
      <Button variant="outlined" type='reset' color="warning" sx={{ mt: 3, ml: 1 }}>Cancel</Button>
      </div>
      
    </Box>
</Paper>

</Container>
  )
}
