import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
