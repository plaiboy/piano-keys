import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";


const NullSoundFontPlayerNoteAudio = {
    stop()  {}
};

const NullSoundFontPlayer = {
    play() {
        return NullSoundFontPlayerNoteAudio;
    }
};

const AudioPlayer = () => {
    const audiocontext = AudioContext && new AudioContext();

    let soundPlayer = NullSoundFontPlayer;

    const player = {
        setInstrument(instrumentName) {
            SoundFontPlayer.instrument(audioContext, instrumentName)
            .then(soundFontPlayer =>{
                soundPlayer = NullSoundFontPlayer;
            })
            .catch(e => {
                soundPlayer = NullSoundFontPlayer
            });
        },
        playNote(note) {
            soundPlayer.play(note);
        }
    };
    return player;
};


export default AudioPlayer;
