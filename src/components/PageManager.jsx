import "../tailwind.css";
import { Fragment, useEffect, useState } from "react";

// http://localhost:3000/pages
// https://guide-site-backend.onrender.com/pages/

export default function PageManager() {
    const [pages, setPages] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/pages")
            .then((response) => response.json())
            .then((result) => setPages(result));
    }, []);

    function createPage(title) {
        if (!title?.trim()) {
            console.log("Error - title cannot be empty");
            return;
        }

        fetch("http://localhost:3000/pages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });
    }

    const isAdmin = true;

    return (
        <div className="">
            {isAdmin && (
                <div className="p-4">
                    <h1>Admin Tools</h1>

                    <div className="flex justify-between items-center mx-auto">
                        <h1>Pages:</h1>
                        <input
                            type="text"
                            className="bg-neutral-200 text-black px-2 box-border rounded ml-auto mr-2"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <button
                            onClick={() => createPage(title)}
                            className="text-amber-50 bg-neutral-600 rounded px-2 py-0.5"
                        >
                            Create Page
                        </button>
                    </div>
                    <ul>
                        {pages.map((page) => {
                            return <li>{page.title}</li>;
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
