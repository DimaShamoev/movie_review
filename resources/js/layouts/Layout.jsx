import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { AsideProvider } from '../context/AsideContext'
import { MainMenuProvider } from '../context/MainMenuContext'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <AsideProvider>
                <MainMenuProvider>

                    <Header />

                    <main className="main flex-1">
                        { children }
                    </main>

                    <Footer />
                </MainMenuProvider>
            </AsideProvider>
        </div>
    )
}

export default Layout