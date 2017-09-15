import Inferno from 'inferno';
import Card from '../Card';


const product = {
  name: 'test product',
  price: 199,
  description: 'test description',
  imageUrl: 'https://images.gr-assets.com/books/1388330469l/22456.jpg',
}

export default function Products() {
  return (
    <section>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <Card product={product} />
          </div>
          <div className='column'>
            <Card product={product} />
          </div>
          <div className='column'>
            <Card product={product} />
          </div>
          <div className='column'>
            <Card product={product} />
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <Card product={product} />
          </div>
          <div className='column'>
            <Card product={product} />
          </div>
          <div className='column'>
            <Card product={product} />
          </div>
          <div className='column'>
            <Card product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}