import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx';
import LandingPage from './screens/LandingPage.jsx';
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
