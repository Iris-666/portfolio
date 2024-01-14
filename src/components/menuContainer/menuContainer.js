import "./menuContainer.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



function MenuContainer(props){
	
	let navigate = useNavigate(); 

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	  }
	

	  const routeChangeSpace = () =>{ 
        openInNewTab('https://www.space-talks.com/');
      }

      const routeChangeWander = () =>{ 
        openInNewTab('https://wp.nyu.edu/shanghai-ima-capstonestudio/tq363/');
      }

	  const routeChangeHoodie = () =>{ 
        openInNewTab('https://mp.weixin.qq.com/s/N4KDRqcnmdqr8PNGcJgYdw');
      }

	  const routeChangeHorse = () =>{ 
        openInNewTab('https://heady-atmosphere-507.notion.site/Final-Project-a-Wood-Rocking-Horse-for-Adults-5f8dfc5408ec4becb0d85add7cde6cbb');
      }
	  const routeChangeAnt = () =>{ 
        openInNewTab('https://drive.google.com/file/d/1C3Vt90RX1sy1PePoYwQi0TOCrvePviMC/view');
      }

	  const routeChangeLetter = () =>{
		openInNewTab(`https://drive.google.com/file/d/1_Vmjmtg3ZVgP7P-j5srvyQfc5xiq0Msn/view?usp=sharing`);
	  }
	  const routeChangeMoon = () =>{ 
        openInNewTab('https://github.com/Iris-666/abc-student-repo/blob/master/projects/projectC/README.md');
      }

	const [whichProject, setWhichProject] = useState({});

	const clickGaze = () =>{
		setWhichProject("gaze")
	}
	const clickSamsara = () =>{
		setWhichProject("samsara")
	}

	props.setMenu(whichProject);

    return(

    <div className="menu-container">

    <div className="menu-container-padding">
				<div><h2>Selected Projects</h2></div>

				<hr></hr>
				<a href="./#/gaze" className="menuLink" >
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>GAZE</b>
								<div className="largerGrey">2023</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >An interactive installation, draws inspiration from Nietzsche's timeless words: "When you peer into the abyss, it gazes back at you." This project discusses in depth the complex relationship between artificial intelligence and us humans. It beckons the audience to reflect upon the profound impact of technological progress.</div>
								<div style={{color:'#ff7800'}}>Role: Main Programmer, Designer</div>
								<div style={{color:'#747474'}}>#Artificial Intelligence #Interactive Installation #Unity </div>
								</div>
							<img src={require('./gaze_small.png')} style={{width:"120px",height:'120px', marginLeft: '5px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a href="./#/wanderlust" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b style={{marginBottom:'5px'}}>Wanderlust</b>
								<div className="largerGrey">2021-2022</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >An AR project that leads people to wander and enjoy a pure walking without any practical purpose. It would generate a random route for the users every time and leads them to explore the area around them through AR.</div>
								<div style={{color:'#ff7800'}}>Solo Developer</div>
								<div style={{color:'#747474'}}>#Augmented Reality #Unity Engine #Walking Art </div>
								</div>
							<img src={require('./wanderlust_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>

					</div>
				</a>
				
				<hr></hr>
				<a className="menuLink" href="./#/samsara" onClick={clickSamsara}>
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Samsara</b>
								<div className="largerGrey">2022-2023</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >Samsara offers an immersive VR storytelling journey. Step into a dreamlike realm of love and healing alongside Rosie and Isac. In this enchanting garden, players can interact freely with the animals and reveal the heartwarming story behind the garden. </div>
								<div style={{color:'#ff7800'}}>Role: Interaction Designer, Main Programmer</div>
								<div style={{color:'#747474'}}>#VR #Unity #Storytelling #Animal Interaction </div>
								</div>
							<img src={require('./samsara_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>

				<hr></hr>
				<a className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Otter's Adventure</b>
								<div className="largerGrey">2022-2023</div>	
							</div>
							<div className="menu-grid-item">

							<div>
							<div>A WeChat Mini-Program game for a fruit tea brand “OTTERdun”. The low-poly casual game educates players about otter conservation through interactive tasks in a forest setting. Since its launch in April 2023, the game has attracted over one thousand players.</div>
							<div style={{color:'#ff7800'}}>Role: Main Level Designer, Main Developer</div>
							<div style={{color:'#747474'}}>#Game Design #Unity Engine #Wechat Miniprogram</div>
							</div>
							<img src={require('./otter_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a onClick={routeChangeLetter} className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Letter</b>
								<div className="largerGrey">2023</div>	
							</div>
							<div className="menu-grid-item">
							<div>
							<div>An AR Wechat Mini-program for the China Telecommunications Museum's immersive theater. Audience need to scan the target objects with the AR program to find out the passwords or clues in the play. </div>
							<div style={{color:'#ff7800'}}>Solo Developer</div>
						<div style={{color:'#747474'}}>#Augmented Reality #Wechat Miniprogram #Immersive Theater</div>
						</div>
						<img src={require('./letter_small.png')} style={{width:"120px",height:'120px'}}></img>
						</div>
						</div>
					</div>
				</a>
				<hr></hr>

				<br></br>
				<div><h2>Design And Crafts</h2></div>
				<hr></hr>
				<a onClick={routeChangeHorse} className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid-technical">
							<div className="menu-grid-item">
								<b>A Rocking Horse for Adults</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">
								<div >A wood rocking horse designed for adults, which is large (1 meter long) and strong (tested by someone who weighs 80 kg) enough for an adult to sit on. It took me one and a half month in total to complete the design and production.</div>
							<img src={require('./horse_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a href="./#/stuck" className="menuLink">
					<div className="menu-improved">
					<div className="menu-grid-technical">
							<div className="menu-grid-item">
								<b>STUCK?</b>
								<div className="largerGrey">2022</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >We designed STUCK?, a mobile application that aims to help users conquer a challenge every day. Users can choose one easy, medium, or difficult challenge from the three choices that STUCK? provides every day, based on how much time or effort they want to dedicate to the challenge.</div>
								<div style={{color:'#ff7800'}}>Role: UX Designer, Illustrator, Researcher</div>
								</div>
							<img src={require('./stuck_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a onClick={routeChangeHoodie} className="menuLink">
					<div className="menu-improved">
					<div className="menu-grid-technical">
							<div className="menu-grid-item">
								<b>NYU Shanghai Hoodie Design</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >I designed a series of hoodies for NYU Shanghai Youth League. All profits were donated to Cyan Project and schools in Jiangxi to be used for supporting education projects. More than 200 hoodies were sold and raised more than 10,000 RMB. </div>
								<div style={{color:'#ff7800'}}>Role: Designer</div>
								</div>
							<img src={require('./hoodie_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a onClick={routeChangeSpace} className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid-technical">
							<div className="menu-grid-item">
								<b>NYU Space Talk Website</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >NYU Space Talks is a lecture series. Each semester, established and upcoming scholars present the latest research on the history and politics of outer space, extraterrestrial life and astroculture, both in Europe and around the globe. This website is built for registration and archiving the event. </div>
								<div style={{color:'#ff7800'}}>Role: Web Designer</div>
								</div>
							<img src={require('./space_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>

				<br></br>
				<div><h2>Other Works</h2></div>
				<hr></hr>
				<a onClick={routeChangeAnt} className="menuLink">
					<div className="menu-improved">
					<div className="menu-grid-technical">
							<div className="menu-grid-item">
								<b>Ant's Adventure</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >Ant's Adventure is a mobile motion-sensing flying game. The player is a little ant, who is tired of being exploited in its colony, rides a leaf and flies for free. This game was developed with Unity and the gyroscope data.</div>
								<div style={{color:'#ff7800'}}>Role: Game Designer, Game Developer</div>
								</div>
							<img src={require('./ant_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				{/* <a href="./work#TOZZI" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Tree</b>
								<div className="largerGrey">2022</div>	
							</div>
							<div className="menu-grid-item">A first-person horror walking sim where player is inside a dice.</div>
						</div>
						<small>Game Designer, Programmer</small>
					</div>
				</a>
				<hr></hr>
				<a href="./work#CONTINUE" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Aerospace Building Blocks AR</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">A walking sim about moving on.</div>
						</div>
						<small>Level Designer, Technical Artist</small>
					</div>
				</a>
				<hr></hr>
				<a href="./work#SKELESKATE" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Human Relic</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">A local-multiplayer sandbox about skulls with one foot wear hats.</div>
						</div>
						<small>Level Designer, Gameplay Programmer</small>
					</div>
				</a>
				<hr></hr> */}
				<a onClick={routeChangeMoon} className="menuLink">
					<div className="menu-improved">
					<div className="menu-grid-technical">
							<div className="menu-grid-item">
								<b>On the Moon</b>
								<div className="largerGrey">2020</div>	
							</div>
							<div className="menu-grid-item">
								<div>
								<div >On the Moon is an online two-player co-op game. The player is an astronaut who were on a mission to the moon. However, the spacecraft exploded. The player needs to find another astronaut on the moon and collect all 6 power wreckage together to fix the spacecraft.</div>
								<div style={{color:'#ff7800'}}>Role: Game Designer, Web Developer</div>
								</div>
							<img src={require('./moon_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<br></br>
				<br></br>

	</div>

	

        </div>
    );
}

export default MenuContainer;