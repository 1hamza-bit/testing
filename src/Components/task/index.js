import React, { Component } from 'react';

import {Container,Grid,Button,TextField,Modal,Box,Typography,Switch,
  Select,InputLabel,MenuItem,FormControl,Card,CardContent, FormControlLabel,
Radio,RadioGroup} from '@mui/material';
import Forms from '../Form';
import './task.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BoltIcon from '@mui/icons-material/Bolt';
import AddIcon from '@mui/icons-material/Add';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer';
import Hero  from '../Hero/index'
import Items from '../videos';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

class Task extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
          selectedOption: "",
          createTrigger:{
            name:'',
            type:''
          },
          // error: "false",
          // helpertext:"",
          selectedOption2: "",
          setOpen: false,
          setOpen2: false,
          setOpen3: false,
          rows: [],
          rows2: [],
          age: "10"
          
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onValueChange2 = this.onValueChange2.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
      }

      onChange =(event) => {
        this.setState({ age: event.target.value });
      }

   handleOpen = (e) => {
    this.setState({ setOpen: true });
   }

   handleClose = (e) => {
    this.setState({ setOpen: false });
   }

   handleOpen2 = (e) => {
    this.setState({ setOpen2: true });
   }

   handleClose2 = (e) => {
    this.setState({ setOpen2: false });
   }

   handleOpen3 = (e) => {
    this.setState({ setOpen3: true });
   }

   handleClose3 = (e) => {
    this.setState({ setOpen3: false });
   }
    // handleClose = () => setOpen(false);
    
      onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
        // this.setState({
        //   helpertext: ""
        // });
        // this.setState({
        //   error: false
        // });
      }

      onValueChange2(event) {
        this.setState({
          selectedOption2: event.target.value
        });
        this.setState({checked: true})
       
      }
    
      
      formSubmit() {
       
        this.setState({
          isSubmitted: true,
        });
        this.setState({ setOpen: false });
        // if (this.state.isSubmitted === 'true') {
        //   // helpertext('You got it!');
        //   // error(false);
        // } else  (this.state.isSubmitted === 'true');  {
        //   // helpertext('Sorry, wrong answer!');
        //   // error(true);
        // }
        console.log(this.state.selectedOption)
      };

      handleAddRow = () => {
        const item = {
          name: "",
          operator: "",
          type: ""
        };
        
        this.setState({
          rows: [...this.state.rows, item]
        });
      };
      handleAddRow2 = () => {
        console.log(this.state.selectedOption2)
        const action = {
            name: "",
            
        };
        this.setState({
          rows2: [...this.state.rows2, action]
        });
        this.setState({ setOpen3: false });
      };

      handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };
    
      handleRemoveSpecificRow = (index) => {
        let { rows } = this.state
        rows[index]['type'] = "remove"
        this.setState({ rows: rows })
      }

      handleRemoveSpecificRow2 = (index) => {
        let { rows2 } = this.state
        rows2[index]['type'] = "remove"
        this.setState({ rows2: rows2 })
      }
    
     
    
      handleUpadte = (key, value, index) => {
        let { rows } = this.state
        rows[index][key] = value
        this.setState({
          rows: rows
        })
      }

      handleUpdate = (key, value, index) => {
        let { rows } = this.state
        rows[index][key] = value
        this.setState({
          rows: rows
        })
      }
    render() { 
        return (
            <div>
              
            <Navbar />
            <Hero />
            <h1>Videos</h1>
            <Items />
            <h1>Screenplays</h1>
            <Items />
            <h1>Digital magazines</h1>
            <Items />
            <h3>task</h3>
            <Grid className='sider' container spacing={4}>
                <Grid item xs={3}>
                <h3>Update flow</h3>
                <TextField fullWidth label="fullWidth" variant="filled" id="filled-fullWidth" />
    
                <TextField 
                fullWidth
                className='textarea'
                  id="filled-multiline"
                  label="Message"
                  name="message"
                  multiline
                  maxRows={6}
                  variant="filled"
                  margin="normal"
                ></TextField>
                <div style={{display:"flex"}}>
                <h5 >Status <Switch {...label} defaultChecked /></h5>
               
                </div>
                </Grid>




                <Grid className='center' justifyContent="center"
  alignItems="center" item xs={5}>
                <div className='form' >
      
        <div>
         <p style={{display: "flex", padding: "2%" }}> <BoltIcon style={{ paddingRight: "2%" }} /> Triggor</p> 
        </div>
        <hr />
        <>
        <h5>{this.state.isSubmitted   ?<div style={{justifyContent: "space-between", display: "flex"}}>
           <h3>{this.state.selectedOption}</h3>
  
       <Button className='pen'
        onClick={this.handleOpen}><BorderColorIcon color='primary' /></Button></div>  :
         <Button fullWidth variant='contained' onClick={this.handleOpen} color='primary' >Add radio buttton</Button>}
       </h5>
        </>
      </div>

      <p style={{display: "flex", paddingTop: "5%", alignItems: "center"}}>This should meet the following conditions 
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.age}
          label="Age"
          onChange={this.onChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </p>
        
      
      <Modal
        open={this.state.setOpen}
        onClose={this.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
          <div className="radio">
          
          <label>
            <input
              type="radio"
              value="Cancel Order"
              checked={this.state.selectedOption === "Cancel Order"}
              onChange={this.onValueChange}
             
            />
          cancel order
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Update"
              checked={this.state.selectedOption === "Update"}
              onChange={this.onValueChange}
            />
           Update
          </label>
        </div>
       
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Delete"
              checked={this.state.selectedOption === "Delete"}
              onChange={this.onValueChange}
            />
            Delete
          </label>
          
        </div>
        <Button onClick={this.formSubmit}>Submit</Button>
      
        
          </Typography>
       
        </Box>
      </Modal>
                <br/>

                {this.state.rows.map((condition, index) =>
                condition.type !== "remove" &&
              <>
                <form className='form' onSubmit={this.formSubmit}>
      
        <div>
       
         <p style={{display: "flex", padding: "2%", justifyContent:"space-around" }}> <BoltIcon style={{ paddingRight: "2%" }} /> 
         {condition.name}:--  <b> {condition.operator}</b> 
        </p>
         </div>
      </form>
      </>
            )}
      <p style={{ display: "flex", justifyContent:"space-around" }}>
      <Button style={{marginTop:" 5%"}} variant='contained' onClick={this.handleOpen2}>
          <AddIcon style={{padding: "2%", marginTop: "-2%"}}/>Condition</Button></p>
          <br/>
          <br/>
          {this.state.rows2.map((condition, index) =>
              condition.type !== "remove" &&
              <>
         
          <form className='form' onSubmit={this.formSubmit}>
      
      <div style={{display: "flex", padding: "2%", justifyContent:"space-between" }}>
     
       <p > <BoltIcon style={{ paddingRight: "2%" }} /> 
       
 <p>{this.state.selectedOption2}  </p><b> </b> 
      </p>
      <Button className="btn btn-outline-danger"
        onClick={() => this.handleRemoveSpecificRow2(index)}><CancelPresentationIcon color='primary' /></Button>
       </div>
    </form>
    </> )}
    <p style={{ display: "flex", justifyContent:"space-around" }}>
    <Button style={{marginTop:" 5%", background: "darkcyan"}} variant='contained' onClick={this.handleOpen3}>
        <AddIcon style={{padding: "2%", marginTop: "-2%"}}/>Action</Button></p>
             <Modal
                open={this.state.setOpen2}
                onClose={this.handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                  <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Container maxWidth="lg">
          
          <Button color='primary' variant='contained'
            onClick={this.handleAddRow}
            // className="btn btn-default pull-left"
          >
            Add Row
          </Button>
           
          {/* <Sidebar /> */}

          <Grid container direction="column" spacing={3}>
            {this.state.rows.map((condition, index) =>
              condition.type !== "remove" &&
              <>
              

                <Grid item key={index}>
                  <Grid container direction="row" spacing={3}>
                    
                    <Grid item>
                      <TextField id="standard-basic" name="name" label="Standard" variant="standard" value={condition.name} onChange={(e) => this.handleUpadte("name", e.target.value, index)} />
                    </Grid>
                    <Grid item>
                      <TextField id="standard-basic" name="operator" label="Standard" variant="standard" value={condition.operator} onChange={(e) => this.handleUpadte("operator", e.target.value, index)} />
                    </Grid>
                    <Grid item>
                      {/* delete icon */}
                      <Button className="btn btn-outline-danger"
        onClick={() => this.handleRemoveSpecificRow(index)}><CancelPresentationIcon color='primary' /></Button>
                    </Grid>
           

                  </Grid>
                 
                </Grid>
                

              </>
            )}

          </Grid>

        


        </Container >


          </Typography>
        </Box>


            </Modal>

            <Modal
                open={this.state.setOpen3}
                onClose={this.handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                  <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {this.state.isSubmitted   ?
          <p>Actions of the {this.state.selectedOption}</p>:<> <p style={{color: "red"}}>First select the radio Button</p>
           </>}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Container maxWidth="lg">

{
this.state.selectedOption === "Cancel Order"
  ? 
  <>
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
  <div className="radio">
  <label>
    <FormControlLabel
      control={<Radio />}
      value="Action 1"
      checked={this.state.selectedOption2 === "Action 1"}
      onChange={this.onValueChange2}
     
    />
  Action 1
  </label>
</div>

<div className="radio">
  <label>
    <FormControlLabel
      control={<Radio />}
      value="Action 2"
      checked={this.state.selectedOption2 === "Action 2"}
      onChange={this.onValueChange2}
      
    />
  Action 2
  </label>
</div>
</RadioGroup>
</>
  :
  this.state.selectedOption === "Update"
  ?
  <>
  <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
  <div className="radio">
  <label>
    <FormControlLabel
      control={<Radio />}
      value="Action 3"
      checked={this.state.selectedOption2 === "Action 3"}
      onChange={this.onValueChange2}
      
    />
  Action 3
  </label>
</div>

<div className="radio">
  <label>
    <FormControlLabel
      control={<Radio />}
      value="Action 4"
      checked={this.state.selectedOption2 === "Action 4"}
      onChange={this.onValueChange2}
      
    />
  Action 4
  </label>
</div>
</RadioGroup></>
  :
  this.state.selectedOption === "Delete"
  ?
  <>
 <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
  <div className="radio">
  <label>
    <FormControlLabel
      control={<Radio />}
      value="Action 5"
      checked={this.state.selectedOption2 === "Action 5"}
      onChange={this.onValueChange2}
     
    />
  Action 5
  </label>
</div>

<div className="radio">
  <label>
    <FormControlLabel
      control={<Radio />}
      value="Action 6"
      checked={this.state.selectedOption2 === "Action 6"}
      onChange={this.onValueChange2}
     
    />
  Action 6
  </label>
</div>
s

</RadioGroup></>
  
  :
  <p> default </p>}
        {this.state.checked ?<Button variant='contained' color='primary'  onClick={this.handleAddRow2} 
type="submit" >Submit</Button>: null}
    
          {/* <Sidebar /> */}

         
        </Container >


          </Typography>
        </Box>


            </Modal>
            
            
            </Grid>
         </Grid>
         <Footer />
            </div>
        );
    }
}
 
export default Task;