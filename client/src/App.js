import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "./screens/LandingPage.jsx"
import Header from './components/Header.jsx';
import LoginPage from './screens/LoginPage.jsx';
import RegisterPage from './screens/RegisterPage.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<RegisterPage/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
