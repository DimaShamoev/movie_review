import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { AsideProvider } from '../context/AsideContext'
import Aside from '../components/layout/Aside'

const Layout = ({ children }) => {
    return (
        <div className='relative flex flex-col min-h-screen'>
            <AsideProvider>
                <Header />
                <Aside />
                <main className="main flex-1 relative">
                    {children}
                </main>

                <Footer />
            </AsideProvider>
        </div>
    )
}

export default Layout