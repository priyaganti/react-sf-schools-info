import React, { Component } from 'react';
import './App.css';

class MiddleSchools extends Component {
  constructor(){
    super();
    this.state = {
      middleSchools: []
    }
  }

  /* Fetch school results from the REST API which is run locally.
   * Get the results in JSON format.
   * Set the state with the obtained results.
  */
  componentDidMount() {
    fetch('http://localhost:3000/schools?gradeRange=6-8&gradeRange=K-8')
      .then(results => results.json())
      .then((data) => {this.setState({middleSchools: data});
            console.log('the retreived data is: ' + JSON.stringify(data));
      });
  }


  /* schools is a single array of objects.
   * Each object in it is an individual school which has various fields
   */
  render() {
    const { middleSchools } = this.state;
      return(
        <div className='grid-container'>
          {middleSchools.map(function(midSchool, index) {
            return (<div className='grid-item'>
                      <p key={ index } className='boldName'>{midSchool.campusName}</p>
                      <p>Grade Range: {midSchool.gradeRange}</p>
                    </div>
                   );
          })}
        </div>
      );
    }
}

export default MiddleSchools;
