import { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
    isDarkModActive: boolean;
    switchTheme: (isDark : boolean) => void;
}

interface ThemeProviderProps {
    children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {

   
    const [isDarkModActive, setIsDarkModActive]  = useState(true)
    
    

    function switchTheme(isDark : boolean) {
          setIsDarkModActive(isDark)
          localStorage.setItem('darkTheme', JSON.stringify(isDark))
      }

      return (
        <ThemeContext.Provider
          value={{
            isDarkModActive,
            switchTheme,
          }}
        >
          {children}
        </ThemeContext.Provider>
      );
}