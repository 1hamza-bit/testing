import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Footer from '../Components/HEADER_FOOTER/Header_footer/Footer';

import Header from '../Components/HEADER_FOOTER/Header_footer/Header';
import Search from '../Components/HEADER_FOOTER/Search';
import Contactus from '../Components/HEADER_FOOTER/Contactus';
import axios from 'axios' 
import ImageList from '../Components/HEADER_FOOTER/Header_footer/ImageList';
import UI from '../Components/ui';
import { Form } from 'react-bootstrap';
import Forms from '../Components/Form';

const styles = {
  height: 300,
  backgroundImage: `url(${"https://blog.prezi.com/wp-content/uploads/2019/03/water_ripple-1024x683.jpg"})`
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images:[]}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
      console.log(entry)
     const response = await axios.get(`https://pixabay.com/api/?key=26412237-b3cc23642656fa47649588302&q=${entry}&image_type=photo&pretty=true`)
     console.log(response.data.hits)
     this.setState({images:response.data.hits})
    }

  render() { 
    return (
     
      <div styles={styles} >
     <Forms />
     <UI />

      </div>

    );
  }
}
 
export default Layout;


