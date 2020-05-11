import React from 'react';

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

function App() {
  return (
    <Container className="my-3">
      <Form>
        <h5>Smaller pizza</h5>
        <Form.Row>
          <Form.Group as={Col} controlId="smaller-pizza-diameter">
            <Form.Label>Diameter</Form.Label>
            <InputGroup>
              <Form.Control type="number" inputMode="decimal" value={13} />
              <InputGroup.Append>
                <InputGroup.Text>in</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} controlId="smaller-pizza-price">
            <Form.Label>Price</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>£</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="number" inputMode="decimal" value={10.99} />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="smaller-pizza-area">
            <Form.Label>Area</Form.Label>
            <InputGroup>
              <Form.Control type="number" readOnly={true} value={132.73} />
              <InputGroup.Append>
                <InputGroup.Text>sq. in</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} controlId="smaller-pizza-cost-per-area">
            <Form.Label>Cost per sq. in</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>£</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="number" readOnly={true} value={0.0828} />
            </InputGroup>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  );
}

export default App;
