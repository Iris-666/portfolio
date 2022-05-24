import "./mainPage.css";

// function MainPage(props) {
//   return (
//     <div className="mainPage">
//     <section className="mainPage-back">
//       <p className="name-en">Iris Qin</p>
//       <img src={require('./photo.png')} alt="photo" className="photo-img"></img>
//       <p className='mainpage-intro-text'>I’m currently a senior majoring in Interactive Media Arts at NYU Shanghai.
// I'm also an AR/VR Developer, UX designer, creative coder, front-end developer, game designer, and dancer. I'm good at being happy
// :D</p>

//     </section>
//     <p className="name-cn">秦天</p>
//     </div>

    
//   );
// }

function MainPage(props) {
  return (
    <div className="mainPage">
    <section className="mainPage-back">
      <p className="name-en">Iris Qin</p>
      <p className="name-cn">秦天</p>
      <img src={require('./photo.png')} alt="photo" className="photo-img"></img>
      <img src={require('./photo.png')} alt="photo" className="photo-img-transparent"></img>

      <p className='mainpage-intro-text'>I’m currently a senior majoring in Interactive Media Arts at NYU Shanghai.
I'm also an AR/VR Developer, UX designer, creative coder, front-end developer, game designer, and dancer. I'm good at being happy
:D</p>

    </section>
    </div>

    
  );
}


export default MainPage;
