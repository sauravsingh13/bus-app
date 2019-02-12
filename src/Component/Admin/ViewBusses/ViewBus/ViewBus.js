import React from 'react'
import { Card, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';
import './ViewBus.css'

const viewBus = (props) => {
    return(
    //     <Card className="bus">
    //     <CardBody>
    //     <div className="bus_left">
    //       <CardTitle className="CardTitle">{props.busName}</CardTitle>
    //       <CardText style={{marginBottom:'0%'}}>{props.busDescription}</CardText>
         
    //       </div>
    //         <div className="bus_center">
    //       <p style={{marginBottom:'0%'}}>{props.sourceTime} &rarr; {props.destinationTime}</p>
    //         </div>
    //       <div className="bus_right">
    //       <p style={{marginBottom:'0%'}}>Price=₹{props.price}</p>
    //       <Button color="success">Book Now</Button>
    //       </div>
    //     </CardBody>
    // </Card>
    <div className="ViewBus">
        <h3><strong>NAME:-</strong>{props.busName}</h3>
        <p><strong>DESCRIPTION:-</strong>{props.busDescription}</p>
        <p><strong>SOURCE:-</strong>{props.source}</p>
        <p><strong>DESTINATION:-</strong>{props.destination}</p>
        <p><strong>SOURCE-DATE:-</strong>{props.sourceDate}</p>
        <p><strong>SOURCE-TIME:-</strong>{props.sourceTime}</p>
        <p><strong>DESTINATION-DATE:-</strong>{props.destinationDate}</p>
        <p><strong>DESTINATION-TIME:-</strong>{props.destinationTime}</p>
        <p><strong>PRICE:-</strong>{props.price}</p>
    </div>
    )
}
export default viewBus;