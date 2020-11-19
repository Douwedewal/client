import React from 'react';
import Button from 'react-bootstrap/Button';

function LogoutButton() {

    function logout() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("id");
        window.location.href="/"
    }

    return (
        <Button className="mr-2" variant="primary" onClick={logout}>
            Logout
        </Button>
    )
}

export default LogoutButton;