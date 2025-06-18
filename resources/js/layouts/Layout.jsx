import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            <main className="main flex-1">
                { children }
            </main>

            <Footer />
        </div>
    )
}

export default Layout