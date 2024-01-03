import {MenuContainer} from '..'
import { useState } from 'react';
import "./wanderlustPage.css";

function WanderlustPage(){
    const [menu, setMenu]= useState({})

    return(
        <div>
        <div className='menu-content-container'>
        <MenuContainer setMenu={setMenu} nowShowing={"gaze"}/>

        <div>
			<img src={require('./wanderlust-1.jpg')} style={{width:"100%"}}></img>
            <img src={require('./wanderlust-2.jpg')} style={{width:"100%"}}></img>
			<img src={require('./wanderlust-3.jpg')} style={{width:"100%"}}></img>
			<img src={require('./wanderlust-4.jpg')} style={{width:"100%"}}></img>
			<img src={require('./wanderlust-5.jpg')} style={{width:"100%"}}></img>

        </div>
        </div>

        </div>
    )
}

export default WanderlustPage;