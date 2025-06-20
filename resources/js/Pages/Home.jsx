import { useAside } from "../hooks/useAside"
import { useMainMenu } from "../hooks/useMainMenu"

const Home = () => {

    const { isMenuOpen } = useMainMenu()

    return (
        <div>
            <p>{ String(isMenuOpen) }</p>
        </div>
    )
}

export default Home