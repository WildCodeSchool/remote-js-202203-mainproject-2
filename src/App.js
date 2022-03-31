import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SplashScreen from './components/SplashScreen';
import ConnectForm from './components/SplashScreen/ConnectForm';
import SignupForm from './components/SplashScreen/SignupForm';
import RetrievePassword from './components/SplashScreen/RetrievePassword';
import EnterForm from './components/SplashScreen/EnterForm';
import Movie from './components/Movie';
import MovieLibrary from './components/MovieLibrary';
import RandomJoke from './components/RandomJoke';

import './assets/styles/app.css';
import React from 'react';

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
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/library' element={<MovieLibrary />}/>

          { /* 
          TODO 👇 à déplacer dans le toast
          */}
          <Route path='/joke' element={<RandomJoke />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
