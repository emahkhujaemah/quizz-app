import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CATEGORIES from "./constants/categories";
import Category from './components/Category';

function App() {
  return (
    <Container>
      <Row className="my-5">
        <Col className="text-center">
          <h1>React Quiz</h1>
        </Col>
      </Row>
      {Object.values(CATEGORIES).map((c, i) => (
        <Row key={i} className="d-flex justify-content-center mb-5" >
          <Col md={4}>
            <Category category={c} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default App;
