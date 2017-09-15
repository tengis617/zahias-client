import Inferno from 'inferno';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(p) {
  return(
    <div>
      <Navbar />
      {p.children}
      <Footer />
    </div>
  );
}