import Inferno from 'inferno';

export default function Inventory() {
  return(
    <section className='section bg-white'>
      <h1 className='title is-3'>
        Inventory
      </h1>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GoT collection</td>
              <td>50,000</td>
              <td>2</td>
              <td>100,000</td>
            </tr>
            <tr>
              <td>Odyssey</td>
              <td>5,000</td>
              <td>5</td>
              <td>25,000</td>
            </tr>
          </tbody>
        </table>
        <button className='button is-success'><i className='fa fa-plus' style={{paddingRight:'3px'}} /> ADD</button>

      
    </section>
  );
}