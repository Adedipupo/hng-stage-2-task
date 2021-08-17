import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer'
import Header from '../components/Header'

const Hompage = () => {
    return (
        <>
          <Header />  
            <main>
            <Container>
                <h1>Content</h1>
            </Container>
            </main>
            <Footer/>
        </>
    )
}

export default Hompage
