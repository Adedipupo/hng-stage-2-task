import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "./Loader.js";
import Message from "./Message.js";
import FormContainer from "./FormContainer.js";
// import { register } from "../actions/userActions.js";

const Contact = ({ location, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    // const dispatch = useDispatch();
    // const userRegister = useSelector((state) => state.userRegister);
    // const { loading, userInfo } = userRegister;

    // const redirect = location.search ? location.search.split("=")[1] : "/";
    // useEffect(() => {
    //     if (userInfo) {
    //         history.push(redirect);
    //     }
    // }, [history, userInfo, redirect]);

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (password !== confirmPassword) {
    //         setMessage("Password do not match");
    //     } else {
    //         dispatch(register(name, email, password));
    //     }
    // };

const submitHandler = () =>{}
    return (
        <FormContainer>
            <h3 style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '2rem' }}>Contact</h3>

            {message && <Message variant="danger">{message}</Message>}
            {/* {loading && <Loader />} */}
            <Form onSubmit={submitHandler()}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                    Submit
                </Button>

                <br />
                <br />
                <h4 style={{ fontFamily: 'monospace', textAlign: 'center', margin: 'auto' }}>
                You can also visit <a href="http://internship.zuri.team">Zuri Team </a>
                 </h4>


                <Row className="py-3">
                    <Col>
                        Have an Account?{" "}
                        {/* <Link to={redirect ? `/login/redirect=${redirect}` : "/register "}>
                            Login
                        </Link> */}
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    );
};

export default Contact;
