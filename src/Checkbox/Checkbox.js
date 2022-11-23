import{Box,FormControlLabel, Checkbox,FormControl,FormLabel,FormGroup} from '@mui/material';
//import {useState} from 'react'; 
import '../Home/Home.css';
import './checkbox.css';
const Checkbox01 = () => {

    return (
        <Box class='box1'>
        <FormControl>
          <FormLabel></FormLabel>
          <FormGroup>
            <FormControlLabel class='label1'
              control={
                <Checkbox/>
              }
              className='label' label='Learn programming by 12am'
            />
            <FormControlLabel class='label2'
              control={
                <Checkbox/>
              }
              label='Learn how to cook by 1pm'
            />
            <FormControlLabel class='label3'
              control={
                <Checkbox/>
              }
              label='Pick up the kids by 2pm'
            />
             <FormControlLabel  class='label4'
              control={
                <Checkbox/>
              }
              label='have lunch by 3pm' 
            />
             <FormControlLabel class='label5'
              control={
                <Checkbox/>
              }
              label='Go visit mum by 4pm'
            />
          </FormGroup>
        </FormControl>
      </Box>
    )
  };
  export default Checkbox01;