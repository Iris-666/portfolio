import "./aboutContainer.css";
import {GazePage} from '../../components'


function AboutContainer({project}){

    console.log(project)

 if(project == "gaze"){
        return(
            <div>
                <GazePage/>
            </div>

        );
    }else if(project == "samsara"){
        return(
            <div></div>
        )

    }else{
        return(
            <div className="content-container">
                <div className="content-container-padding">
                <img src={require('./myPhoto.gif')} className="myPhoto"></img>
                <p className="selfIntro" style={{marginTop: "20px"}}>Tian Qin is currently an Interactive Media Arts associalte fellow at NYU Shanghai and a VR/AR developer at CHAOS Studio.</p>
                <br></br>
                <p className="selfIntro" style={{marginBottom: "20px"}}>She is also a UX designer, creative coder, front-end developer, and dancer. Her work focuses on designing digital experience, including VR/AR, game, website that rise people’s awareness for physcial environment, nature, and their own life.</p>
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
                    // href={Pdf}
                    href={require("./Tian_Qin_Resume.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginTop: '0', color:'black'}}
                    >
                    CV
                    </a>
                    <p className='aboutPage-text-orange'>UPDATED NOV 2023</p>
  
                </div>      
                    
            </div>

        );

    }
}

export default AboutContainer;