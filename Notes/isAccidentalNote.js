import Notes from './Notes/note';

export default (note) => {
    return NOTES.include(note) && note.include('#')
    
}