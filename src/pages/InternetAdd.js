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


export default function InterneteAdd() {

  const [operators, setOperators]= React.useState([]);

  const [email, setEmail] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [operator, setOperator] = React.useState('')
  const [forfait, setForfait] = React.useState('')
  const [price, setPrice] = React.useState('')

  const forfaits = ['*3', '*6'];

    
  React.useEffect(()=>{
      loadOperator();
  },[])

  const loadOperator = async() =>{
      const result = await axios.get('http://localhost:2022/operator/all')
      console.log(result.data)
      setOperators(result.data)
  }

  const handleCreation = async() =>{
    
    const internet = {email, number, operator, forfait, price}
    await axios.post('http://localhost:2022/Phone-Internet/internet/add',internet)
    console.log(internet)
    alert('internet was create successfully')
    //document.getElementById('reset').click()
  }

  return (
    <Container>
<Paper elevation={3} style={{ width: '50%', margin: '5% auto'}}>
    <Typography variant="h3" gutterBottom>
        Internet
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
        <FormControl sx={{ m: 1, width: '44%' }}>
        <InputLabel id="demo-multiple-name-label">Operator</InputLabel>
        <Select
          value={operator}
          name='operator'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          onChange={(e)=>setOperator(e.target.value)}
          input={<OutlinedInput label="Name" />}
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
      <FormControl sx={{ m: 1, width: '44%' }}>
        <InputLabel id="demo-multiple-name-label">Forfait</InputLabel>
        <Select
          value={forfait}
          name='operator'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          onChange={(e)=>setForfait(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {forfaits.map((forfait, index) => (
            <MenuItem
            
              value={forfait}
            >
              {forfait}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div>
      <TextField id="outlined-basic" label="Email" name="email" value={email} variant="outlined" style={{ width: '90%'}} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <TextField id="outlined-basic" label="Number" value={number} variant="outlined" style={{ width: '44%'}} name='number' onChange={(e)=>setNumber(e.target.value)}/>
      <FormControl fullWidth sx={{ m: 1, width: '44%' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput name='price'
            value={price}
            id="outlined-adornment-amount"
            onChange={(e)=>setPrice(e.target.value)}
            startAdornment={<InputAdornment position="start">DH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      

      <div>
      <Button variant="contained" onClick={handleCreation} sx={{ mt: 3, ml: 40 }}>Save</Button>
      <Button variant="outlined" id='reset' type='reset' color="warning" sx={{ mt: 3, ml: 1 }}>Cancel</Button>
      </div>
      
    </Box>
</Paper>

</Container>
  )
}
