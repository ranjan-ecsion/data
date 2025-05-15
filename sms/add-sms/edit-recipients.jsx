import Image from "next/image";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
// import previewImage from "../../../../../public/img/preview-image.png"

const EditRecipients = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <div>
            <h5>Message Name</h5>
            <Form.Control as="textarea" rows={3} />
            <Form.Group className="form-group mt-3">
              <Form.Check type="checkbox" label="Profile sender name" />
              <Form.Check
                type="checkbox"
                label="Include opt out instructions"
              />
            </Form.Group>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h5>Preview SMS</h5>
            <div>
                {/* <Image src={} width={100} height={100} /> */}

                
            </div>
            
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default EditRecipients;
