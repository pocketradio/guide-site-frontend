import { createContext, useContext, useEffect, useState } from "react";

const PageContext = createContext(null);

export function PageProvider({ children }) {
    const [title, setTitle] = useState("");
    const [gameId, setGameId] = useState(1);
    const serverAPI = "https://guide-site-backend.onrender.com";
    const localAPI = "http://localhost:3000";
    const currentAPI = localAPI;

    return (
        <PageContext.Provider
            value={{
                title,
                setTitle,
                currentAPI,
                gameId,
                setGameId,
            }}
        >
            {children}
        </PageContext.Provider>
    );
}

export function usePage() {
    const context = useContext(PageContext);

    if (!context) {
        throw new Error("usePage must be used within a PageProvider");
    }

    return context;
}
