import { useContext } from "react"
import { MainMenuContext } from '../context/MenuToggleContext'

export const useMainMenu = () => {
    const mainMenuContext = useContext(MainMenuContext)

    if (!mainMenuContext) throw new Error('Wrap a provider')
        
    return mainMenuContext
}