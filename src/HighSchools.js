import React, { Component } from 'react';
import './App.css';

class HighSchools extends Component {
  constructor(){
    super();
    this.state = {
      highSchools: []
    }
  }

  /* Fetch school results from the REST API which is run locally.
   * Get the results in JSON format.
   * Set the state with the obtained results.
  */
  componentDidMount() {
    fetch('http://localhost:3000/schools?gradeRange=7-12&gradeRange=9-12&gradeRange=K-12')
      .then(results => results.json())
      .then((data) => {this.setState({highSchools: data});
            console.log('the retreived data is: ' + JSON.stringify(data));
      });
  }


  /* schools is a single array of objects.
   * Each object in it is an individual school which has various fields
   */
  render() {
    const { highSchools } = this.state;
      return(
        <div className='grid-container'>
          {highSchools.map(function(highSchool, index) {
            return (<div className='grid-item'>
                      <p key={ index } className='boldName'>{highSchool.campusName}</p>
                      <p>Grade Range: {highSchool.gradeRange}</p>
                    </div>
                   );
          })}
        </div>
      );
    }
}

export default HighSchools;
