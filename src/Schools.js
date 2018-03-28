import React, { Component } from 'react';
import './App.css';

class Schools extends Component {
  constructor(){
    super();
    this.state = {
      schools: []
    }
  }

  /* Fetch school results from the REST API which is run locally.
   * Get the results in JSON format.
   * Set the state with the obtained results.
  */
  componentDidMount() {
    fetch('http://localhost:3000/schools')
      .then(results => results.json())
      .then((data) => {this.setState({schools: data});
            console.log('the retreived data is: ' + JSON.stringify(data));
      });
  }

  render() {
    return ();
  }

}

export default Schools;
