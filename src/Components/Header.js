import React from 'react'
import Airbnb from './Images/airbnb.png'
import '../index.css'
export default function Header(){
    return (
        <div className='header'>
                 <img src={Airbnb}/>
        </div>
    )
}