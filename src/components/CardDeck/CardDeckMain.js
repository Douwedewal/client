import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import LoginButton from '../LoginButton/LoginButton';
import RegisterButton from '../RegisterButton/RegisterButton';

function CardDeckMain() {
  if (sessionStorage.getItem("token") === null) {
    return (
      <CardDeck className="m-2">
        <Card>
          <Card.Body>
            <Card.Title>Fuming Frets</Card.Title>
            <Card.Text>
              Log in to check out the users song in the song section, or upload some of your own songs!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              Already have an account? Login to start uploading your songs!
          </Card.Text>
          </Card.Body>
          <Card.Footer>
            <LoginButton></LoginButton>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Card.Text>
              New to Fuming Frets? Click the register button below to get started!
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <RegisterButton></RegisterButton>
          </Card.Footer>
        </Card>
      </CardDeck>
    );
  } else {
    return(
      <CardDeck className="m-2">
        <Card>
          <Card.Body>
            <Card.Text>
            “Do it again on the next verse and people think you meant it.” – Chet Atkins<br/><br/>
            “Music is powerful. As people listen to it, they can be affected. They respond.” – Ray Charles
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Fuming Frets</Card.Title>
            <Card.Text>
              Happy to have you on Fruming Frets! Enjoy your stay!
          </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
            “Music is the only thing I’ve ever known that doesn’t have any rules at all.” – Josh Homme<br/><br/>
            “Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.” ― Keith Richards
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    )
  }
}

export default CardDeckMain;