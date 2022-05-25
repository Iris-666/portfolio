import "./workSlideshow.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function WorkSlideshow(props){
    const zoomOutProperties = {
        indicators: true,
        scale: 0.4,
        indicators: true,
        duration: 3000
      }

    const slides = [];

  for (let i = 0; i <= props.imgs.length-1; i++) {
    console.log(props.imgs[i])

    slides.push(
        <div className="each-slide">
        <img src={require(`${props.imgs[i]}`)} className="slideshow-img" onClick={props.onClickFunction}></img>
    </div>
    );
  }

  

    
    return(
        <section>
        <section className='work-texts'>
            <div className="work-title">
                <div className='work-title-text'>
                {props.title}
                </div>
                </div>
            <div className='work-description'>
                <div className="work-description-text">
                {props.description}
                </div>
                </div>
        </section>
        <section className="work-slides">
            {/* <img onClick={props.onClickFunction} src={require(`${props.imgSrc}`)} className="work-img" id={props.imgID}></img> */}
            <div>
        <Slide className="work-img" easing="ease" {...zoomOutProperties} style={{marginLeft:"10vw", marginRight:'10vw'}} >
          {/* <div className="each-slide">
              <img src={require(`${props.slideImages1}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
             <img src={require(`${props.slideImages2}`)} className="slideshow-img"></img>
          </div> */}
          {slides}
        </Slide>
      </div>

        </section>
    </section>
    
    );
}

export default WorkSlideshow;