import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import PropTypes from 'prop-types';


import {Notes} from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListEmptyItem from './NoteListEmptyItem';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => {
    return (
        <div className="item-list">
        <NoteListHeader/>
        { props.notes.length===0 ? <NoteListEmptyItem/> : '' }
        {props.notes.map((note)=>{
            return <NoteListItem key={note._id} note={note} />;
        })}
        </div>
    );
};

NoteList.propTypes = {
    notes: PropTypes.array.isRequired
}
export default createContainer (()=>{
    const selectedNoteId = Session.get('selectedNoteId');
    Meteor.subscribe ('notes');

    return  {
        // notes: Notes.find().fetch()
        notes: Notes.find().fetch().map((note)=>{
            return {...note, selected: note._id===selectedNoteId};
        })
    };
}, NoteList);