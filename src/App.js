import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SplashScreen from './components/SplashScreen';
import ConnectForm from './components/SplashScreen/ConnectForm';
import SignupForm from './components/SplashScreen/SignupForm';
import RetrievePassword from './components/SplashScreen/RetrievePassword';
import EnterForm from './components/SplashScreen/EnterForm';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SplashScreen />}>
            <Route path='/' element={<EnterForm />} />
            <Route path='/login' element={<ConnectForm />} />
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/retrieve-password' element={<RetrievePassword />} />
          </Route>
          <Route path='/home' element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
