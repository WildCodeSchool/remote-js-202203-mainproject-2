import './assets/styles/reset.css';
import './assets/styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SplashScreen from './components/SplashScreen';
import Movie from './components/Movie';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SplashScreen />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/movie/:id' element={<Movie />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
