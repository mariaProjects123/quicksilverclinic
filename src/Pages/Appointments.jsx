
import './App.css';

import * as React from 'react';

import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NAVBAR from './navbar';
import { useNavigate } from 'react-router-dom';


function Appointments() {

  const navigate = useNavigate();

  return (
    <div >
<NAVBAR/>

			<br/>
<Button className="btn" onClick={() => navigate(-1)}  variant="contained">
				Go Back
			</Button>
			<br/>
			
			<br/>
<br/>
<p><h3>Patient:</h3>
<TextField fullWidth id="username" label="Name" variant="outlined" /></p>

<p><h3>Doctor:</h3> <TextField fullWidth id="Doctor" label="Doctor" variant="outlined" /></p>
<p><h3>Date:</h3> <TextField fullWidth id="Date" label="Date" variant="outlined" /></p>
      
      <Scheduler events={EVENTS} />



    </div>
  );
}

export default Appointments;
