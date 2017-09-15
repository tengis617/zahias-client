import Inferno from 'inferno';
import Hero from '../components/Hero';


export default function LoginPage() {
  return(
    <section className='section bg-whitesmoke'>
      <div className='columns'>
        <div className='column is-half is-offset-one-quarter'>
          <section className='section bg-white'>
          <h1 className='title is-1 has-text-centered'><i className='fa fa-sign-in' /></h1>
            <h1 className='subtitle is-3 has-text-centered'>Login</h1>
            <form action="">
              <div className='field'>
                <label className='label' htmlFor=""><i className='fa fa-envelope' /> Email</label>
                <div className='control'>
                  <input type="text" placeholder="Email" className='input'/>
                </div>
              </div>
              <div className='field'>
                <label className='label' htmlFor=""><i className='fa fa-key' /> Password</label>
                <div className='control'>
                  <input type="text" type="password" placeholder="Password" className='input'/>
                </div>
              </div>
              <div className='field has-text-centered'>
                <button className='button is-success is-medium' style={{width:'100%'}}>LOGIN</button>
              </div>
              <div className='field has-text-centered'>
                <button className='button is-medium' style={{backgroundColor:'#3b5998', color:'white', width:"100%"}}><i className='fa fa-facebook' style={{paddingRight:'5px'}} /> LOGIN USING FACEBOOK</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}