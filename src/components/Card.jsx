import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap";
export default function NewsCard(props) {
  // console.log(props);
  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>{props.category}</Card.Header>
      <Card.Img
        variant="top"
        src={props.imageUrl}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Button variant='info' href={props.url}><span>Read more</span></Button>
      </Card.Body>
      <Card.Footer>
        Author Name: {props.author}
      </Card.Footer>
    </Card>
  );
}