import React, { Component } from 'react';

import FormControl from 'react-bootstrap/FormControl';

class NumberInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.valueAsNumber);
  }

  render() {
    return (
      <FormControl type="number" inputMode="decimal" value={this.props.value} onChange={this.handleChange} />
    );
  }
}

export default NumberInput;
