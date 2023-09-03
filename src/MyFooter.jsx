import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer  className="bg-secondary text-light">
      <Container >
        <Row>
          <Col md={6}>
            <h5>Contact Information</h5>
            <p>
              Address: corefareconsulting
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@corefareconsulting.com
            </p>
          </Col>
          <Col md={6}>
            <h5>Copyright © 2023 corefareconsulting</h5>
            <p>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
