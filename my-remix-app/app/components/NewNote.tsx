import { Form, useTransition as useNavigation, useActionData } from "@remix-run/react";
import styles from "./NewNote.css"

function NewNote () {

    const data = useActionData()

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <Form method="post" id="note-form">
            {
                data?.message && <p>{data.message}</p>
            }
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows={5}></textarea>
            </p>
            <div className="form-actions">
                <button disabled={isSubmitting} >
                    {isSubmitting? "Adding..." : "Add Note"}
                </button>
            </div>
        </Form>
    )
}

export default NewNote

export function links () {
    return [{rel : 'StyleSheet', href : styles}];
}