import React, { Component } from 'react';
import './App.css';

class PreSchools extends Component {
  constructor(){
    super();
    this.state = {
      preSchools: []
    }
  }

  /* Fetch school results from the REST API which is run locally.
   * Get the results in JSON format.
   * Set the state with the obtained results.
  */
  componentDidMount() {
    fetch('http://localhost:3000/schools?gradeRange=PK&gradeRange=PK-TK&gradeRange=PK-K&gradeRange=PK-4&gradeRange=PK-5&gradeRange=PK-8')
      .then(results => results.json())
      .then((data) => {this.setState({preSchools: data});
            console.log('the retreived data is: ' + JSON.stringify(data));
      });
  }


  /* schools is a single array of objects.
   * Each object in it is an individual school which has various fields
   */
  render() {
    const { preSchools } = this.state;
      return(
        <div className='grid-container'>
          {preSchools.map(function(preSchool, index) {
            return (<div className='grid-item'>
                      <p key={ index } className='boldName'>{preSchool.campusName}</p>
                      <p>Grade Range: {preSchool.gradeRange}</p>
                    </div>
                   );
          })}
        </div>
      );
    }
}

export default PreSchools;
