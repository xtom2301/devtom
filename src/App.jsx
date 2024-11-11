import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="mx-6">
      <Router>
        <Navbar />
        <div className="md:max-w-screen-lg md:mx-auto">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
