import styles from "NewNote.css"

function NewNote () {
    return (
        <form method="post" id="note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows={5}></textarea>
            </p>
            <div className="form-actions">
                <button>Add Note</button>
            </div>
        </form>
    )
}

export default NewNote

export function links () {
    return [{rel : 'StyleSheet', href : styles}];
  }