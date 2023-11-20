import {MenuContainer} from '..'
import { useState } from 'react';
import "./samsaraPage.css";

function SamsaraPage(){
    const [menu, setMenu]= useState({})

    return(
        <div>
        <div className='menu-content-container'>
        <MenuContainer setMenu={setMenu} nowShowing={"gaze"}/>

        <div>
			<img src={require('./Samsara_1.png')} style={{width:"100%"}}></img>
            <img src={require('./Samsara_2.png')} style={{width:"100%"}}></img>
			<img src={require('./Samsara_3.png')} style={{width:"100%"}}></img>
			<img src={require('./Samsara_4.png')} style={{width:"100%"}}></img>
			<img src={require('./Samsara_5.png')} style={{width:"100%"}}></img>
			<img src={require('./Samsara_6.png')} style={{width:"100%"}}></img>
			<img src={require('./Samsara_7.png')} style={{width:"100%"}}></img>

        </div>
        </div>

        </div>
    )
}

export default SamsaraPage;