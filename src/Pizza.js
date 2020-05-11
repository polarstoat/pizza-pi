import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

class Pizza extends Component {
  render() {
    const lowerCaseName = this.props.name.toLowerCase();

    return (
      <Form>
        <h5>{this.props.name} pizza</h5>
        <Form.Row>
          <Form.Group as={Col} controlId={`${lowerCaseName}-pizza-diameter`}>
            <Form.Label>Diameter</Form.Label>
            <InputGroup>
              <Form.Control type="number" inputMode="decimal" value={13} />
              <InputGroup.Append>
                <InputGroup.Text>in</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} controlId={`${lowerCaseName}-pizza-price`}>
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
          <Form.Group as={Col} controlId={`${lowerCaseName}-pizza-area`}>
            <Form.Label>Area</Form.Label>
            <InputGroup>
              <Form.Control type="number" readOnly={true} value={132.73} />
              <InputGroup.Append>
                <InputGroup.Text>sq. in</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} controlId={`${lowerCaseName}-pizza-cost-per-area`}>
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
    );
  }
}

export default Pizza;
