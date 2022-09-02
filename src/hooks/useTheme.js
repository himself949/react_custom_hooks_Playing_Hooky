import { useState, useEffect } from "react";

export function useTheme() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    function onToggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const isDarkTheme = theme === "dark" ? true : false

    return { onToggleTheme, isDarkTheme }
}