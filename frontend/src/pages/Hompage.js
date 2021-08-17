import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Footer from '../components/Footer'
import Header from '../components/Header'
import me from './me.jpeg'
import first from './first.png'
import two from './two.png'
import third from './third.png'
import './styles.css'
import contact from '../components/contact';

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
                                        <Card.Title>MyShop</Card.Title>
                                        <Card.Text>
                                            An ecommerce web application where users can purchase/make orders
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Express.js, React,Redux, Mongodb.</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">https://myshopwebapp.herokuapp.com/</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={two} />
                                    <Card.Body>
                                        <Card.Title>Job Finder</Card.Title>
                                        <Card.Text>
                                            A job portal application for job seekers and employers. Employers can post jobs and job seekers can apply for jobs..
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>React.js, Redux, Mongodb. Express.js.</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">https://job-finder-2.netlify.app/</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <section>
                        <Container>
                            <Row>
                                <Col xs={12} md={4} lg={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={third} />
                                    <Card.Body>
                                        <Card.Title>Job Finder</Card.Title>
                                        <Card.Text>
                                            A job portal application for job seekers and employers. Employers can post jobs and job seekers can apply for jobs..
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>React.js, Redux, Mongodb. Express.js.</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">https://job-finder-2.netlify.app/</Card.Link>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </section>
                <contact/>
            </main>
            <Footer />
        </>
    )
}

export default Hompage
