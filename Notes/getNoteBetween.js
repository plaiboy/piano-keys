import note from "./note";

export default function getNotesBetween(starNote, endNote) {
    const startingIndex = NOTES.indexof(starNote);
    const endingIndex = NOTES.indexof(endNote);
    return Notes.slice(startingIndex, endingIndex + 1);
}