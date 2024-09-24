import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';

import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

import NAVBAR from './navbar';
import { useNavigate } from 'react-router-dom';
import './App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <div>

    <NAVBAR/>

    <br/>
<Button className="btn" onClick={() => navigate(-1)}  variant="contained">
				Go Back
			</Button>
			<br/>
			
			<br/>
<br/>
   
    <Box
      sx={{ flexGrow: 1, bgcolor: 'LavenderBlush', display: 'flex', height: 424 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Acute Cholecystitis" {...a11yProps(0)} />
        <Tab label="Osteoporosis" {...a11yProps(1)} />
        <Tab label="Iron Deficiency Anemia" {...a11yProps(2)} />
        <Tab label="Hyperglycaemia" {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} index={0}>
         

         <Typography gutterBottom variant="h5" component="div">
         Acute Cholecystitis
        </Typography>

        

        <Card sx={{ minWidth: 275 }}>
        <CardContent>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p align="left">Swelling/inflammation occurs in the gallbladder because of improper ability in emptying
                the gallbladder or blockage of the cystic duct.</p>
                <p align="left">
                Symptoms: Pain in the upper right abdomen to shoulders, nausea and vomiting,
                jaundice, high temperature, sweating.</p>
                <p align="left">Treatments: Laparoscopic cholecystectomy, bowel rest, antibiotics, analgesia.</p>
            </Typography>



           
            <br />
           
            
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography gutterBottom variant="h5" component="div">
         Osteoporosis
        </Typography>

        

        <Card sx={{ minWidth: 275 }}>
        <CardContent>


            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p align="left">Low bone mass and deterioration of bone tissue making bones fragile due to numerous causes including cacium deficiency, estrogen deficiency, or lack of exercise.</p>
                <p align="left">
                Symptoms: Receding gums, bone mass loss in jaw, fracturing from short heights, decreased grip ability, brittle fingernails, and stooped posture.</p>
                <p align="left">Treatments: Medication (bisphosphonate pills), parathyroid harmone treatement, denosumab.</p>
            </Typography>

           
           
            <br />
           
            
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>

      </TabPanel>
      
      <TabPanel value={value} index={2}>
      <Typography gutterBottom variant="h5" component="div">
      Iron Deficiency Anemia
        </Typography>

        

        <Card sx={{ minWidth: 275 }}>
        <CardContent>


            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p align="left">Blood lacks healthy red blood cells and hemoglobin.</p>
                <p align="left">
                Symptoms: Jaundice, fatigue, chest pain, shortness of breath, headache and general weakness.</p>
                <p align="left">Treatments: Iron-rich diet, iron supplements, intervenous iron.</p>
            </Typography>


           
            <br />
           
            
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography gutterBottom variant="h5" component="div">
      Hyperglycaemia
        </Typography>

        

        <Card sx={{ minWidth: 275 }}>
        <CardContent>


            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p align="left">High blood glucose (pressure) from too little insulin or inability to use insulin in the body properly.</p>
                <p align="left">
                Symptoms: Dry mouth, weight loss, blurry vision, and tiredness.</p>
                <p align="left">Treatments: Insulin therapy, electrolyte replacement.</p>
            </Typography>


           
            <br />
           
            
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </TabPanel>

    </Box>
    </div>
  );
}
