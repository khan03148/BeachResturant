// using context api using reat hooks in filter component

import React from 'react'
import {useContext} from "react";
import {RoomContext} from "../context";
import Title from "./Title";

//to get unique ..function
const getUnique = (items, value) => {
   
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({room}) {
    
    const context = useContext(RoomContext);

    const { handleChange, type, breakfast, pets, capacity, price, minPrice, maxPrice, minSize, maxSize} = context;
    
    // get unique types
    let types = getUnique(room, 'type');
    
    
    //add "all" string to array (types)
    types = ['all', ...types];
    
    //map to jsx
    types = types.map((item , index)=> {
        return <option value={item} key={index}>{item}</option>
    });

    let people =getUnique(room, "capacity");
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });
    
    return (
        <section className="filter-container">
        <Title title="Search Rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                
                </div>
                {/* end select type */}

                {/* guest */}
                <div className="form-group">
                    <label htmlFor="Capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* guest */}
                 
                 {/* Price range */} 
                    <div className="form-group">
                        <label htmlFor="Price"> Room Price ${price}</label>
                        <input type="range" name="price" id="price"  
                        min={minPrice} max={maxPrice}
                        value={price} className="form-control" 
                        onChange={handleChange}/>
                    </div>
                 {/* Price range end */}

                 {/* size*/}
                 <div className="form-group">
                    <label htmlFor="price">room size </label>
                        <div className="size-inputs">
                            <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                            />
                            <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                            />
                        </div>
                </div>
                 {/* end of size*/}

                {/* extra*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="pets"
                        checked={pets}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
                {/* end of extra*/}


            </form>
            
        </section>
    )
}
