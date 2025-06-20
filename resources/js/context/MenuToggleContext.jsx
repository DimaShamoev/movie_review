import { createContext, useState } from "react"

export const menuToggleContext = (state = false) => {

    const MenuContext = createContext()

    const MenuProvider = ({ children }) => {

        const [isMenuOpen, setIsMenuOpen] = useState(state)
        
        const toggleMenu = () => setIsMenuOpen(prev => !prev)

        return (
            <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
                { children }
            </MenuContext.Provider>
        )
    }


    return { Provider: MenuProvider, Context: MenuContext };

}