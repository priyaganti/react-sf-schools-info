import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Schools';
import ElementarySchools from './ElementarySchools';
import PreSchools from './PreSchools';
import MiddleSchools from './MiddleSchools';
import HighSchools from './HighSchools';

class Main extends React.Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/elementary' component={ElementarySchools}/>
          <Route path='/pre' component={PreSchools}/>
          <Route path='/middle' component={MiddleSchools}/>
          <Route path='/high' component={HighSchools}/>
        </Switch>
      </main>
    );
  }
}


export default Main;
