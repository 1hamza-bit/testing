import React, { Component } from 'react';
import './Hero.css'
import Carousel from 'nuka-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Vid1 from '../video/videos/vid1.mp4';
import ReactPlayer from "react-player";
import {Container,Grid,Button,TextField,Modal,Box,Typography,Switch,
    Select,InputLabel,MenuItem,FormControl,Card,CardContent, FormControlLabel,
  Radio,RadioGroup,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';

 
  const Hero = () => {
    const videoProperties = [
        {
          id: 1,
          title: "Video 1",
          src: Vid1,
          credit: "Video by cottonbro from Pexels",
        },
       
      ];

 
        return (
            <div>
                <Carousel>
               < Grid className='hero' fullWidth style={{padding: "5%", overflow: 'hidden'}} container spacing={6}>
                    <Grid item xs={6}>
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries</p>
                    <h2></h2>
                    </Grid>
                    <Grid item xs={6}>
                    <ReactPlayer style={{width: '84% !important'}}
                url={Vid1}
                pip={true}
                controls={true}
                playing={true}
              />
                    </Grid>

                </Grid> 
        <Grid fullWidth style={{padding: "5%", overflow: 'hidden'}} container spacing={6}>
                    <Grid item xs={6}>
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries</p>
                    <h2></h2>
                    </Grid>
                    <Grid item xs={6}>
                    <ReactPlayer style={{width: '84% !important'}}
                url={Vid1}
                pip={true}
                controls={true}
                playing={true}
              />
                    </Grid>
                </Grid>


        <Grid fullWidth style={{padding: "5%", overflow: 'hidden'}} container spacing={6}>
                    <Grid item xs={6}>
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries</p>
                    <h2></h2>
                    </Grid>
                    <Grid item xs={6}>
                    <ReactPlayer style={{width: '84% !important'}}
                url={Vid1}
                pip={true}
                controls={true}
                playing={true}
              />
                    </Grid>
                </Grid>
        
      </Carousel>
      
        
          
          
                </div>
        );
    }

 
export default Hero;