import React from 'react'
import { Row,Col,
   } from 'reactstrap';
import './User.css'
import Busses from './Busses/Busses'
import Search from './Search/Search'

const bussesArray = [
  {source:'A',
  destination:'Z',
  busName:'SAURAV TRAVELS',
  busDescription:'SCANIA AC Multi Axle Semi Sleeper (2 + 2)',
  sourceDate:'2019-02-09',
  destinationDate:'2019-02-10',
  sourceTime:'4:30',
  destinationTime:'5:30',
  price:23.4},
  {source:'B',
  destination:'Y',
  busName:'KUMAR TRAVELS',
  busDescription:'SCANIA AC Multi Axle Semi Sleeper (2 + 2)',
  sourceDate:'2019-02-11',
  destinationDate:'2019-02-09',
  sourceTime:'5:30',
  destinationTime:'6:30',
  price:45.4}
]

export default class User extends React.Component {
    state={
      busses:[]
    }
    searchBuses=(source,destination,date)=>{
      console.log(source,destination,date)
     let busses=bussesArray.filter((bus)=>
        source===bus.source  && destination===bus.destination && date===bus.sourceDate
      )

      this.setState({busses:busses})
    }
    render(){
       
        
        return(
             <div>
                <h1>WELCOME USER</h1>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Search search={this.searchBuses}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Busses bussesList={this.state.busses}/>
                  </Col>
                </Row>
            </div>
        )
    }
}