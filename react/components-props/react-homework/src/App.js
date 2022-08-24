import './App.css';
import NewComponent from './components/NewComponent'

function App() {
  const array=['HTML ','CSS ','Bootstrap ','Javascript ','React '];

  return (
    <div className="App">
      <header className="App-header">
      <p>React is working</p>
      <NewComponent
      array={array}
      />
      <NewComponent/>
      
      </header>
    </div>
  );
}

export default App;
