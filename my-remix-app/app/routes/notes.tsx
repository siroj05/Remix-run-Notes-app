import NewNote, {links as NewNoteStyle} from "~/components/NewNote"
import NoteList, {links as NoteListLinks} from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/data";
import { redirect } from "@remix-run/node";
import { Link, useActionData, useLoaderData } from "@remix-run/react";


export default function notesPage(){

    const notes = useLoaderData();
    // const data = useActionData();

    return(
        <main>
            <NewNote/>
            <NoteList notes={notes}/>
        </main>
    )
}

export async function loader(){
    const notes = await getStoredNotes();
    return notes
}


export async function action({request} : any){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData)
    if(noteData.title.trim().length < 5){
        return {message : 'invalid title - must be atleast 5 character long'}
    }

    // console.log(noteData);
    // add validation...
    const existingNotes = await getStoredNotes()
    noteData.id = new Date().toISOString();
    const updateNotes = existingNotes.concat(noteData)
    await storeNotes(updateNotes)
    // await new Promise<void>((resolve, reject)=>setTimeout(()=>resolve(), 1000))
    return redirect("/notes")
}

export function links () {
    return [...NewNoteStyle(), ...NoteListLinks()];
  }

export function ErrorBoundary({error} : any){
    return(
        <main className="error">
            <h1>An Error related to your notes occured!</h1>
            <p>{error.message}</p>
            <p>
                Back to <Link to={"/"}>safety</Link>
            </p>
        </main>
    )
}