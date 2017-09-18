import { Meteor } from 'meteor/meteor';
import React from 'react';
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Session } from 'meteor/session';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

this.browserHistory= createBrowserHistory();
 window.history = this.browserHistory;

export const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
  const isUnauthenticatedPage = currentPagePrivacy === 'unauth';
  const isAuthenticatedPage = currentPagePrivacy === 'auth';

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};

renderComponent = (jsxUnAuthComponent, jsxAuthComponent ) => {
  if(!!Meteor.userId()) {
    Session.set('currentPagePrivacy', 'auth');
    return jsxAuthComponent;
  }
 
  Session.set('selectedNoteId', undefined);
  Session.set('currentPagePrivacy', 'unauth');
  return jsxUnAuthComponent;
}

export const routes = (
  <Router history={this.browserHistory} >
   {/* <>   */}
    <Switch >
      <Route exact path="/"
      render={()=> {
        return this.renderComponent(<Login/>, <Dashboard/>);
      }}/>
      <Route  path="/login"
       render={()=> {
        return this.renderComponent(<Login/>, <Dashboard/>);
      }}/>
      <Route path="/signup" 
           render={()=> {
        return this.renderComponent(<Signup/>, <Dashboard/>);
      }}/>

      <Route  path="/dashboard"
      render={ ()=>{
        return this.renderComponent(<Login/>, <Dashboard/>);
      }}/>


      <Route path="/dashboard/:id" 
        render={ ()=>{
        return this.renderComponent(<Login/>, <Dashboard/>);
      }}/>

      />
      

      <Route component={NotFound}/>

   </Switch>    
  </Router>
);
