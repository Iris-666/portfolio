import './stuckPage.css';
import {Slideshow} from '..';


function StuckPage(){
    const routeChangePrototype = () =>{ 
        // window.location.href = 'https://www.space-talks.com/';
        window.open(window.location.href = 'https://www.figma.com/proto/CwQiPk4Zvs0ZOUATKpnCjP/Stuck%3F?page-id=786%3A2550&node-id=786%3A5950&viewport=241%2C48%2C0.95&scaling=scale-down&starting-point-node-id=786%3A5983', '_blank');
      }

    return(
    <section className='stuckPage'>
        <section className="stuckPage-title">
            <img src={require('./stuck-cover-img.jpg')} alt="title-img" className='stuckPage-title-img'></img>
            <img src={require('./stuck-logo.png')} alt="logo" className='stuckPage-stucklogo-img'></img>
            <p className='stuckPage-title-text'>STUCK?</p>
            <p className='stuckPage-subtitle-text'>Conquer a challenge everyday</p>
        </section>
        <section className="stuckPage-overview">
            <p className='stuckPage-overview-title'>OVERVIEW</p>
            <div className='stuckPage-overview-title-line'></div>
            <p className='stuckPage-overview-problem-title orange-title'>The Problem</p>
            <p className='stuckPage-overview-problem-text'>The problem we wanted to target was how adults in their 20s to 30s were continously being looped back into a rut. <span className='orange-text'>Being stuck</span> in a rut or a slump, feeling burn out, feeling unmotivated and unproductive are just some emotions that many feel to this day. Especially with the pandemic entering our lives in recent years, this <span className='orange-text'>stuck</span> has escalated to a more extreme version at home. </p>
            <p className='stuckPage-overview-problem-title orange-title'>The Solution</p>
            <p className='stuckPage-overview-problem-text'>We designed <span className='orange-text'>STUCK?</span>, a mobile application that aims to help users conquer a challenge everyday. Users can choose one easy, medium, or difficult challenge from the three choices that <span className='orange-text'>STUCK?</span> provides everyday, based on how much time or efforts they want to dedicate to the challenge. </p>
            <div className='stuckPage-overview-bg'>
                <div className='stuckPage-outline-container'>
                    <div class="stuckPage-outline-column-num">
                        <p class="stuckPage-outline-column-num-text">01</p>
                    </div>
                    <div class="stuckPage-outline-column-text">
                        <p style={{marginBottom: "10px"}}>Research</p>
                        <div className='stuckPage-outline-column-text-small'>
                            <p className='stuckPage-outline-column-text-small-p'>Problem</p>
                            <p className='stuckPage-outline-column-text-small-p'>Interviews</p>
                            <p className='stuckPage-outline-column-text-small-p'>Persona</p>

                        </div>
                    </div>
                    <div class="stuckPage-outline-column-num">
                        <p class="stuckPage-outline-column-num-text">02</p>
                    </div>
                    <div class="stuckPage-outline-column-text">
                        <p style={{marginBottom: "10px"}}>Design</p>
                        <div className='stuckPage-outline-column-text-small'>
                            <p className='stuckPage-outline-column-text-small-p'>Ideation Process</p>
                            <p className='stuckPage-outline-column-text-small-p'>Site Map</p>
                            <p className='stuckPage-outline-column-text-small-p'>Low Fidelity Prototype</p>
                            <p className='stuckPage-outline-column-text-small-p'>Usability Tests & Iterations</p>
                            <p className='stuckPage-outline-column-text-small-p' style={{marginBottom: "30px"}}>Visual Identity</p>
                        </div>

                    </div>
                    <div class="stuckPage-outline-column-num">
                        <p class="stuckPage-outline-column-num-text">03</p>
                    </div>
                    <div class="stuckPage-outline-column-text">
                        <p style={{marginBottom: "10px"}}>Future Development</p>
                        <div className='stuckPage-outline-column-text-small'>
                            <p className='stuckPage-outline-column-text-small-p'>Smart Watch Integration</p>
                            <p className='stuckPage-outline-column-text-small-p' style={{marginBottom: "30px"}}>Home Screen Widget</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        <section className='stuckPage-research'>
            <section className='stuckPage-research-title-container'>
                <img src={require('./research-title-logo2.png')} className="stuckPage-research-title-logo"></img>
                <p className='stuckPage-research-title-text'>RESEARCH</p>
            </section>
            <section className="stuckPage-problem">
                <p className='stuckPage-problem-title'>The Problem</p>
                <div className='stuckPage-overview-title-line'></div>
                <section className='stuckPage-problem-text-container'>
                    <p class='stuckPage-problem-text1 stuckPage-normal-text'>For majority of adults, this figure below is a pretty accurate representation of their life. The Wake Up -{'>'} Survive -{'>'} Sleep and repeat work cycle. Perhaps in between survive and sleep, we add in Netflix or Tiktok but moreover its an endless cycle. Having a full time position takes up so much of our time that we come home and don’t want to do anything else. Especially with the pandemic entering our lives in recent years, this cycle has escalated to a more extreme version at home. </p>
                    <img src={require('./problem1.png')} className='stuckPage-problem-img1'></img>
                </section>
                {/* <p class='stuckPage-problem-text2 stuckPage-normal-text'>Especially with the pandemic entering our lives in recent years, this cycle has escalated to a more extreme version at home. </p> */}
                <p class='stuckPage-problem-text2 stuckPage-normal-text'>This has been a constant problem with people having a full time job that people start to accept it. They continue living this cycle for years and stagnate. They don’t grow and they don’t change.</p>
                <p class='stuckPage-problem-text3 stuckPage-normal-text'>Oracle partnered with Workplace Intelligence to survey over 14,000 employees, managers, HR leaders, and executives across 13 countries. They found out that:</p>
                <p class='stuckPage-problem-text4 stuckPage-normal-text'><span className='stuckPage-problem-text5'>76% </span>of people felt “stuck” in their personal lives and unable to move forward.</p>
                <p class='stuckPage-problem-text6 stuckPage-normal-text'>With our research, we revisted Mark Manson’s The <span className="orange-text">Do Something Principle</span>.</p>
                <section className='stuckPage-problem-text-container'>
                    <p class='stuckPage-problem-text7 stuckPage-normal-text'>When we think about doing something, it’s often thought as getting some inspiration to do something which motivates you to then do something. But actually, taking action is not this linear sequence of getting motivation which you get from getting inspired. But it’s an endless loop. Inspiration leads to motivation which leads to action which leads to inspiration which leads to motivation and so on. So Mark Manson’s argument is that if u lack inspiration and motivation, you just need to do something, anything. </p>
                    <img src={require('./problem2.png')} className='stuckPage-problem-img2'></img>
                </section>
                <div className='stuckPage-problem-bg'>
                    <div className='stuckPage-problem-line'></div>
                    <p class='stuckPage-problem-text8'>As humans, we don’t get energy. We <span className='orange-text'>generate</span> our energy.</p>
                </div>
            </section>
            <section className='stuckPage-interviews'>
                <p className='stuckPage-interview-title'>Interviews</p>
                <div className='stuckPage-overview-title-line'></div>
                <div className='stuckPage-interview-text-container'>
                    <div className='stuckPage-interview-text-container2'>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'  style={{marginTop: "20px"}}>We interviewed six potential users. Most of them are young people between 20 and 30 years old, including college students, those who have just graduated and started working, freelancers, and those who are at their gap year. Many of them have very different lifestyles or the amount of spare time.</p>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'  style={{marginTop: "20px"}}>We asked questions like:</p>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'>Describe a normal day of you.</p>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'>When was the last time you did something new? What was that?</p>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'>What do you want to change in your current life?</p>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'>How much time do you think is “your” time every day?</p>
                        <p className='stuckPage-normal-text stuckPage-interview-questions'>What was the biggest challenge when you wanted to make changes?</p>
                    </div>
                    <div className='stuckPage-interview-img-container'>
                        <img src={require('./interview1.png')} className='stuckPage-interview-img'></img>
                    </div>
                </div>
                <p className='stuckPage-interview-keyinsights-title orange-title'>Key Insights</p>
                <p className='stuckPage-normal-text' style={{marginTop: "5px"}}>From the interviews, we concluded three key insights. </p>
                <div className='stuckPage-overview-bg' style={{paddingTop:"10px", paddingBottom:"25px", marginTop:"20px"}}>
                    <div className='stuckPage-outline-container'>
                        <div className='stuckPage-interview-keyinsights-col'>
                            <p className='stuckPage-normal-text stuckPage-interview-keyinsights-text' style={{fontSize:"20px", fontWeight:"600"}}><span className='orange-text'>01</span> Bewilderment </p>
                            <ul>
                                <li className='stuckPage-normal-text stuckPage-interview-keyinsights-text' style={{marginBottom:"10px"}}><span className='orange-text' style={{fontWeight:600}}>Set the goal too high</span> and always can’t accomplish the goal, so becomes easily to give up over time.</li>
                                <li className='stuckPage-normal-text stuckPage-interview-keyinsights-text'>Want to make changes and try something new in life, but <span className='orange-text' style={{fontWeight:600}}>don’t know where to start and can’t get the idea about what to try.</span></li>
                            </ul>
                        </div>
                        <div className='stuckPage-interview-keyinsights-col'>
                            <p  className='stuckPage-normal-text stuckPage-interview-keyinsights-text' style={{fontSize:"20px", fontWeight:"600"}}><span className='orange-text'>02</span> Procrastination</p>
                            <ul>
                                <li className='stuckPage-normal-text stuckPage-interview-keyinsights-text' style={{marginBottom:"10px"}}>Has lots of ideas in head, but has <span className='orange-text' style={{fontWeight:600}}>no motivations</span> to move forward.</li>
                                <li className='stuckPage-normal-text stuckPage-interview-keyinsights-text'>Just wants to lie on the bed and browse Douyin after a whole day of work instead of doing something more meaningful.</li>
                            </ul>
                        </div>
                        <div className='stuckPage-interview-keyinsights-col' >
                            <p  className='stuckPage-normal-text stuckPage-interview-keyinsights-text' style={{fontSize:"20px", fontWeight:"600"}}><span className='orange-text'>03</span> Limited Time</p>
                            <ul>
                            <li className='stuckPage-normal-text stuckPage-interview-keyinsights-text'><span className='orange-text' style={{fontWeight:600}}>Too busy</span> at work and always can’t find time or a chance to start making changes since he thinks it would require much time.</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
            <section className='stuckPage-persona'>
            <p className='stuckPage-interview-title'>Persona</p>
                <div className='stuckPage-overview-title-line' style={{width:"70px"}}></div>
                <p className='stuckPage-normal-text' style={{marginTop: "5px"}}>Based on these key insights, we created three persona.</p>
                <img src={require('./Persona1.png')} className='stuckPage-persona-img' alt='persona'></img>
                <img src={require('./Persona2.png')} className='stuckPage-persona-img' alt='persona'></img>
                <img src={require('./Persona3.png')} className='stuckPage-persona-img' alt='persona'></img>

            </section>
        </section>

        <section className='stuckPage-design'>
            <section className='stuckPage-research-title-container'>
                <img src={require('./designLogo.png')} className="stuckPage-research-title-logo" alt='logo'></img>
                <p className='stuckPage-research-title-text'>DESIGN</p>
            </section>
            <section className='stuckPage-design-ideation'>
                <p className='stuckPage-problem-title'>Ideation Process</p>
                <div className='stuckPage-overview-title-line'></div>
                <div className='stuckPage-design-ideation-img-container'>
                    <img src={require('./ideation1.png')} className="stuckPage-design-ideation-img1" alt='img1'></img>
                    <img src={require('./ideation2.png')} className="stuckPage-design-ideation-img2" alt='img1'></img>
                </div>
                <p className='stuckPage-normal-text'>We started our design process with ideation. We came together and sketched out some sample frames that our users might want to use. </p>
                <div className='stuckPage-design-ideation-img-container'>
                    <img src={require('./ideation3.png')} className="stuckPage-design-ideation-img1" alt='img1'></img>
                    <img src={require('./ideation4.png')} className="stuckPage-design-ideation-img2" alt='img1'></img>
                </div>
                <p className='stuckPage-normal-text'>We also did a Crazy8 exercise together to quickly come up with 8 ideas in 8 minutes. </p>
            </section>
            <section className='stuckPage-sitemap'>
                <p className='stuckPage-interview-title'>Site Map</p>
                <div className='stuckPage-overview-title-line' style={{width:"70px"}}></div>
                <img src={require('./sitemap1.png')} className="stuckPage-design-sitemap-img1" alt='img'></img>
                <img src={require('./sitemap2.png')} className="stuckPage-design-sitemap-img1" alt='img'></img>
            </section>
            <section className='stuckPage-LowFidelity'>
                <p className='stuckPage-interview-title'>Low Fidelity Prototype</p>
                <div className='stuckPage-overview-title-line' style={{width:"90px"}}></div>
                <img src={require('./lowPrototype1.png')} className="stuckPage-design-sitemap-img1" style={{marginTop:"30px"}} alt='img'></img>
            </section>
            <section className='stuckPage-usertest'>
                <p className='stuckPage-interview-title'>Usability Tests & Iterations</p>
                <div className='stuckPage-overview-title-line' style={{width:"90px"}}></div>
                <img src={require('./usertest1.png')} className="stuckPage-design-sitemap-img1" style={{marginTop:"30px"}} alt='img'></img>
                <section className='stuckPage-usertest-improvements'>
                    <p className='stuckPage-interview-keyinsights-title orange-title' style={{marginTop:"90px"}}>Major Improvement 1 - Close the Time Gap</p>
                    <img src={require('./improvement1.png')} className="stuckPage-design-sitemap-img1" style={{marginTop:"30px", width:"70vw", marginLeft:"15vw"}} alt='img'></img>
                    <p className='stuckPage-normal-text' style={{width:"78vw", textIndent:"2em"}}>    After the first round of usability test, we realized that one of the biggest challenges we were facing is how to make the users come back. If the first thing the user need to accomplish after opening the app is to spot a bird, it would be too challenging and require a long time. Ideally the user would stand up and start to try to spot a bird, but most users wouldn’t do that. Most liketly they will close the app and forget about it. In the user tests, our users were just saying “okay, but i can’t go out and spot a bird now, I’ll just click accomplished for now” This is definitely not what we want our users to do. Therefore, we should firstly provide some very simple tasks for the users at the begining. For example, take a stretch, drink a glass of water so that they would not freak out. After that, they are also able to choose the level of the challenges based on how much time the challenges would take and how difficult the challenges are. They can make choices according to their own situations. </p>
                    <p className='stuckPage-interview-keyinsights-title orange-title' style={{marginTop:"90px"}}>Major Improvement 2 - Home Page Design</p>
                    <img src={require('./improvement2.png')} className="stuckPage-design-sitemap-img1" style={{marginTop:"30px", width:"70vw", marginLeft:"15vw"}} alt='img'></img>
                    <p className='stuckPage-normal-text' style={{width:"78vw", textIndent:"2em"}}> We want the home page to be clean and neat and shouldn’t confuse the user. In the first version of wireframe, many users get confused about where to click since the buttons don’t look clickable. Also it’s not clear enough for the users what they should do and what they can do. They were just clicking randomly on the screen to see what will happen. This is definitely not a good sign for ux design. In the second version, we highlight the buttons with bright orange colors and add shadows to them to lead the users to interact with the page.  We also move the create a challenge button under the challenge today section because the core task in our app should be choosing one challenge that the app provide. For the third iteration, since we changed our user flow, we simplify our home page more. There is a saying in ux design that less is more. And less can make the choice easier for users. So there are only two buttons with detailed explanation underneath. </p>
                    <p className='stuckPage-interview-keyinsights-title orange-title' style={{marginTop:"90px"}}>Major Improvement 3 - Onboarding Tutorial</p>
                    <img src={require('./improvement3.png')} className="stuckPage-design-sitemap-img1" style={{marginTop:"30px", width:"70vw", marginLeft:"15vw"}} alt='img'></img>
                    <p className='stuckPage-normal-text' style={{width:"78vw", textIndent:"2em"}}>In the first version, the users got so confused what they can do and what this app would provide when the first thing the user see after opening the app is the home page and nothing else. Therefore, we add a onboarding tutorial for new users and spend lots of time on designing it because first impression is important. When doing the research, we found that on average, nearly one in four users will abandon a mobile app after using it just once. We use the finger pointing icon to guide the users though the functions we have. They also need to accomplish two very simple tasks during the tutorial to get a taste of this app. Then in the second round of usability test, one user said “haa this is just the tutorial?” after going through the whole tutorial. So we add a progress bar at the bottom and the skip button so that they will understand how much of the introduction have left and don’t feel trapped.</p>
                    <p className='stuckPage-interview-keyinsights-title orange-title' style={{marginTop:"90px"}}>Major Improvement 4 - Improve User’s Sense of Achievement</p>
                    <img src={require('./improvement4.png')} className="stuckPage-design-sitemap-img1" style={{marginTop:"30px", width:"70vw", marginLeft:"15vw"}} alt='img'></img>
                    <p className='stuckPage-normal-text' style={{width:"78vw", textIndent:"2em"}}>Last but not least, we made three changes to improve user’s sense of achievement when accomplishing the challenges. We add more positive visual feedbacks, like our mascot, which is warmer then a simple svg thumb up. We also ask the user to upload a photo everytime after accomplished the challenge. Compared with only clicking the accomplished button, this would create a sense of ritual. And the users would be able to view all the challenges they’ve completed with the photos like a personal jouney. This would provide more motivations for the users to keep accomplishing a challenge every day. </p>

                </section>
            </section>
            <section className='stuckPage-final-prototype'>
                <section className='stuckPage-final-prototype-title-container'>
                    <div className='stuckPage-final-prototype-title'>
                        <p className='stuckPage-interview-title'>Final Prototype</p>
                        <div className='stuckPage-overview-title-line' style={{width:"90px"}}></div>
                    </div>
                    <img src={require('./demoCode.png')} className="stuckPage-try-prototype-qrcode"></img>
                    <button className='stuckPage-try-prototype-btn' onClick={routeChangePrototype}>Try Our Prototype</button>
                </section>
            <Slideshow />
            </section>
            <section className='stuckPage-visual-identity'>
                <p className='stuckPage-interview-title'>Visual Identity</p>
                <div className='stuckPage-overview-title-line' style={{width:"90px"}}></div>
                <div className='stuckPage-visual-icons' style={{position:"relative"}}>
                    <div className='stuckPage-visual-icons-text'>
                        <p className='stuckPage-interview-keyinsights-title orange-title' style={{fontWeight:"600"}}>ICONS</p>
                        <p className='stuckPage-visual-identity-subtitle'> Hand-painted Style</p>
                        <p className='stuckPage-normal-text' style={{width:"40vw"}}>Compared to the regular neat and tidy SVG icons, this hand-painted style is more approachable and intimate to the users, and creates the feeling of a handwritten diary.</p>
                    </div>
                    <img src={require('./icons.png')} className="stuckPage-visual-icons-img" alt='icons'></img>
                </div>

                <div className='stuckPage-visual-icons' style={{position:"relative"}}>
                    <div className='stuckPage-visual-icons-text'>
                        <p className='stuckPage-interview-keyinsights-title orange-title' style={{fontWeight:"600"}}>COLOR PALETTE</p>
                        <p className='stuckPage-visual-identity-subtitle'> Orange Accent</p>
                        <p className='stuckPage-normal-text' style={{width:"40vw"}}>Orange mixes red’s active and loud association with yellow’s young mellow association. By using orange as our primary color, we aim to convey a energetic, friendly, and warm feel. </p>
                    </div>
                    <img src={require('./colors.png')} className="stuckPage-visual-icons-img" alt='icons'></img>
                </div>
                <div className='stuckPage-visual-icons' style={{position:"relative", marginTop:'50px'}}>
                    <div className='stuckPage-visual-icons-text'>
                        <p className='stuckPage-interview-keyinsights-title orange-title' style={{fontWeight:"600"}}>TYPOGRAPHY</p>
                        <p className='stuckPage-visual-identity-subtitle'>Proxima Nova</p>
                        <p className='stuckPage-normal-text' style={{width:"40vw"}}>A typeface for screen design
This san-serif font will give a minimial, clean and clear type to STUCK?   </p>
                    </div>
                    <img src={require('./typography.png')} className="stuckPage-visual-icons-img" alt='icons' style={{width:"13vw"}}></img>
                </div>
                <p className='stuckPage-interview-keyinsights-title orange-title' style={{fontWeight:"600"}}>LOGO</p>
                <img src={require('./logodesign.png')} className="stuckPage-visual-logo-img"></img>

            </section>
            <section>
            <section className='stuckPage-research-title-container' style={{paddingLeft:"35vw", marginTop:"250px"}}>
                <img src={require('./future-title-logo.png')} className="stuckPage-research-title-logo"></img>
                <p className='stuckPage-research-title-text'>FUTURE DEVELOPMENT</p>
            </section>
            <section className='stuckPage-future-watch'>
                <p className='stuckPage-problem-title'>Smart Watch Integration</p>
                <div className='stuckPage-overview-title-line'></div>
            </section>
            <div className='stuckPage-future-watch-content' style={{position:"relative"}}>
                    <div className='stuckPage-future-watch-text'>
                        <p className='stuckPage-normal-text' style={{width:"40vw"}}>It would be nice if we can integrate this application with smart watches. Smart watches like Apple Watch are always on users. Using features on smart watches like fitness tracking can allow users to access even more functionalities.</p>
                    </div>
                    <img src={require('./future-watch.png')} className="stuckPage-future-watch-img" alt='icons'></img>
                </div>
                <section className='stuckPage-future-watch'>
                <p className='stuckPage-problem-title'>Home Screen Widget</p>
                <div className='stuckPage-overview-title-line'></div>
            </section>
            <div className='stuckPage-future-watch-content' style={{position:"relative"}}>
                    <div className='stuckPage-future-watch-text'>
                        <p className='stuckPage-normal-text' style={{width:"40vw"}}>we want to allow users to add our app’s widget to their home scren. This will help remind users of their picked daily challenge whenever they open their phone screen.</p>
                    </div>
                    <img src={require('./future-widget.png')} style={{width:"17vw", marginLeft:"80px"}} className="stuckPage-future-watch-img" alt='icons'></img>
            </div>

            </section>
        <section>

        </section>
        </section>
        <section className='stuckPage-team'>
            <section className='stuckPage-research-title-container' style={{marginTop:"200px", paddingLeft:"44vw"}}>
                <img src={require('./team-title-logo.png')} className="stuckPage-research-title-logo"></img>
                <p className='stuckPage-research-title-text'>TEAM</p>
            </section>
            <div className='stuckPage-team-content-container' style={{marginTop:"50px"}}>
                <div className='stuckPage-team-member' style={{marginRight:"50px"}}>
                    <img src={require('./team-photo1.png')} className="stuckPage-team-photo-img" alt='photo1'></img>
                    <p className='stuckPage-normal-text stuckPage-team-text'>IRIS QIN</p>
                    <p className='stuckPage-normal-text stuckPage-team-text'>UX DESIGNER, ILLUSTRATOR, RESEARCHER</p>
                </div>
                <div className='stuckPage-team-member' style={{marginLeft:"50px"}}>
                    <img src={require('./team-photo2.png')} className="stuckPage-team-photo-img" alt='photo1'></img>
                    <p className='stuckPage-normal-text stuckPage-team-text'>CINDY LI</p>
                    <p  className='stuckPage-normal-text stuckPage-team-text'>UX DESIGNER, RESEARCHER </p>
                </div>

            </div>
        </section>
    </section>
    );
}

export default StuckPage;