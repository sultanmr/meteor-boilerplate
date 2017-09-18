import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

const NoteListEmptyItem = (props)=> {
    return (
        <p className="empty-item">Create a note to get started!</p>
    );
}

export default createContainer (()=>{
    return {

    };
}, NoteListEmptyItem);