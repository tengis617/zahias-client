import Inferno from 'inferno';
import Layout from '../components/Layout';
import Products from '../components/Products';
import SideMenu from '../components/SideMenu';

import Logo from '../components/Layout/zahias-logo.svg';
import bookIcon from '../Icons/books.svg';
import headphonesIcon from '../Icons/headphones.svg';
import coffeeBeansIcon from '../Icons/coffeebeans.svg';

export default function HomePage() {
  return (
    <section>
      <Cover />
      <section className='section bg-whitesmoke'>
        <div className='columns'>
          <div className='column is-2'>
            <SideMenu />
          </div>
          <div className='column is-8'>
            <Products />
          </div>
        </div>
        </section>
    </section>
  );
}

export const Cover = () => (
  <section className="hero is-fullheight">
    <div className="hero-body has-text-centered">
      <div className="container">
        {/* <h1 className="title logo animated bounceIn has-text-primary">
          zahias
      </h1> */}
      <img src={Logo} style={{maxHeight: '100px'}} alt=""/>
        <h2 className="subtitle is-3 animated zoomIn">
          get anything you need. <br /> Books, gadgets and more!
      </h2>
      <div className='columns' style={{marginTop:"50px"}}>
        <div className='column'>
          <img style={{maxHeight:"150px"}} className='image' src={bookIcon} />
          <h1 className='subtitle is-3'>Books</h1>
          <p>
            Looking for bestsellers?
          </p>
        </div>
        <div className='column'>
        <img style={{maxHeight:"130px",marginTop:"10px", marginBottom:"10px"}} className='image' src={headphonesIcon} />
        <h1 className='subtitle is-3'>Gadgets</h1>
        <p>
          need the latest gadgets?
        </p>
        </div>
        <div className='column'>
        <img style={{maxHeight:"150px"}} className='image' src={coffeeBeansIcon} />
        <h1 className='subtitle is-3'>Coffee</h1>
        <p>
          need to power up ?
        </p>
        </div>
      </div>
      </div>
    </div>
  </section>
)