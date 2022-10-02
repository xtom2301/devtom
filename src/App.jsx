import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div className='mx-6'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
