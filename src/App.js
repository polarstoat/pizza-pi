import React from 'react';

import Container from 'react-bootstrap/Container';

import Pizza from './Pizza.js';

function App() {
  return (
    <Container className="my-3">
      <Pizza name="Smaller" />
      <Pizza name="Larger" />
    </Container>
  );
}

export default App;
