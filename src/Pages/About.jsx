import { useNavigate } from 'react-router-dom';

import logo from '../qs_logo.png';
import groupofdocs from '../group_of_doctors.jpg'
import calendar from '../calendar.png';
import clinic from '../Clinic.png';
import groupofdoc from '../group_of_doctors.jpg';
import contact from '../contact_us.png';
import './App.css';

import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NAVBAR from './navbar';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			

			<NAVBAR/>

			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<br/>

			<br/>
			<CssBaseline />
          <Container maxWidth="sm">
		    <img src={groupofdocs} alt="group_of_doctors" />
            <Card sx={{ maxWidth: 612 }}>
              <CardMedia
              sx={{ height: 19 }}
              image="./group_of_doctors.jpg"
              title="groupofdoc"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Health facilities’ software pertaining to the management of patients and digital resources is inefficient and bombarding. Limited receptionists in health facilities are struggling to take care of patients’ appointments and records. Quicksilver Clinic Software will mitigate this problem to ease the process for both health receptionists and adult patients at our Mississauga locations through a separate interface for patients. Patients have access to easy-to-sign-up appointments, regularly updated healthcare data and informative health information; for healthcare receptionists to access patient data.

                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

			<Typography variant="h5" component="h3" marginTop={5}>
            

				How It Works:
			</Typography>
			
          </Container>

		  
        
          
            <Timeline position="alternate">
			<TimelineItem>
				<TimelineSeparator>
				<TimelineDot variant="outlined" />
				<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Register</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
				<TimelineDot variant="outlined" color="info" />
				<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Create Profile</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
				<TimelineDot variant="outlined" color="secondary" />
				<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Book Appointments</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
				<TimelineDot variant="outlined" />
				</TimelineSeparator>
				<TimelineContent>Medical Information</TimelineContent>
			</TimelineItem>
			</Timeline>



		</div>
	);
};

export default About;
