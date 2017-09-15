import Inferno from 'inferno';

import './Card.css';

export default function Card({product}) {
  return(
    <div className='card product'>
      <div className='card-image'>
        <figure className='image book'>
          <img src={product.imageUrl} alt="image"/>
        </figure>
      </div>
      <div className='card-content'>
      <p className='title'>
        {product.name}
      </p>
      <p className='subtitle'>
        {product.description}
      </p>
      <p className='subtitle has-text-right'>
        {product.price}
      </p>
      <a href="" className='card-footer-item button is-success'> BUY</a>
    </div>
    </div>
  );
}