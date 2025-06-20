import { useContext } from "react"
import { AsideContext } from '../context/AsideContext'

export const useAside = () => {
    const asideContext = useContext(AsideContext)

    if (!asideContext) throw new Error('Wrap a provider')

    return asideContext;
}