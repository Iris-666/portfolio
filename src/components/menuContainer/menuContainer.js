import "./menuContainer.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function MenuContainer(props){
	
	let navigate = useNavigate(); 

	const routeChangeGaze = () =>{ 
        let path = `./gaze`; 
        navigate(path);
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
								<div >An interactive installation embarks on an artistic odyssey, delving into the intricate dance between artificial intelligence and humankind. It beckons us to reflect upon the profound ramifications of technological progress.</div>
								<div style={{color:'#ff7800'}}>Role: Main Programmer, Designer</div>
								<div style={{color:'#747474'}}>#Artificial Intelligence #Interactive Installation #Unity </div>
								</div>
							<img src={require('./gaze_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a className="menuLink" onClick={clickGaze}>
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
								<div >An interactive VR storytelling experience. Enter a Dream World of Love and Healing: Join Rosie and Isac in a Fantastical Garden, Where Fur Babies and Animal Lovers Unite to Find Solace, Share Memories, and Embrace Nature's Magic.</div>
								<div style={{color:'#ff7800'}}>Role: Interaction Designer, Main Programmer</div>
								<div style={{color:'#747474'}}>#VR #Unity #Storytelling #Animal Interaction </div>
								</div>
							<img src={require('./samsara_small.png')} style={{width:"120px",height:'120px'}}></img>
							</div>
						</div>
					</div>
				</a>

				<hr></hr>
				<a href="./work#GRAVEYARD" className="menuLink">
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
				<a href="./work#NEEDEDBREAK" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Letter</b>
								<div className="largerGrey">2023</div>	
							</div>
							<div className="menu-grid-item">An AR Wechat Miniprogram for the immersive theater production "Letter," which actively engaged audiences through interactive target scanning for clues. </div>
						</div>
						<div style={{color:'#ff7800'}}>Solo Developer</div>
						<div style={{color:'#747474'}}>#Augmented Reality #Wechat Miniprogram #Immersive Theater</div>
					</div>
				</a>
				<hr></hr>

				<br></br>
				<div><h2>Design And Crafts</h2></div>
				<hr></hr>
				<a href="./work#MULTIANIM" className="menuLink">
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
				<a href="./portfolio#/stuck" className="menuLink">
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
				<a href="./work#UNITYTRICKS" className="menuLink">
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
				<a href="./work#MULTIANIM" className="menuLink">
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
				<a href="./work#SUMMONINGCIRCLE" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>Ant's Adventure</b>
								<div className="largerGrey">2023</div>	
							</div>
							<div className="menu-grid-item">An auto-battler but the bench units also come in.</div>
						</div>
					</div>
				</a>
				<hr></hr>
				<a href="./work#TOZZI" className="menuLink">
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
				<hr></hr>
				<a href="./work#SEEYA" className="menuLink">
					<div className="menu-improved">
						<div className="menu-grid">
							<div className="menu-grid-item">
								<b>On the Moon</b>
								<div className="largerGrey">2021</div>	
							</div>
							<div className="menu-grid-item">A visual novel about saying goodbye to my childhood best friend.</div>
						</div>
						<small>Narrative Designer, Art Director</small>
					</div>
				</a>


	</div>

	

        </div>
    );
}

export default MenuContainer;