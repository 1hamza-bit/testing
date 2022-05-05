import React, { Component } from 'react';
import {Container,Grid,Button,TextField,Tab,Tabs} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./ui.css"
import Sidebar from './sidebar';

class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0,
    name: "hamza",
    name2: "haider",
    name3: "usama",
    phone: "32524546436",
    phone2: "032524546436",
    phone3: "003874387",
    isopen: false,
    isopen2: false,
    ActiveText: "",
    li: [""] ,
    rows: []
  };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange = event => {
    this.setState({ phone: event.target.value });

  }
  onReset = (event) => {
    console.log('sdhs');
    event.preventDefault();
    const phone = this.state.phone;
    this.setState({ phone: '' });
    console.log(phone);

  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.phone === "") {
      alert("Please enter a task");
    this.setState({
      isSubmitted: true,
    });
    console.log(this.state.phone);
  };
  }
  handleChange = (e, newValue) => {
    this.setState({ value: newValue });
   
  };

  handleChange2(e) {
    this.setState({
      ActiveText: e.target.value
    });
  }

  clickHandler = (e) => {
    this.setState({ isopen: !this.state.isopen });
  
  };
  clickHandler2 = (e) => {
    
    this.setState({ isopen2: !this.state.isopen2 });
  };

  handleOnClick(e) {
    e.preventDefault();
    this.setState({
      li: [
        ...this.state.li
        , 
        this.state.ActiveText 
      ]
    });
  }
  handleDelete(e) {
    e.preventDefault();
    this.setState({
      li: this.state.li.slice (0,-1)
      
    });
  }
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    
    this.setState({
      rows
    });
  };
  onSubmit = event => {
    const { name } = this.state;
    event.preventDefault();
    console.log(name);
}
  handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };

  render() {
    const list = this.state.li;
        return (
            <Container maxWidth="lg">
            
            <Grid container spacing={2}>
              
            <Sidebar />
              <Grid item xs={4}  className='tab'>
            
                <div style={{padding: "5%", margin: "auto", marginTop: "5%", 
                background: "rgb(36,29,153)",
                background: "linear-gradient(90deg, rgba(36,29,153,1) 0%, rgba(51,51,179,1) 49%, rgba(75,120,223,1) 100%)",
              color: "white"}}>
                <h1>Hamza Tahir</h1>
                <h3>Customer from past 10 days</h3>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="basic tabs example"
          >
            <Tab  label="Item One" />
            <Tab  label="Item Two" />
            <Tab  label="Item Three" />
          </Tabs>
        </Box>
        </div>
        {this.state.value === 0 &&
         <div>
             <Grid className='tabe' container spacing={2}><Grid item xs={4} className='tab'><b >Name</b></Grid>
             <Grid item xs={8} className='tab'><p > {this.state.name}</p>
             {this.state.isopen && (
          <div>
            <p>{this.state.name2}</p>
            <p>{this.state.name3}</p>
          </div>
        )}
        <a className='handler'  onClick={this.clickHandler}>
          {this.state.isopen ? "Close" : "Open"}
        </a></Grid>

             <Grid item xs={4} className='tab'><b >tab one</b></Grid>
             <Grid item xs={8} className='tab'><p > one</p></Grid>

             <Grid item xs={4} className='tab'><b >Phone number</b></Grid>
             <form onSubmit={this.handleSubmit}>
             <TextField id="standard-basic" variant="standard" onChange={this.onChange} value={this.state.phone}></TextField>
             </form>
             <button onClick={this.onReset}>Reset</button>
             {this.state.isSubmitted && <h1>{this.state.phone}</h1>}
             <Grid item xs={8} className='tab'><p > {this.state.phone}</p>
             {this.state.isopen2 && (
          <div>
            <p>{this.state.phone2}</p>
            <p>{this.state.phone3}</p>
          </div>
        )}
        <a className='handler'  onClick={this.clickHandler2}>
          {this.state.isopen2 ? "Close" : "Open"}
        </a></Grid>
             
             <Grid item xs={4} className='tab'><b >tab one</b></Grid>
             <Grid item xs={8} className='tab'><p > one</p></Grid>

             <Grid item xs={4} className='tab'><b >tab one</b></Grid>
             <Grid item xs={8} className='tab'><p > one</p></Grid>
       </Grid>      
      </div>}
        {this.state.value === 1 && 
        
        <div>
         
        <button onClick={this.handleOnClick}>Add to list</button>

        <ul>
          {list.map(e => (
            <li><TextField style={{marginRight: "1%"}} id="standard-basic" label="Standard" variant="standard" />
             <TextField id="standard-basic" label="Standard" variant="standard" /></li>
          ))}
        </ul></div>}
        {this.state.value === 2 && <h1>tab three</h1>}
          
        
        
   
        </Grid>
        <Grid item xs={7}  className='tab'>
        <div>
         
         <button onClick={this.handleOnClick}>Add to list</button>
 
         <ul>
           {list.map(e => (
             
               <Grid Container spacing={1}><TextField style={{marginRight: "1%"}} id="standard-basic" label="Standard" variant="standard" />
            <TextField style={{marginRight: "1%"}} id="standard-basic" label="Standard" variant="standard" />
              <TextField id="standard-basic" label="Standard" variant="standard" /> <button onClick={this.handleDelete}>delete</button>
              </Grid>
           ))}
           {this.state.rows.map((item) =>(
            <Grid Container spacing={1}><form onSubmit={this.onSubmit}><TextField style={{marginRight: "1%"}} id="standard-basic" label="Standard" variant="standard" />
            <TextField onChange={this.handleChange} style={{marginRight: "1%"}} id="standard-basic" label="Standard" variant="standard" />
              <TextField id="standard-basic" label="Standard" variant="standard" /> </form> <button onClick={this.handleDelete}>delete</button>
              </Grid>
             ))} 
         </ul>
         <button
                onClick={this.handleAddRow}
                className="btn btn-default pull-left"
              >
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="pull-right btn btn-default"
              >
                Delete Row
              </button></div>
        </Grid></Grid>

                </Container>

        );
    }

  }
export default UI;