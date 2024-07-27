import NewsCard from "../components/Card.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from '../components/title.jsx'
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar.jsx";

export default function Technology()
{
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://inshortsapi.vercel.app/news?category=technology')
      .then(async (res) => {
        setData((await res.json())['data']);
      });
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <Container >
      <Row>
        {data.map((article, index) => (
          <Col key={index} sm={4} className="mb-3">
            <NewsCard {...article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}