import React, { Component } from "react";

class FormsAndInputs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName: '',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    handleNameChange = event  => {
        this.setState({
            [event.target.name] : event.target.value,
        })
        
        console.log(event);
        console.log('target' + event.target);
        
    }
    componentDidMount(){
        this.setState({
            fullName: 'Dibakar',
       })
    }
  render() {
      const {fullName} = this.state;
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p> Full Name is : {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input 
                type="text"
                name = 'fullName'
                placeholder="Your name" 
                value= {fullName} onChange = {this.handleNameChange}>
            </input>
          </p>
          <button>Submit</button>
        </form>
        
      </div>
    );
  }
}

export default FormsAndInputs;
