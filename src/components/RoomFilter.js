import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from "../components/Title"

//Get all uniqe value
const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const{
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context;

        //Get all uniqe Type
    let types = getUnique(rooms,'type');

    types=['all',...types];

    //Map to JSX

    types = types.map((item,index)=>{
    return <option value={item} id={index}>{item}</option>
    }
    );

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return <option value={item}id={index}>{item}</option>
        }
        );

    return (
        <section className="filter-container">
            <Title title="Search-room"></Title>
            <form className="filter-form">
                {/* {select type} */}


                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>



                {/* {select type end} */}

                 {/* {guests} */}


                 <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>



                {/* {guests} */}
                
                {/* {Price} */}

                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} if = {price} value={price} onChange={handleChange} className="form-control"></input>
                </div>

                {/* {Price end} */}

                   {/* {Size} */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"></input>  
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"></input>  
                    </div>
                </div>


                {/* {Size end} */}

                {/* {Extra } */}

                
                <div className="form-group">
                    <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} className="size-input"></input>  
                    <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} className="size-input"></input>  
                    <label htmlFor="pets">Pets</label>
                    </div>
                </div>


                {/* {Extra end} */}



            </form>
        </section>
    )
}
