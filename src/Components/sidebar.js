import React, { Component } from 'react';
import {Container,Grid,Button,TextField} from '@mui/material';
import "./sidebar.css"

class Sidebar extends Component {
    state = { 
        isopen: false
     } 

     clickHandler = (e) => {
        this.setState({ isopen: !this.state.isopen });
      
      };

    render() { 
        return (
            <div  >
                <button onClick={this.clickHandler} className='bars'>akjshjkadh</button>
                {this.state.isopen && (
         
            <Grid className='sidebar' Container spacing={2}>
                <Grid item xs={3}>
                    <ul>
                        <li>
                            hamza
                        </li>
                        <li>
                            hamza
                        </li>
                        <li>
                            hamza
                        </li>
                        <li>
                            hamza
                        </li>
                    </ul>
                </Grid>
            </Grid>
                 )}
            </div>
        );
    }
}
 
export default Sidebar;