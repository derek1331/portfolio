import React from 'react';
import './Projects.css';
import Button from  '../Button';
import Wrapper from '../Wrapper'
import Card from '../Card'
import Scrollspy from 'react-scrollspy'


  
const Projects = () => (
    
    <div id="section-2" className='hero flex projects'>

    <div className='section flex'>
    <div className='flex-row'>
    <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">

        <Button text='About' href="#section-1"/>
        <Button text='Projects' href='#section-2'/>
        <Button text='Contact' href='#section-3'/>

    </Scrollspy>
    </div>
        <div className='hero-message'>
        
            <hr></hr>
            <span> Projects</span>
        </div>
        <div className='flex-project'>
        <Card />

        </div>

    </div>
    
    </div>

)

export default Projects;