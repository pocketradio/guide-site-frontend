import TextEditor from "../MCEComponent.jsx";
import { useRef, useState } from "react";

export default function TextBlock({ deleteBlock }) {
    const editorRef = useRef(null);
    const [editMode, setEditMode] = useState(false);

    function log() {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }

    function toggleEditorMode() {
        setEditMode(!editMode);
    }

    return (
        <div className="bg-(--surface-background) rounded-md w-full text-(--text-color)">
            {editMode && <TextEditor editorRef={editorRef}></TextEditor>}
            <div id="lower-buttons" className="flex gap-2 justify-center">
                <button
                    onClick={() => log()}
                    className="text-amber-50 bg-neutral-600 w-25 rounded px-2 py-0.5"
                >
                    Log
                </button>
                <button
                    onClick={() => toggleEditorMode()}
                    className="text-amber-50 bg-neutral-600 w-25 rounded px-2 py-0.5"
                >
                    Edit
                </button>
                <button
                    onClick={deleteBlock}
                    className="text-amber-50 bg-neutral-600 w-25 rounded px-2 py-0.5"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
