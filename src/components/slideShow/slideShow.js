import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideShow.css';

const slideImages = [
    './prototype1.jpg',
    './prototype2.jpg',
    './prototype3.jpg',
    './prototype4.jpg',
    './prototype5.jpg',
    './prototype6.jpg',
    './prototype7.jpg',
    './prototype8.jpg'
  ];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    indicators: true,
    duration: 3000
  }
  const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease" {...zoomOutProperties} style={{marginLeft:"10vw", marginRight:'10vw'}}>
          <div className="each-slide">
              <img src={require(`${slideImages[0]}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
            <img src={require(`${slideImages[1]}`)} className="slideshow-img"></img>

          </div>
          <div className="each-slide">
          <img src={require(`${slideImages[2]}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
          <img src={require(`${slideImages[3]}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
          <img src={require(`${slideImages[4]}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
          <img src={require(`${slideImages[5]}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
          <img src={require(`${slideImages[6]}`)} className="slideshow-img"></img>
          </div>
          <div className="each-slide">
          <img src={require(`${slideImages[7]}`)} className="slideshow-img"></img>
          </div>

        </Slide>
      </div>
    )
};
export default Slideshow;