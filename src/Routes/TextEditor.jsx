// TextEditor.js
import { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill styles

const TextEditor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            new Quill(editorRef.current, {
                theme: "snow", // Snow theme for a clean interface
                modules: {
                    toolbar: [
                        [{ header: "1" }, { header: "2" }],
                        ["bold", "italic", "underline", "strike"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link", "image"],
                        ["clean"],
                    ],
                },
            });
        }
    }, []);

    return (
        <div>
            <div ref={editorRef} style={{ height: "400px" }} />
            <button className="bg-blue-500 text-white p-2 rounded-full">Publish</button>
        </div>
    );
}

export default TextEditor;
