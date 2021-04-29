import React from 'react';
import Cards from '../components/Cards/Cards';
import Nav from '../components/Nav/Nav';
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Cards/Card';
import classNames from './Home.module.css'
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

function Home() {
    return (
        <div>
            <Nav/>
            <Carousel/>
            <div className = {classNames.divContainer}>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <Cards />
            <Contact/>
            <Footer />                      

        </div>
    )
}

export default Home
