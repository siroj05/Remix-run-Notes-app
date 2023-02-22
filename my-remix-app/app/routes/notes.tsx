import NewNote, {links as NewNoteStyle} from "~/components/NewNote"


export default function notesPage(){
    return(
        <main>
            <NewNote/>
        </main>
    )
}

export function links () {
    return [...NewNoteStyle()];
  }