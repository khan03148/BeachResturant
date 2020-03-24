import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";


const Error = () => {
    return (
       <Hero hero="defaultHero">
           <Banner title="404 Error" subtitle="page not found">
           <Link to="/" className="btn-primary">Return To Home</Link>

           </Banner>
       </Hero>
    )
}

export default Error;