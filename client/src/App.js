import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {LandingPage} from "./screens/LandingPage.jsx"
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
         
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
