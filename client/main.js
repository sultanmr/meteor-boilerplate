import { Meteor } from 'meteor/meteor';
import  React  from 'react';
import  ReactDOM from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';


Tracker.autorun(()=> {
  const isAuthenticated = !!Meteor.userId();
  const auth = onAuthChange;
  auth(isAuthenticated);
});


Meteor.startup (() => {
    ReactDOM.render(routes, document.getElementById("app"));
});

