import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import NumberInput from './NumberInput.js';

class Pizza extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diameter: undefined,
      price: undefined,
    };

    this.handleDiameterChange = this.handleDiameterChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleDiameterChange(diameter) {
    this.setState({diameter})
  }

  handlePriceChange(price) {
    this.setState({price});
  }

  getArea() {
    const radius = this.state.diameter / 2;
    const area = Math.PI * Math.pow(radius, 2)

    return area;
  }

  render() {
    const lowerCaseName = this.props.name.toLowerCase();

    const area = this.getArea();

    return (
      <Form>
        <h5>{this.props.name} pizza</h5>
        <Form.Row>
          <Form.Group as={Col} controlId={`${lowerCaseName}-pizza-diameter`}>
            <Form.Label>Diameter</Form.Label>
            <InputGroup>
              <NumberInput value={this.state.diameter} onChange={this.handleDiameterChange} />
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
              <NumberInput value={this.state.price} onChange={this.handlePriceChange} />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId={`${lowerCaseName}-pizza-area`}>
            <Form.Label>Area</Form.Label>
            <InputGroup>
              <Form.Control type="number" readOnly={true} value={area.toFixed(2)} />
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
              <Form.Control type="number" readOnly={true} value={(this.state.price / area).toFixed(4)} />
            </InputGroup>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default Pizza;
