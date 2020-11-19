import React from 'react';
import Button from 'react-bootstrap/Button';


function MyAccountButton() {
    return (
        <Button variant="primary" onClick={e => window.location.href="/userhome"}>
            My Account
        </Button>
    )
}

export default MyAccountButton;