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
        window.open(window.location.href = 'https://www.space-talks.com/', '_blank');
      }

      const routeChangeWander = () =>{ 
        window.open(window.location.href = 'https://wp.nyu.edu/shanghai-ima-capstonestudio/tq363/', '_blank');
      }

      const routeChangeHoodie = () =>{ 
        window.open(window.location.href = 'https://mp.weixin.qq.com/s/N4KDRqcnmdqr8PNGcJgYdw', '_blank');
      }

      const routeChangeHorse = () =>{ 
        window.open(window.location.href = 'https://heady-atmosphere-507.notion.site/Final-Project-a-Wood-Rocking-Horse-for-Adults-5f8dfc5408ec4becb0d85add7cde6cbb', '_blank');
      }


    return(
        <section>
            <section className="page-title">
                <p className="page-title-text">My Work</p>
            </section>
            <Work onClickFunction={routeChangeWander} title='Wanderlust - Take you to go for a wander with AR' imgSrc='./Wanderlust-image1.jpeg' imgID='wanderlust' description='Wanderlust is an AR project that leads people to wander and enjoy a pure walking without any practical purpose. It would generate a random route for the users every time and leads them to explore the area around them through AR.' ></Work>
            <Work onClickFunction={routeChangeStuck} title='STUCK? - UX Design' imgSrc='./stuck-cover.png' imgID='stuck' description='We designed STUCK?, a mobile application that aims to help users conquer a challenge every day. Users can choose one easy, medium, or difficult challenge from the three choices that STUCK? provides every day, based on how much time or effort they want to dedicate to the challenge.' ></Work>
            <Work onClickFunction={routeChangeAnt} title="Ant's Adventure - Mobile Game" imgSrc='./ant-cover.png' imgID='ant' description="Ant's Adventure is a mobile motion-sensing flying game. The player is a little ant, who is sick of the life being exploited and working 996, so you ride a leaf and fly for free. " ></Work>
            <Work onClickFunction={routeChangeSpace} title="NYU Space Talk Website" imgSrc='./space-cover.png' imgID='space' description="NYU Space Talks is a lecture series convened by Professor Alexander C. T. Geppert at NYU's Center for European and Mediterranean Studies and NYU Shanghai with the Department of History in New York City. Each semester, established and upcoming scholars present the latest research on the history and politics of outer space, extraterrestrial life and astroculture, both in Europe and around the globe. This website is built for registration and archiving the event. " ></Work>
            <Work onClickFunction={routeChangeHoodie} title="NYU Shanghai Hoodie Design" imgSrc='./hoodie-cover.jpg' imgID='hoodie' description="I designed a series of hoodies for NYU Shanghai Youth League. All profits were donated to Cyan Project and schools in Jiangxi to be used for supporting education projects. More than 200 hoodies were sold and raised more than 10,000 RMB. " ></Work>
            <Work onClickFunction={routeChangeHorse} title="A Wood Rocking Horse for Adults - Woodworking for Art and Design" imgSrc='./rockinghorse-cover.jpg' imgID='horse' description="This is a wood rocking horse designed for adults, which is large (1 meter long) and strong (tested by someone who weighs 80 kg) enough for an adult to sit on. It took me one and a half month in total to complete the design and production. " ></Work>
        </section>
    );
}



export default WorkPage;