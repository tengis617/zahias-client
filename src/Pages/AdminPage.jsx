import Inferno from 'inferno';
import { Bar } from 'react-chartjs-2';
import Hero from '../components/Hero';
import Inventory from '../components/Inventory';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default function AdminPage() {
  return (
    <section className='section bg-whitesmoke'>
      <div className='columns'>
        <div className='column is-2'>
          <AdminMenu />
        </div>
        <div className='column is-10'>
          <OperationSummary />
          <section className='section bg-white' style={{marginBottom:'20px'}}>
            <div className='container'>
              <h1 className='title is-3'>Revenue Report</h1>
            </div>
            <div className='container'>
              <Bar
                data={data}
                height={400}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
          </section>
            <Inventory />
        </div>
      </div>
    </section>
  );
}

export function AdminMenu() {
  return (
    <aside className='menu'>
      <p className='menu-label'>
        General
      </p>
      <ul className='menu-list'>
        <li>
          <a href="">
            <i className='fa fa-credit-card' style={{paddingRight:'3px'}} /> Revenue
          </a>
        </li>
        <li>
          <a href="">
            <i className='fa fa-cubes'/> Inventory
          </a>
        </li>
        <li>
          <a href="">
            <i className='fa fa-list-alt' style={{paddingRight:'4px'}}  /> Order Management
          </a>
        </li>
      </ul>
    </aside>
  )
}

export function OperationSummary() {
  return(
    <section className='section bg-white' style={{marginBottom:'20px'}}>
      <nav className='level is-mobile'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Capital</p>
            <p className='title'> 3,400,000Won</p>
          </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Orders completed</p>
            <p className='title'>15</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Current Orders</p>
            <p className='title'>5</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Inventory</p>
            <p className='title'> 200,000Won</p>
          </div>
        </div>
        </div>
      </nav>
    </section>
  );
}