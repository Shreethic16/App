import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Forget from './components/Forgot';
import Loginpage from './Component/Login';
import SignUpPage from './Component/Signup';
import Dashboard from './Component/Dashboard';
import Forget from './Component/Forgot';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/password" element={<Forget />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;