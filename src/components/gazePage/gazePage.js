import {MenuContainer} from '../../components'
import { useState } from 'react';
import "./gazePage.css";

function GazePage(){
    const [menu, setMenu]= useState({})

    return(
        <div>
        <div className='menu-content-container'>
        <MenuContainer setMenu={setMenu} nowShowing={"gaze"}/>

        <div>
			<img src={require('./Gaze-1.jpg')} style={{width:"100%"}}></img>
            <img src={require('./Gaze-2.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-3.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-4.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-5.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-6.jpg')} style={{width:"100%"}}></img>

        </div>
        </div>

        </div>
    )
}

export default GazePage;