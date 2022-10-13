import NavBar from './components/Navbar/Navbar';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer';
import './App.css';
import Login from './components/Login/Login';
import { Route, Switch, Redirect, } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
      const [isOpen,setIsOpen]=useState(false)
      const [isLoggedIn, setIsLoggedIn]= useState(false)


  return (
    
    <div className="app">
    <NavBar navItems={NAV_ITEMS} isOpen={isOpen} setIsOpen={setIsOpen} isLoggedIn={isLoggedIn}/>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} navItems={NAV_ITEMS} isLoggedIn={isLoggedIn}/>
    
      <Switch>
      <Route path='/' exact>
        <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/checkout'>
          <Redirect to='/login'/>
        </Route>
      </Switch>
      <Footer />
    </div>
   
  );
}

export default App;
