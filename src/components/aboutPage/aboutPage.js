import './aboutPage.css';
import Pdf from './[20220530]resume.pdf'


function AboutPage(){
    return(
        <section className="aboutPage">
            <div className='aboutPage-text-container'>
                <p className='aboutPage-text-header'>Hi :D I’m Iris Qin.  </p>
                <p className='aboutPage-text-normal'>I’m currently a senior majoring in Interactive Media Arts at NYU Shanghai. I'm also an AR/VR Developer, UX designer, creative coder, front-end developer, game designer, and dancer. </p>
                <p className='aboutPage-text-normal'>My work focuses on designing digital experience, including AR, game, app, website that rise people’s awareness for physcial environment, nature, and their own life. </p>
                <a
                className="aboutPage-text-normal"
                href="mailto: tq363@nyu.edu"
                target="_blank"
                rel="noopener noreferrer"
                >
                Email: tq363@nyu.edu
                </a>
                <p className='aboutPage-text-normal' style={{marginTop: "0", marginBottom:'0'}}>Wechat: ttIris666</p>
                <a
                className="aboutPage-text-normal"
                // href={Pdf}
                href={require("./[20220530]resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                style={{marginTop: '0'}}
                >
                CV
                </a>
                <p className='aboutPage-text-orange'>UPDATED MAY 2022</p>

            </div>
            <div className='aboutPage-photo-container'>
            <img src={require('./Tian-Qin.jpg')} alt="myphoto" className='aboutPage-photo-img'></img>

            </div>
        </section>
    );

}

export default AboutPage;