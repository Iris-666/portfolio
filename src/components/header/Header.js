import './Header.css';
import {NavBar} from '../../components'

function Header(props) {
  return (
      <section className='header'>
          <section className = 'header-top'>
              <section className='header-top-logo'>
                    <img src={require('./logo.png')} alt='logo' className="header-top-logo-img"></img>
              </section>
              <section className='header-top-navbar'>
                  <NavBar></NavBar>
              </section>
          </section>
          <section className='header-bottom'></section>
      </section>
  );
}

export default Header;
