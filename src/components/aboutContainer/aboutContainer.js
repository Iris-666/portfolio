import "./aboutContainer.css";
import {GazePage} from '../../components'
import { useState } from 'react';


function AboutContainer({project}){

    const [click, setClick]= useState(false)

    const openMore = () =>{ 
        if(!click){
            setClick(true)
        }else{
            setClick(false)
        }
       
      }


        return(
            <div className="content-container">
                <div className="content-container-padding">
                <img src={require('./myPhoto.gif')} className="myPhoto"></img>
                <p className="selfIntro" style={{marginTop: "20px"}}>Tian Qin is currently an Interactive Media Arts associalte fellow at NYU Shanghai and a VR/AR developer at CHAOS Studio.</p>
                <br></br>
                <p className="selfIntro" style={{marginBottom: "20px"}}>She is also an educator, creative coder, front-end developer, and dancer. Most of her creative work involves digital media, like VR, AR, and games, focusing on the impact of technology on people’s lives. She enjoys seeking inspiration for her creations while wandering.</p>
                <a
                    className="selfIntro"
                    href="mailto: tq363@nyu.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:'black'}}
                    >
                    Email: tq363@nyu.edu
                    </a>
                    <p className='selfIntro' style={{marginTop: "0", marginBottom:'0'}}>Wechat: ttIris666</p>
                    <a
                    className="selfIntro"
                    href={require("./Tian_Qin_Resume.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginTop: '0', color:'black'}}
                    >
                    CV
                    </a>
                    <p className='aboutPage-text-orange'>UPDATED NOV 2023</p>
                    <br></br>

                        
                    <a onClick={openMore} className="selfIntro" rel="noopener noreferrer" style={{paddingBottom: '10px', fontWeight:'bold', paddingTop:'10px',cursor:'pointer'}}>More About Me </a>
                    <div className="moreAboutMe" style={{display:` ${click ? 'block' : 'none'}`}}>

                    <p className="selfIntro">Besides these, in my life, I immensely enjoy wandering around the world. Travel experiences in different places always bring me new inspiration. Watching the northern light, skydiving, scuba diving, skiing, or lying in the desert gazing at the Milky Way, make me feel that my world is vast, boundless, and without limits.</p>
                    <div className="photoContainer">
                    <img src={require('./aboutme1.png')} className="aboutmePhoto"></img>
                    <img src={require('./aboutme2.png')} className="aboutmePhoto"></img>
                    <img src={require('./aboutme3.png')} className="aboutmePhoto"></img>
                    <img src={require('./aboutme4.png')} className="aboutmePhoto"></img>

                    </div>
                    <br></br>
                    <p className="selfIntro">I also love picking up new skills. I play the guitar, erhu, bamboo flute, and piano. I also dance, do woodworking, and wool felt craft. </p>
                    <div className="photoContainer">
                    <img src={require('./aboutme5.png')} className="aboutmePhoto"></img>
                    <img src={require('./aboutme6.png')} className="aboutmePhoto"></img>
                    <img src={require('./aboutme7.png')} className="aboutmePhoto"></img>
                    <img src={require('./aboutme8.png')} className="aboutmePhoto"></img>

                    </div>
                    <br></br>
                    <p className="selfIntro">I'm also a dog lover. I adopted two dogs, Berry and Mashu. </p>
                    <div className="photoContainer">
                    <img src={require('./mashu.png')} className="aboutmePhoto"></img>
                    <img src={require('./berry.png')} className="aboutmePhoto"></img>
                    </div>

                    </div>
                </div>      
                    
            </div>

        );

    
}

export default AboutContainer;