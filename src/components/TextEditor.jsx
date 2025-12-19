import BundledEditor from "../BundledEditor.jsx";
import "../css/textEditor.css"

export default function TextEditor({ editorRef, content }) {
    /* const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }; */

    return (
        <>
            <BundledEditor
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue={content}
                init={{
                    menubar: false,
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
        </>
    );
}
