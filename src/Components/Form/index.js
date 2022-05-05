import React, { Component } from 'react';
import { Container, Grid, Button, TextField, Tab, Tabs,Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Sidebar from '../sidebar';
import DeleteIcon from '@mui/icons-material/Delete';
import './form.css'

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      inputText: "",
      inputText1: "",
      phone: "", 
    }
  };

  onChange = event => {
    this.setState({ inputText: event.target.value });

  }

  on1Change = event => {
    this.setState({ inputText1: event.target.value });

  }


  onSubmit = event => {
    event.preventDefault();
    console.log();
  }

  handleAddRow = () => {
    let {rows} = this.state
    let item = {
      name: "",
      operator: "",
      type: ""
    };
    rows.push(item)
    this.setState({
      // rows: [...this.state.rows, item]
      rows: rows
    });
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

 

  handleUpadte = (key, value, index,event) => {
    let { rows } = this.state
    rows[index][key] = value
    this.setState({
      rows: rows
    })
    
  }


  render() {

    return (
      <div>

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
                      <button className="btn btn-outline-danger"
                        onClick={() => this.handleRemoveSpecificRow(index)}>x</button>
                    </Grid>
           

                  </Grid>
                 
                </Grid>
                

              </>
            )}

          </Grid>

          {this.state.rows.map((condition, index) =>
              condition.type !== "remove" &&
              <>
         

                <Grid item key={index}>
                  <Grid container direction="row" spacing={3}>
                    
                
                    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      
        <Typography variant="body2">
        name: {condition.name}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      
    </Card>

                  </Grid>
                 
                </Grid>
                

              </>
            )}


        </Container >

      </div >
    );
  }
}

export default Forms;