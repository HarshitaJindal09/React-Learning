import {createContext, useContext} from 'react'


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})
// What does createContext() do?
// It creates a Context object.
// The object passed inside is the default value.

export const ThemeProvider = ThemeContext.Provider
// Every Context automatically gets a Provider.

export default function useTheme(){
    return useContext(ThemeContext)
}
// Creating Custom Hook
// Why create this function?
// Normally we access context like:
// const theme = useContext(ThemeContext)
// This has to be written everywhere.
// Instead we create a custom hook:
// const theme = useTheme()
// Much cleaner.
// Without Context:

// App
//  |
//  v
// Navbar
//  |
//  v
// Sidebar
//  |
//  v
// Button

// You would pass props through every component: