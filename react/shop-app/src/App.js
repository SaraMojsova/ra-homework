import NavBar from './components/Navbar/Navbar';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer';
import './App.css';
import Login from './components/Login/Login';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    
    <div className="app">
    <NavBar navItems={NAV_ITEMS} />
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/checkout'>
          <Redirect to='/login'/>
        </Route>
      </Switch>
      {/* <Login/> */}
      <Footer />
    </div>
   
  );
}

export default App;
