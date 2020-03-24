import React from 'react'
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../context";
import Loading from "./Loading";


// getting data from Higher function from context
 function RoomContainer({context}) {
   const {loading, sortedRooms, rooms} = context;
   if(loading) {
       return <Loading/>;
   }
    return (
        <>
                 
                <RoomsFilter room={rooms}/>
                <RoomsList room={sortedRooms}/>
        </>
    );
}
export default withRoomConsumer(RoomContainer);












// in class base using Roomconsumer  for context api usage

// import React from 'react'
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import {RoomConsumer} from "../context";
// import Loading from "./Loading";

// export default function RoomContainer() {
//     return (
       
//         <RoomConsumer> //geting from context to render props
//             {value => {
                
//                 const {loading, sortedRooms, rooms } = value;
                
//                 if (loading){
//                     return <Loading/>
//                 }
           
//                 return( <div>
//                 hello from roomscontainer
//                 <RoomsFilter room={rooms}/>
//                 <RoomsList room={sortedRooms}/>
//                     </div>
//                  );
//         }} 
//         </RoomConsumer>
//     );
// }
