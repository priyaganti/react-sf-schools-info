import React, { Component } from 'react';
import './App.css';

class ElementarySchools extends Component {
  constructor(){
    super();
    this.state = {
      elemSchools: []
    }
  }

  /* Fetch school results from the REST API which is run locally.
   * Get the results in JSON format.
   * Set the state with the obtained results.
  */
  componentDidMount() {
    fetch('http://localhost:3000/schools?&gradeRange=K-4&gradeRange=K-5&gradeRange=K-8&gradeRange=K-12')
      .then(results => results.json())
      .then((data) => {this.setState({elemSchools: data});
            console.log('the retreived data is: ' + JSON.stringify(data));
      });
  }


  /* schools is a single array of objects.
   * Each object in it is an individual school which has various fields
   */
  render() {
    const { elemSchools } = this.state;
      return(
        <div className='grid-container'>
          {elemSchools.map(function(elemSchool, index) {
            return (<div className='grid-item'>
                      <p key={ index } className='boldName'>{elemSchool.campusName}</p>
                      <p>Grade Range: {elemSchool.gradeRange}</p>
                    </div>
                   );
          })}
        </div>
      );
    }
}

export default ElementarySchools;
