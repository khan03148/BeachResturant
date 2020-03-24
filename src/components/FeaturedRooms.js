import React, { Component } from 'react'
import {RoomContext} from "../context";
import Loading from './Loading';
import Room from "./Room";
import Title from "./Title";


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        //geting data from context
        let {loading, featuredRooms:rooms} =this.context;
        //send data To Room component and get return data
        rooms = rooms.map(room => { 
        return <Room key={room.id} room={room}/>;
 });
        
 return (

            <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
            {/* rooms are get from Room.js Component and display here */}
                {loading ? <Loading/> : rooms}
            </div>
            
            </section>
        )
    }
}

