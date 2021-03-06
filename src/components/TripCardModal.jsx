import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "./tripCardModal.css";



export default function TripCardModal(props) {
  //get the trip doc from the db, and axios.put to add the request
  const { id, area, time, store, quantity } = props.trip;
  const [requestList, setRequestList] = useState("");
  const [reqItem1, setReqItem1] = useState("");
  const [reqItem2, setReqItem2] = useState("");
  const [reqItem3, setReqItem3] = useState("");
  const [reqDropOff, setReqDropOff] = useState("");
  const [error, setError] = useState(false);

  function sendRequest() {
    if (!reqItem1 || !reqDropOff) {
      setError(true);
      return;
    }
    const requestObject = [
      {
        id,
        reqItem1,
        reqItem2,
        reqItem3,
        reqDropOff,
      },
    ];
    setRequestList(requestObject);
    console.log(requestObject);
    props.onHide();
  }
  console.log(requestList);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Alert
        show={error}
        variant="danger"
        onClose={() => setError(false)}
        dismissible
      >
        <Alert.Heading>Oh no! You got an error 🙀</Alert.Heading>
        <p>
          You must fill out at least one requested item and your information in
          order to send a request...
        </p>
      </Alert>
      <Modal.Header closeButton>
        <Button variant="light"  type="button">
          x
        </Button>

        <Modal.Title id="contained-modal-title-vcenter">
          Juliet's trip in <b>{area}</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          Store: <b>{store}</b> Time:<b> {time}</b>
        </div>
        <div>
          Username is willing to carry <b> {quantity} </b>items
        </div>
        {/* <div>Please state the Items you need</div> */}
        <Form>
          <Form.Group id="request">
            <Form.Label>Please state the Items you need</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="string"
                  required
                  name="reqItem1"
                  onChange={(e) => setReqItem1(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="string"
                  name="reqItem2"
                  onChange={(e) => setReqItem2(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="string"
                  name="reqItem3"
                  onChange={(e) => setReqItem3(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Drop Off Location</Form.Label>
                <Form.Control
                  type="string"
                  required
                  name="reqDropOff"
                  onChange={(e) => setReqDropOff(e.target.value)}
                />
              </Col>
              <Col>
                <Button onClick={sendRequest} className="request-button">
                  Send Request
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>

        {/* <div className="request">
          <input
            type="string"
            name="reqItem1"
            onChange={(e) => setReqItem1(e.target.value)}
          />
          <input
            type="string"
            name="reqItem2"
            onChange={(e) => setReqItem2(e.target.value)}
          />
          <input
            type="string"
            name="reqItem3"
            onChange={(e) => setReqItem3(e.target.value)}
          />

          <p>Drop Off Location</p>
          <input
            type="string"
            name="reqDropOff"
            onChange={(e) => setReqDropOff(e.target.value)}
          /> */}
        {/* <Button onClick={sendRequest}>Send Request</Button> */}
        {/* </div> */}
      </Modal.Body>
      {requestList && (
        <Modal.Footer>
          <div>
            {requestList.map((req) => (
              <div key={req.id} req={req.requestObject}>
                items: {reqItem1}
                drop-off: {reqDropOff}
                <Button>Accept</Button>
                <Button>Refuse</Button>
              </div>
            ))}
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
}
