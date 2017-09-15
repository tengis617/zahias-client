import Inferno from 'inferno';

import './SideMenu.css';

export default function SideMenu() {
  return(
    <aside className='menu'>
      <p className='menu-label'>
        Products
      </p>
      <ul className='menu-list'>
      <li>
          <a href="">
            All
          </a>
        </li>
        <li>
          <a href="">
            Books
          </a>
        </li>
        <li>
          <a href="">
            Electronics
          </a>
        </li>
      </ul>
    </aside>
  );
}