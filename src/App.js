import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/auth';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
