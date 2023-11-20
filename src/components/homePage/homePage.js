import {Header, MainPage, WorkPage,MenuContainer,AboutContainer} from '../../components'
import "./homePage.css";
import { useState } from 'react';


function HomePage(){
    const [menu, setMenu]= useState({})


        return(
            <div>
            {/* <Header /> */}
            {/* <MainPage />
            <WorkPage /> */}
            <div className='menu-content-container'>
            <MenuContainer setMenu={setMenu} nowShowing={"about"}/>
            <AboutContainer project={menu}/>
            </div>
            </div>
        );
    
    

}

export default HomePage;
