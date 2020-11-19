import React, { useState } from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import logo from '../../assets/main_logo.png';
import { useForm } from 'react-hook-form';


const RegisterButton = () => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        let newUser = data;
        newUser.role = ["user"];
        signUp(newUser);
    }

    async function signUp(user) {
        try {
            await axios.post('http://localhost:8080/api/auth/signup', user);
            alert("Account registered!")
        } catch (err) {
            console.log(err);
            alert("Could not register, username or email already taken");
        }
    }


    return (
        <>  
            <Button variant="primary" onClick={handleShow}>
                Register
            </Button>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}>
                <Modal.Header closeButton className="register-form-header">
                    <Modal.Title>Register</Modal.Title>
                    <img
                     src={logo}
                     width="100"
                     height="40"
                     className="register-button-logo"
                     alt="Fuming Frets Logo"
                     />
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Username</label><br/>
                        <input name="username" ref={register({ required: true, minLength: 2, maxLength: 12 })} /><br/>
                        {errors.username && errors.username.type === "required" && (<p className="form-errors">This is required</p>)}
                        {errors.username && errors.username.type === "minLength" && (<p className="form-errors">Username is required to have atleast 2 characters</p>)}
                        {errors.username && errors.username.type === "maxLength" && (<p className="form-errors">Username can have 12 characters max</p>)}
                        <label>Email</label><br/>
                        <input name="email" ref={register({ required: true, pattern: {
                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                             message: "invalid email address"
                        } })} /><br/>
                        {errors.email && errors.email.type === "pattern" && (<p className="form-errors">Please enter a valid email. "example@example.com"</p>)}
                        {errors.email && errors.email.type === "required" && (<p className="form-errors">This is required</p>)}
                        <label>Password</label><br/>
                        <input type="password" name="password" ref={register({ required: true })} /><br/>
                        {errors.password && errors.password.type === "required" && (<p className="form-errors">This is required</p>)}<br/>
                        <Button type="submit" variant="primary">
                        Register
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterButton;