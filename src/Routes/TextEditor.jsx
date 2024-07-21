import { useState } from "react";
import ReactMarkdown from "react-markdown";

const TextEditor = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Start typing Markdown..."
                    className="h-40 w-full rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring"
                />
                <div className="mt-4">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
