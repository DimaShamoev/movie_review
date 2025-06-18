import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />

            <main className="main">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quo.
            </main>

            <Footer />
        </div>
    )
}

export default Layout