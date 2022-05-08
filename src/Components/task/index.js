import React, { Component } from 'react';

import {Container,Grid,Button,TextField,Modal,Box,Typography,Switch,
  Select,InputLabel,MenuItem,FormControl,Card,CardContent, FormControlLabel,
Radio,RadioGroup} from '@mui/material';

import './task.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BoltIcon from '@mui/icons-material/Bolt';
import AddIcon from '@mui/icons-material/Add';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer';
import Hero  from '../Hero/index'
import Items from '../videos';
import Item from '../videos/vidcard';

class Task extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
         
        };
      }
    render() { 
        return (
            <div>
              
            <Navbar />
            <Hero />
            <h1>Videos</h1>
            <Item />
          
            <h1>Digital magazines</h1>
            <Items />
            <hr />
            <Grid container style={{justifyContent: "center", padding:"5%"}}>
              <Grid item sm={4}>
            <Button fullWidth variant='contained'>
              Discover screenaplays

            </Button>
            </Grid>
            </Grid>

            <hr />
          
         
         <Footer />
            </div>
        );
    }
}
 
export default Task;