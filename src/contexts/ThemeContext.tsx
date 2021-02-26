import { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
    isDarkModActive: boolean;
    switchTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {

   
    const [isDarkModActive, setIsDarkModActive]  = useState(true)
    

    function switchTheme() {
        if(isDarkModActive){
          setIsDarkModActive(false)
        }else{
          setIsDarkModActive(true)
        }
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