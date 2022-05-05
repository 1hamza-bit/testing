import React from "react";
import axios from 'axios' 

class Search extends React.Component {
   
    constructor(props) {
    super(props);
        this.state = { entry: '' }
    }
   
    onFormSubmit=(event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
       

    }
    render() { 
        return (
          <div  className='ui container'>
            <div className="ui segment">
           <form onSubmit={this.onFormSubmit} class="ui form">
  <div class="field">
      <div className="ui massive icon input">
      <label>User Input</label>
    <input 
    type="text" 
    placeholder="search..."
     onChange={(event) => this.setState({entry:event.target.value})}
     value={this.state.entry}
     />
    <i className="search icon"></i>
      </div>
   
  </div>
</form>
</div>
</div>

        )
    }
}
 
export default Search; 