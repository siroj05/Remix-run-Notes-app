import { Link } from "@remix-run/react";
import styles from "~/styles/note-details.css"

export default function NoteDetailPage(){
    return(
        <main id="note-details">
            <header>
                <nav>
                    <Link to={"/notes"}>Back to all notes</Link>
                </nav>
                <h1>NOTE TITLE</h1>
            </header>
            <p id="note-details-content">NOTE CONTENT</p>
        </main>
    )
}

export function links () {
    return [{rel : "styleSheet", href : styles}];
}
