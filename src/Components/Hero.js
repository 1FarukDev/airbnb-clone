import react from 'react'
import heroimg from '../images/Heroimg.png'
export default function Hero(){
    return(
        <div className='Hero--section'>
            <div className='Hero--img'>
                <img src={heroimg}/>
            </div>
            <h1 className='Hero--header'>
                Online Experiences
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p></h1>

        </div>
    )
}