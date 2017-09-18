import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

const NoteListHeader = (props)=> {
    return (
        <div className="item-list__header">
        <button className="button" onClick={()=>{
            props.meteorCall('notes.insert');
        }}>Create Note</button>
        </div>
    );
}

export default createContainer (()=>{
    return {
        meteorCall: Meteor.call,

    };
}, NoteListHeader);