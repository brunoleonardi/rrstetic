import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import Home from './components/Home';
import Products from './components/Products';
import ResidencialProducts from './components/ResidencialProducts';
import Contact from './components/Contact';
import { useRef } from 'react';
import logo from './assets/rrLogo.png';

export const openWhatsapp = () => {
  window.open('https://wa.me/5511974041594', '_blank', 'noopener,noreferrer');
};

function App() {
  const HomeComponentRef = useRef(null);
  const ProductsComponentRef = useRef(null);
  const ContactComponentRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/rr_stetic?igsh=OW1qdmpqYm10ZWxk', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mainComponent">
      <div className='navbar'>
        <div className='navbarElements'>
          <a style={{pointerEvents: "none"}}><img className='logoImg' src={logo}></img></a>
          <a onClick={() => scrollToRef(HomeComponentRef)}>Início</a>
          <a onClick={() => scrollToRef(ProductsComponentRef)}>Serviços</a>
          <a onClick={() => openWhatsapp()}>Contato</a>
          <a onClick={openInstagram}><InstagramIcon /></a>
        </div>
      </div>
      <Home HomeComponentRef={HomeComponentRef} scrollToRef={scrollToRef} ProductsComponentRef={ProductsComponentRef} />
      <div className='productsMode' ref={ProductsComponentRef}>Nossos Serviços</div>
      <Products />
      {/* <div className='productsMode' style={{ marginTop: '0px' }}>Serviços Residenciais</div>
      <ResidencialProducts /> */}
      <Contact ContactComponentRef={ContactComponentRef} />
    </div>
  );
}

export default App;
