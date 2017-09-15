import Inferno from 'inferno';

export default function Hero({children, color, size}) {
  return (
    <section className={'hero ' + color + " " + size}>
      <div className='hero-body'>
        <div className='container'>
          {children}
        </div>
      </div>
    </section>
  );
}