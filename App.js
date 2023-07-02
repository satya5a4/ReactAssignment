import './userRegistrationForm';
import UserRegistrationForm from './userRegistrationForm';
import RideBookingForm from './booking';
import RatingForm from './feedback';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginForm from './login';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route  path="/" element={<LoginForm/>} />
            <Route path="/registration" element={<UserRegistrationForm/>} />
            <Route path="/booking" element={<RideBookingForm/>} />
            <Route path="/feedback" element={<RatingForm/>} />
          </Routes> 
      </div>
    </Router>
  );
}

export default App;
