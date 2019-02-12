import React from 'react'
import Addbus from './AddBus/AddBus'
import ViewBusses from './ViewBusses/ViewBusses'

export default class Admin extends React.Component {
    render(){
        return(
            <div>
                <h1>WELCOME ADMIN</h1>
                <Addbus/>
                <ViewBusses/>
            </div>
            
        )
    }
}