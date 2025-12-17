import BundledEditor from "../BundledEditor.jsx";

export default function MCEComponent({ editorRef }) {
    /* const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }; */

    return (
        <>
            <BundledEditor
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        "advlist",
                        "anchor",
                        "autolink",
                        "help",
                        "image",
                        "link",
                        "lists",
                        "searchreplace",
                        "table",
                        "wordcount",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
        </>
    );
}
