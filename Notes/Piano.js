useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

}, []);

const handleKeyDown = e => {
    if (isRegularKey(e) && !e.repeat) {
        const note = getNoteFromKeyboardKey(e.key);
        if (note) {
            setState({ ...state, notesPlaying: [...state.notesPlaying, note ]});
        }
    }
};

const handleKeyUp = e => {
    if (isRegularKey(e) && !e.repeat) {
        const note = getNoteFromKeyboardKey(e.key);
        if (note) {
            setState({
                ...state,
                notesPlaying: state.notesPlaying.filter(
                    notePlaying => notePlaying !== note
                )
            });
        }
    }
};