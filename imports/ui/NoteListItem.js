
import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import PropTypes from 'prop-types';
import moment from 'moment';

export const NoteListItem = (props)=> {
    const className = props.note.selected ? 'item item--selected' : 'item';
    return (
        <div className={className} onClick={()=>{
            props.Session.set('selectedNoteId', props.note._id);
        }}>
      <h5 className="item__title">{props.note.title}</h5>
      <p className="item__subtitle">{moment(props.note.updatedAt).format('M/DD/YY')}</p>
        </div>
    );
}

NoteListItem.propTypes = {
    note: PropTypes.object.isRequired,
    Session: PropTypes.object.isRequired
}

export default createContainer (()=>{

    return {
        Session
    };
}, NoteListItem);