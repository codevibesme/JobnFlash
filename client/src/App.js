import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage.jsx";
import Header from "./components/Header.jsx";
import LoginPage from "./screens/LoginPage.jsx";
import RegisterPage from "./screens/RegisterPage.jsx";
import Footer from "./components/Footer.jsx";
import JobsPage from "./screens/JobsPage.jsx";
import JobPage from "./screens/JobPage.jsx";
import LoginSuccess from "./screens/LoginSuccess.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<RegisterPage />} />
          <Route exact path="/jobs" element={<JobsPage />} />
          <Route exact path="/job/:id" element={<JobPage />} />
          <Route
            exact
            path="/loginsuccess/:id/:pass"
            element={<LoginSuccess />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
