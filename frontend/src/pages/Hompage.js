import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Footer from '../components/Footer'
import Header from '../components/Header'
import me from './me.jpeg'
import first from './first.png'
import two from './two.png'
import third from './third.png'
import './styles.css'

const Hompage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <div className="heroDiv">
                        <h2>Adedipupo Jokanola Benedict</h2>
                        <h4>Software Engineer</h4>
                        <h6>Node.js,Express.js,MongoDB,PostgreSQL,TypeORM,<br />Typescript,Docker,GCP,Jira,CI/CD</h6>
                    </div>
                </section>
                <section className="whatIdo">
                    <h3 style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '2rem' }}>Who I am</h3>
                    <Container className="pt-3">
                        <Row>
                            <Col xs={6}>
                                <img alt="me" src={me} style={{ width: '70%', height: '100%' }} />
                            </Col>
                            <Col xs={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Title>About Me</Card.Title>
                                        <br />
                                        <Card.Text>
                                            <p>I am an innovative software engineer and I have few years of experience as a software developer.I have already contributed to dozen projects including a Music Player App,a JobFinder platform ,an ecommerce shop, to mention a few.</p>
                                            <p>I am proficient in Go,Php and Javascript. Of these programming languages, I feel most comfortable working with Javascript.  </p>
                                            <p><em>Below are some of the technologies i use delay: <br />
                                                Nodejs,Expressjs,MongoDB,PostgreSQL,Javascript,Typescript,TypeORM,React,Redux,Jest,Github Actions,Docker
                                            </em></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="whatIdo">
                    <h3 style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '2rem' }}>Projects</h3>
                    <Container className="pt-3">
                        <Row>
                            <Col xs={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={first} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={first} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Hompage
