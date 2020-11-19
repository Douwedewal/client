import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import './style.css';
import axios from 'axios';
import logo from '../../assets/main_logo.png';


function LoginButton() {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = {
        username: username,
        password: password,
    }

    async function logIn() {
        if (!sessionStorage.getItem("token")) {
            try {
                const resp = await axios.post('http://localhost:8080/api/auth/signin', user);
                sessionStorage.setItem("username", resp.data.username);
                sessionStorage.setItem("token", JSON.stringify(resp.data.accessToken));
                sessionStorage.setItem("id", resp.data.id);
                alert("Succesfully logged in");
                handleClose();
                window.location = 'http://localhost:3000/userhome'

            } catch (err) {
                alert("Could not login, username or password incorrect");
            }
        } else {
            alert("You are already logged in");
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mr-2">
                Login
            </Button>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={true}>
                <Modal.Header closeButton className="login-form-header">
                    <Modal.Title>Login</Modal.Title>
                    <img
                     src={logo}
                     width="100"
                     height="40"
                     className="login-button-logo"
                     alt="Fuming Frets Logo"
                     />
                </Modal.Header>
                <Modal.Body>
                    <form className="login-form">
                        <label htmlFor="username">Username</label><br />
                        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={logIn}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginButton;