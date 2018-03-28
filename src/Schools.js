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


  /* schools is a single array of objects.
   * Each object in it is an individual school which has various fields
   */
  render() {
    const { schools } = this.state;
      return(
        <div className='grid-container'>
          {schools.map(function(school, index) {
            return (<div className='grid-item'>
                      <p key={ index } className='boldName'>{school.campusName}</p>
                      <p>Grade Range: {school.gradeRange}</p>
                    </div>
                   );
          })}
        </div>
      );
    }
}

export default Schools;
