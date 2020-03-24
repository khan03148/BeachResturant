import React, { Component } from 'react'

// we exported data as default so we remane it as "items"
import items from "./data";

// create object RoomContext
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state ={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:600,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false

    };
//getdata

componentDidMount(){
    //this.getdata
    //13 rooms as array goted
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room=> room.featured ===true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max( ...rooms.map(item => item.size ));

    this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxSize
        



    });
    
}

//Items are destruced here and pass to component didmount
formatData(items){
let tempItems = items.map(item =>{
    let id = item.sys.id;
    
    let images = item.fields.images.map(image=>image.fields.file.url);
    
    let room = {...item.fields,images,id};
    return room;
});

return tempItems;
};

 
getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    //find and return object to single room page
    const room =tempRooms.find(room => room.slug === slug);
    return room;
 };

handleChange = event => {
    const target = event.target;
    // console.log("event", target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    
    this.setState(  //its is sync so we pass callback fun this.filterooms
        {
            [name]: value
        }, this.filterRooms
    );
    
};

filterRooms = () =>{
    let {
        rooms, type, capacity, price, minSize, maxSize, breakfast, pets
    } = this.state;
//all rooms 
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);


//filter by type   
    if(type !== "all"){
        tempRooms = tempRooms.filter( item => item.type === type);
    }

//filter by capacity
    if(capacity !== 1){
    tempRooms = tempRooms.filter( room => 
         room.capacity >= capacity
    );
}

//rang  filter
tempRooms = tempRooms.filter( room => room.price <= price);
//fitler by size
    tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize);

 //filter by breakfast
 if (breakfast) {
    tempRooms = tempRooms.filter(room => room.breakfast === true);
  }
  //filter by pets
  if (pets) {
    tempRooms = tempRooms.filter(room => room.pets === true);
  }
//set state here
    this.setState({
          sortedRooms: tempRooms
    }
    );

};

    
render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}//end of class Roomprovier

const RoomConsumer = RoomContext.Consumer;

//higher order funtion 
 export function withRoomConsumer(Component) {
     return function consumerWrapper(props) {
         return (
             <RoomConsumer>
                 {value => <Component {...props} context={value} />}
             </RoomConsumer>
         );
     };
 }; //end high order function

 //export separte all of three
 export{RoomProvider, RoomContext, RoomConsumer};





 