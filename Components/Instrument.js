import React, { Fragment } from 'react';
import instrumentAudio from "./Components/InstrumentAudio";
import getNotesBetween from '../Notes/getNoteBetween';
import isAccidentalNote from '../Notes/isAccidentalNote';



const Instrument = ({ 
    instrumentName, 
    startNote, 
    endNote,
    renderPianoKey,
    keyboardMap
 }) => {
    const notes = getNotesBetween(startNote, endNote);

    const [state,setState] = useState({
        notesPlaying: []
    });

    const onPlayNotestart = note => {
        setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
    };

    const onPlayNoteEnd = note => {
        setState({
            ...state,
            notesPlaying: state.notesPlaying.filter(
                notesPlaying => notePlaying !== note
            )
        });
    };
    return (
        <Fragment>
            {notes.map(note => {
                return (
                       <Fragment key={note}>
                          {renderPiano({
                            note,
                            isAccidentalNote: isAccidentalNote(note),
                            isNotePlaying: state.notesPlaying.includes(note),
                            startPlayingNote: () => onPlayNotestart(note),
                            stopPlayingNote: () => onPlayingNoteEnd(note),
                            keyboardShortcut: getKeyboardShortcutsForNote(keyboardMap, note)
              })}
                        </Fragment>
         );
       <InstrumentAudio 
            instrumentName={instrumentName}
            notes={state.notesPlaying}
            />
        </Fragment>

    );
};

export default Instrument;