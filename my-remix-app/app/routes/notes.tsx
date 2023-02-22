import NewNote, {links as NewNoteStyle} from "~/components/NewNote"
import NoteList, {links as NoteListLinks} from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/data";
import { redirect } from "@remix-run/node";


export default function notesPage(){
    return(
        <main>
            <NewNote/>
            <NoteList/>
        </main>
    )
}

export async function action({request} : any){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData)
    // console.log(noteData);
    // add validation...
    const existingNotes = await getStoredNotes()
    noteData.id = new Date().toISOString();
    const updateNotes = existingNotes.concat(noteData)
    await storeNotes(updateNotes)
    return redirect("/notes")
}

export function links () {
    return [...NewNoteStyle(), ...NoteListLinks()];
  }