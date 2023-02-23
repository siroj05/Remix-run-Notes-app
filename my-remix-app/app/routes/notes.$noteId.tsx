import { Link, useLoaderData } from "@remix-run/react";
import styles from "~/styles/note-details.css"
import {getStoredNotes} from "~/data/data"
import { json } from "@remix-run/node";

export default function NoteDetailPage(){

    const note = useLoaderData();

    return(
        <main id="note-details">
            <header>
                <nav>
                    <Link to={"/notes"}>Back to all notes</Link>
                </nav>
                <h1>{note.title}</h1>
            </header>
            <p id="note-details-content">{note.content}</p>
        </main>
    )
}

export async function loader({params}:any){
    const notes = await getStoredNotes();
    const noteId = params.noteId
    const selectedNote = notes.find((note:any) => note.id === noteId )
    if(!selectedNote){
        throw json(
            {message : "Could not find for id" + noteId},
            {status : 404}
        )
    }
    return selectedNote
}

export function meta({data} : any){
    return{
        title: data.title,
        description : "Manage your notes"
    }
}

export function links () {
    return [{rel : "styleSheet", href : styles}];
}
