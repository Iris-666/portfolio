import './NavBar.css';
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";


function NavBar(){

    let navigate = useNavigate(); 

    const routeChangeHome = () =>{ 
        let path = `./`; 
        navigate(path);
      }

    const scrollToWork = () => {
        scroller.scrollTo("page-title-text", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

      const scrollToTop = () => {
        scroller.scrollTo("name-en", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
      
    };

    return(
        <section className="navbar">
             <section className='navbar-home navbar-item'>
                <button className='navbar-button' onClick={routeChangeHome}>
                     Home
                </button>
            </section>

            <section className='navbar-work navbar-item'>
                <button className='navbar-button' onClick={scrollToWork}>
                     Work
                </button>
            </section>
            {/* <section className='navbar-contact navbar-item'>
                <button className='navbar-button'>
                    Contact
                </button>
            </section> */}
            <section className='navbar-cv navbar-item'>
                <button className='navbar-button'>
                    About
                </button>
            </section>
            <section className='navbar-surprise navbar-item'>
                <button className='navbar-button'>
                    Surprise
                </button>
            </section>

        </section>
    );
}

export default NavBar;