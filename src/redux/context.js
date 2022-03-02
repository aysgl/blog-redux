import { createContext } from 'react'

export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
    const colors = ["#0d6efd", "#6610f2", "#6f42c1", "#d63384", "#dc3545", "#fd7e14", "#ffc107", "#198754", "#20c997", "#0095ff"]

    const getRandomRadius = (min, max) => {
        return Math.floor(min + Math.random() * (max - min + 1));
    };

    const value = {
        colors,
        getRandomRadius,
    }

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}

