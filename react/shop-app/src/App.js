import NavBar from './components/Navbar/Navbar';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="app">
      <NavBar navItems={NAV_ITEMS} />
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
