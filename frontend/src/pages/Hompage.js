import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer'
import Header from '../components/Header'
import './styles.css'

const Hompage = () => {
    return (
        <>
          <Header />  
            <main>
                <section className="hero">
                    <div className="heroDiv">
                        <h1>Software Engineer</h1>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Hompage
