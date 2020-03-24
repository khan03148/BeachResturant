import React from 'react'
import Room from "./Room";

//Dispalying data and getting room parametar from RoomContainer
export default function RoomsList({room}) {
   if(room.length === 0){
       return (<div className="empty-search">
           <h4>No such room for your search parameter...</h4>
       </div>
       );
   }
    return (
        <section className="roomslist">
            <div className="roomslist-center">

            { room.map( item =>{
                    {/* sending props to Room.js comp */}
                    return <Room key={item.id} room={item}/>;
                })}
            </div>
        </section>
    )
}
