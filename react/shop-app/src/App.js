import NavBar from './components/Navbar/Navbar';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar navItems={NAV_ITEMS} />
      <Footer/>
    </div>
  );
}

export default App;
