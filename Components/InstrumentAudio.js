import React, {useEffect, useState } from 'react';
import AudioPlayer from "./AudioPlayer";

const InstrumentAudio = ({ instrumentNamae, notes }) => {
    const [instrumentPlayer, setInstrumentPlayer] = useState(null);
    useEffect(() => {
        setInstrumentPlayer(AudioPlayer());

    },[]);

    useEffect(() => {
        if (instrumentplayer) {
            setInstrumentPlayer();
            playNotes();
        }
    }, [instrumentPlayer]);

    useEffect(() => {
        if (notes && notes.length > 0 ) {
            playNotes();
        }
    }, [notes]);

    const setInstrument = () => {
        instrumentPlayer.setInstrument(instrumentName);
    };

    const playNotes = () => {
        if (instrumentPlayer) {
            nstrumentPlayer.playNote(notes[0]);
        }
    };
    return null;
}


export default InstrumentAudio;