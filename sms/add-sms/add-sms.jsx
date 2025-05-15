"use client";
import React, { useState } from "react";
import { Accordion, Button, Card, Col, Form, Row } from "react-bootstrap";
import SmsPrimaryOffCanvas from "../sms-primary-offcanvas";
import EditRecipients from "./edit-recipients";

const EditableAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const [show, setShow] = useState(false);
    const [result, setResult] = useState(false);
    const [data, setData] = useState({
        title: "",
        type: "",
        content: "",
        dataObject: "",
        singleObject: "",
    });
    const [canvasWidth, setCanvasWidth] = useState();

    const callBack = (action, item, appName) => {
      switch (action) {
          case "edit_recipients":
              setShow(true);
              setData((prevData) => ({
                  ...prevData,
                  content: (
                      <EditRecipients
                          item={item}
                          setShow={setShow}
                          callBack={callBack}
                          isEdit={false}
                          setResult={setResult}
                      />
                  ),
                  type: "add",
                  title: "Edit Recipients",
              }));
              setCanvasWidth("40%");
              break;

           }
  };

  const sections = [
    {
      id: 0,
      title: "Message Name",
      description: "Give your message a name",
    },
    {
      id: 1,
      title: "Recipients",
      description: "All subscribed contacts (1) in the audience",
      content: <p>Recipient details will be here.</p>,
    },
    {
      id: 2,
      title: "Content",
      description: "Create the content for your message",
      content: <p>Content editor will be here.</p>,
    },
  ];

  return (
    <>
      <Accordion className="mt-3">
        {sections.map((item) => (
          <Card key={item.id}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start gap-2">
                <i
                  className={`fa-solid pt-1 fa-circle-${
                    openIndex === item.id
                      ? "minus text-secondary"
                      : "check text-success"
                  }`}
                ></i>
                <div>
                  <h6 className="mb-0">{item.title}</h6>
                  <p className="mb-0 text-muted small">{item.description}</p>
                </div>
              </div>
              <Button
                variant="link"
                className="text-decoration-none text-primary"
                onClick={() => {
                  if (item.id === 1) {
                    callBack("edit_recipients");
                  } else if (item.id === 2) {
                    callBack("start_designing");
                  } else {
                    toggleAccordion(item.id);
                  }
                }}
              >
                Edit
              </Button>
            </Card.Header>
            <Accordion.Collapse in={openIndex === item.id}>
              <Card.Body>
                {item.id === 0 && (
                  <div>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="form-group">
                            <Form.Control
                              type="text"
                              placeholder="Campaign Name"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                )}
                
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <SmsPrimaryOffCanvas
        show={show}
        setShow={setShow}
        data={data}
        callBack={callBack}
        canvasWidth={canvasWidth}
      />
    </>
  );
};

export default EditableAccordion;