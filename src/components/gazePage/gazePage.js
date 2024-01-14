import {MenuContainer} from '../../components'
import { useState } from 'react';
import "./gazePage.css";

function GazePage(){
    const [menu, setMenu]= useState({})

    return(
        <div>
        <div className='menu-content-container'>
        <MenuContainer setMenu={setMenu} nowShowing={"gaze"}/>

        <div style={{backgroundColor: "black"}}>
			<img src={require('./Gaze-1.jpg')} style={{width:"100%"}}></img>
            <img src={require('./Gaze-2.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-3.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-4.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-5.jpg')} style={{width:"100%"}}></img>
			<img src={require('./Gaze-6.jpg')} style={{width:"100%"}}></img>
            {/* <div style={{color:"white", marginTop:"30px",marginLeft:"20px",fontSize:"30px"}}>Demo</div> */}
            <img  src={require('./gaze-gif1.gif')} style={{width:"45%"}}></img>
            <img  src={require('./gaze-gif2.gif')} style={{width:"45%", marginLeft:"30px"}}></img>

            <video controls width="50%">
                <source src={require('./gaze_video.mp4')} type="video/mp4"></source>
            </video>
        </div>
        </div>

        </div>
    )
}

export default GazePage;