import React from 'react'
import {Link} from 'react-router-dom'
import defaultImage from '../images/room-1.jpeg' //Fall back from image 
import PropType from "prop-types"
export default function Room({room}) {
    const {name,slug,images,price} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="not found"></img>
                <div className="price-top">
                    <h6>Rs{price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">FEATURE</Link>
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
    )
}

Room.PropType ={
    room:PropType.shape(
        {
            name:PropType.string.isRequired,
            slug:PropType.string.isRequired,
            images:PropType.arrayOf(PropType.string).isRequired,
            price:PropType.number.isRequired,

        }
    )
}