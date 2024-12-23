import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext()

export const ArticlesProvider = ({ children }) => {
    const [provideArticles, setProvideArticles] = useState([])

    const fetchArticles = () => {
        fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=50", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => setProvideArticles(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <ArticlesContext.Provider value={{ provideArticles }}>
            {children}
        </ArticlesContext.Provider>
    )
}
