import React from 'react';
import './Card.css'
import Button from "../Button"

  
const Card = (props) => (
    
    <div class="card-panel teal">
    <img src={props.img}></img>

    </div>

)

export default Card;