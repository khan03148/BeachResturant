import React, { Component } from 'react'
import Title from "./Title";
import {FaCocktail,FaHiking ,FaShuttleVan , FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state ={
       services: [
           {
               icon:<FaCocktail/>,
               title:"Free Choktails",
               info:"Loremi ipsum  Loremi ipsum Loremi ipsum Loremi ipsum"
           },
           
           {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Loremi ipsum  Loremi ipsum Loremi ipsum Loremi ipsum"
        },

        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Loremi ipsum  Loremi ipsum Loremi ipsum Loremi ipsum"
        },

        {
            icon:<FaBeer/>,
            title:"Strong Beer",
            info:"Loremi ipsum  Loremi ipsum Loremi ipsum Loremi ipsum"
        }
       ] 
    }
    render() {
        return (
            <section className="services">
                 <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            
            </section>
        );
    }
}
