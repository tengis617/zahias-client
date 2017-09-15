import Inferno from 'inferno';
import {
  Router,
  Route,
  IndexRoute
} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';

import './main.css';
import 'bulma/css/bulma.css';
import './global.scss';
import 'animate.css';
import 'font-awesome/css/font-awesome.css';

const browserHistory = createBrowserHistory();

export default function App() {
  return(
    <Router history={browserHistory}>
      <Route component={Layout}>
        <IndexRoute path="/" component={HomePage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
      </Route>
    </Router>
  );
}