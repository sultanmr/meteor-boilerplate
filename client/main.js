import { Meteor } from 'meteor/meteor';
import  React  from 'react';
import  ReactDOM from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes';

import '../imports/startup/simple-schema-configuration';
import {Session} from 'meteor/session';


Tracker.autorun(()=> {
  const isAuthenticated = !!Meteor.userId();
  const currentPagePrivacy = Session.get ('currentPagePrivacy');
  onAuthChange(isAuthenticated, currentPagePrivacy);
});


Tracker.autorun(()=>{
  const selectedNoteId = Session.get('selectedNoteId');
  Session.set('isNavOpen', false);
  if (selectedNoteId) {
    
    this.browserHistory.replace ('/dashboard/'+selectedNoteId);
  }
});

Tracker.autorun(()=>{
  const isNavOpen = Session.get('isNavOpen');
  document.body.classList.toggle('is-nav-open', isNavOpen);
});



Meteor.startup (() => {
    Session.set('selectedNoteId', undefined);
    Session.set('isNavOpen', false);
    ReactDOM.render(routes, document.getElementById("app"));
});

