import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                tilte:"Free Cocktails",
                info:"Hello, you are in Cocktails block "

            },
            {
                icon:<FaHiking/>,
                tilte:"Hiking",
                info:"Hello, you are in Hiking block "

            },
            {
                icon:<FaShuttleVan/>,
                tilte:"Shuttlevan",
                info:"Hello, you are in Shuttlevan block "

            },
            {
                icon:<FaBeer/>,
                tilte:"Free Beer",
                info:"Hello, you are in Beer block "

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <artical key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.tilte}</h6>
                            <p>{item.info}</p></artical>
                    })
                    }
                </div>
            </section>
        )
    }
}

