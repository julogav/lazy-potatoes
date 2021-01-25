import React from 'react'
import { Button, Card } from 'react-bootstrap'
import TripCardModal from './TripCardModal'

export default function TripCard(props) {
  const [modalShow, setModalShow] = React.useState(false)

  const { id, area, time, store, quantity, name } = props.trip

  console.log(props.trip);
  return (
    <Card className='m-3 tripCard' style={{ width: '18rem' }} key={id}>
      <Card.Body>
        <Card.Title>{name}'s trip</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Area: {area}</Card.Subtitle>
        <Card.Text>Store {store}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Card.Text>Able to carry {quantity}</Card.Text>
        <Button onClick={() => setModalShow(true)}>Make a Request</Button>
        <TripCardModal
          trip={props.trip}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  )
}
