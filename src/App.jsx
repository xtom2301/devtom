import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import { useEffect, useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`mx-6 md:max-w-screen-lg md:mx-auto ${darkMode ? 'dark' : ''}`}
    >
      <Router>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
