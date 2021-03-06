import React from 'react'
import './User.css'
import axios from 'axios';
import Busses from './Busses/Busses'
import Search from './Search/Search'
import SeatSelection from './SeatSelection/SeatSelection'
import Backdrop from '../Utility/Backdrop/Backdrop'
import ConfirmBooking from './ConfirmBooking/ConfirmBooking'

export default class User extends React.Component {
    state={
      busses:[],
      bus:[],
      seatStatus:[],
      SeatSelection:false,
      confirmSeat:false,
      seatBooked:[],
      busId:null
    }
    componentDidMount(){
      axios.get('http://localhost:8080/bus/viewBus')
            .then(response => {
                const busses = response.data.busses;
                this.setState({busses:busses})
                
            })
			.catch(error => {throw error});
    }
    searchBuses=(source,destination,date)=>{
      console.log(source,destination,date)
     let bus=this.state.busses.filter((bus)=>
     source.toLowerCase()===bus.fromCity.toLowerCase()  && destination.toLowerCase()===bus.toCity.toLowerCase()
      )
      this.setState({bus:bus})
    }
    bookbus=(id)=>{
      let bus=this.state.busses.find((bus)=>(id===bus._id))
      this.setState({seatStatus:bus.seatStatus})
      this.setState({SeatSelection:true})
      this.setState({busId:id})
      console.log('1',bus.seatStatus)
      

    }
    cancelBooking=()=>{
      this.setState({SeatSelection:false})
      this.setState({confirmSeat:false})
    }
    confirmSeat=(seatBooked)=>{
      console.log('2',this.state.seatStatus)
      this.setState({seatBooked:seatBooked})
      this.setState({SeatSelection:false})
      this.setState({confirmSeat:true})
    }
    proceedToPayment=()=>{
      let seatBooked=this.state.seatBooked;
      

      let newSeatStatus=this.state.seatStatus.slice();
      for(let i=0;i<seatBooked.length;i++){
        let row=seatBooked[i][0];
        let colm=parseInt(seatBooked[i][1]) ;
        newSeatStatus = newSeatStatus.map((seat)=>{
          if(seat.row===row){
            seat.status[colm-1]='booked';
          }
          return seat;
        })
       

      }
      console.log('3.',this.state.seatStatus)
      console.log('4',newSeatStatus)
      axios.put("http://localhost:8080/bus/seatUpdate/" + this.state.busId, {
            seatStatus:newSeatStatus
        })
        .then(response => {
            
        })
        .catch(error => {
            
            throw(error);
        });

      console.log(newSeatStatus)
      this.setState({SeatSelection:false})
      this.setState({confirmSeat:false})
	     axios.post("http://localhost:8080/mail/",{
        seatBooked:this.state.seatBooked,
      }).then(response=>console.log("MAIL SENT"))
      .catch(error=>console.log(error))
      alert('PAYMENT SUCCESSFILL')
    }
    render(){
       
        
        return(
             <div>
                <Backdrop show={this.state.SeatSelection} ><SeatSelection cancel={this.cancelBooking}
                seatStatus={this.state.seatStatus} confirmSeat={this.confirmSeat}/></Backdrop>
                <Backdrop show={this.state.confirmSeat} ><ConfirmBooking seatBooked={this.state.seatBooked} 
                cancel={this.cancelBooking} proceedToPayment={this.proceedToPayment}/></Backdrop>               
                <h1>WELCOME USER</h1>
                <div  className="container">
                  <div className="row">
                    <div  className="col-md-12" >
                      <Search search={this.searchBuses}/>
                    </div>
                  </div>
                  <div className="row">
                    <div  className="col-md-12">
                      <Busses bussesList={this.state.bus} book={this.bookbus}/>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
