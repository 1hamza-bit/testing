import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import {Container,Grid,Button,TextField} from '@mui/material';
import "./contact.css"
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from '../sidebar';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pcssil6', 'template_3ng8q5e', form.current, 'n3qer8CLU8cFRZJ1n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (

    <Container maxWidth="lg">
      <Sidebar />
      <Grid container spacing={2} style={{color: "white", border: "1px solid black",
   margin: "auto", padding: "5px",
    backgroundImage: "url(https://static.wixstatic.com/media/6c6ba7_20c2acd8c15e4ae3bf7cc925e396edb3~mv2.jpg/v1/fill/w_770,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contact-form-background.jpg)",
    backgroundRepeat  : 'no-repeat', backgroundSize: 'cover'}}
    >
     <Grid item xs={12}>
       <h1>CONTACT US</h1>
       <hr/>
       </Grid>
        <Grid item xs={6}>
  
    <form ref={form} onSubmit={sendEmail}>
    <Grid item xs={12}>
    
      <TextField fullWidth style={ {
    background: "rgb(80 80 80 / 80%)"}}
      type="text" name="name" id="filled-basic" label="Name" variant="filled"
       />
      </Grid>
      <Grid item xs={12}>
    
      <TextField style={ {
    background: "rgb(80 80 80 / 80%)"}}  fullWidth type="email" name="email" id="standard-basic" 
      label="Email" variant="filled" margin="normal"

   />

      </Grid>
      <Grid item xs={12}>
     
      <TextField fullWidth
          id="standard-multiline-flexible"
          label="Message"
          name="message"
          multiline
          maxRows={4}
          variant="filled"
          margin="normal"
          style={ {
            background: "rgb(80 80 80 / 80%)"}}
        />
      </Grid>
      
      <Button type="submit" value="Send" variant="outlined">submit</Button>
    </form>
    </Grid>
    <Grid item xs={6}>
      <ul>
            <li><i className="fa fa-phone-square">..</i>PHONE NO</li>
            <p>9372859797</p>
            <br />
            <li>PHONE NO</li>
            <p>9372859797</p>
            <br />
            <li>PHONE NO</li>
            <p>9372859797</p>
            <br />
      </ul>
    </Grid>
    </Grid>
    <br/>
    <Grid container spacing={2} style={{}}
    >
    <Grid style={{overflow:"hidden"}} item xs={6}>
  
            <img  src=" https://static.wixstatic.com/media/6c6ba7_20c2acd8c15e4ae3bf7cc925e396edb3~mv2.jpg/v1/fill/w_770,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contact-form-background.jpg"/>
      </Grid>

      <Grid item xs={6}>
  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h3>
</Grid>
</Grid>

<br/>
    <Grid container spacing={2} style={{}}
    >
         <Grid item xs={4}>
  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h3>
</Grid>
    <Grid style={{overflow:"hidden"}} item xs={4}>
  
            <img  src=" https://static.wixstatic.com/media/6c6ba7_20c2acd8c15e4ae3bf7cc925e396edb3~mv2.jpg/v1/fill/w_770,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contact-form-background.jpg"/>
      </Grid>

      <Grid item xs={4}>
  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h3>
</Grid>
</Grid>
    </Container>
  );
};
export default ContactUs;