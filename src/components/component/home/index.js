import React from 'react';
import {Card, Button} from 'react-bootstrap';
function HomePage() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT69NtPpYTNVre9WIbhu7-vHvD9ycIsyX0LmPeoTtS8iRsCmFFa" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HomePage;
