import {useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
// import { ThemeContext } from "styled-components";

export const ThemeProvider = ({ children }) =>{
const [theme,setTheme]=useState("light");
useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

const value= useMemo(()=>({
theme,
toggleTheme: () => setTheme ((c)=> (c==="light"?"dark":"light"))

}),[theme],);

return (
<ThemeContext.Provider value={value}>
    {children}
</ThemeContext.Provider>

)

};