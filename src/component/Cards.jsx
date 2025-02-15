import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({image,tittle,content}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card>{tittle}</Card>
        <Card>
          {content}
        </Card>
        <Button variant="primary">Visit Now</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards;