import "./workPage.css";
import {Work} from '..';
import { useNavigate } from "react-router-dom";


function WorkPage(){

    let navigate = useNavigate(); 
    const routeChangeStuck = () =>{ 
        let path = `./stuck`; 
        navigate(path);
      }

      const routeChangeAnt = () =>{ 
        let path = `./ant`; 
        navigate(path);
      }

      const routeChangeSpace = () =>{ 
        // window.location.href = 'https://www.space-talks.com/';
        window.open(window.location.href = 'https://www.space-talks.com/', '_blank');
      }


    return(
        <section>
            <section className="page-title">
                <p className="page-title-text">My Work</p>
            </section>
            <Work onClickFunction={routeChangeStuck} title='UX Design - STUCK?' imgSrc='./stuck-cover.png' imgID='stuck' description='We designed STUCK?, a mobile application that aims to help users conquer a challenge every day. Users can choose one easy, medium, or difficult challenge from the three choices that STUCK? provides every day, based on how much time or effort they want to dedicate to the challenge.' ></Work>
            <Work onClickFunction={routeChangeAnt} title="Ant's Adventure - Mobile Game" imgSrc='./ant-cover.png' imgID='ant' description="Ant's Adventure is a mobile motion-sensing flying game. The player is a little ant, who is sick of the life being exploited and working 996, so you ride a leaf and fly for free. " ></Work>
            <Work onClickFunction={routeChangeSpace} title="NYU Space Talk Website" imgSrc='./space-cover.png' imgID='space' description="NYU Space Talks is a lecture series convened by Professor Alexander C. T. Geppert at NYU's Center for European and Mediterranean Studies and NYU Shanghai with the Department of History in New York City. Each semester, established and upcoming scholars present the latest research on the history and politics of outer space, extraterrestrial life and astroculture, both in Europe and around the globe. This website is built for registration and archiving the event. " ></Work>
        </section>
    );
}



export default WorkPage;