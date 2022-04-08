import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SplashScreen from './components/SplashScreen';
import ConnectForm from './components/SplashScreen/ConnectForm';
import SignupForm from './components/SplashScreen/SignupForm';
import RetrievePassword from './components/SplashScreen/RetrievePassword';
import EnterForm from './components/SplashScreen/EnterForm';
import Movie from './components/Movie';
import MovieLibrary from './components/MovieLibrary';
import RandomMovie from './components/Movie/RandomMovie';

import './assets/styles/app.css';
import React from 'react';
import UserProfile from './components/UserProfile';
import EditProfile from './components/UserProfile/EditProfile';
import InfosProfile from './components/UserProfile/InfosProfile';

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
          <Route path='/profile' element={<UserProfile />}>
            <Route path='/profile' element={<InfosProfile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
          </Route>
          <Route path='/library' element={<MovieLibrary type={'all'} title={'My Movie Library'}/>}/>
          <Route path='/loved' element={<MovieLibrary type={'loved'} title={'My Loved Movies'}/>}/>
          <Route path='/shuffle' element={<RandomMovie/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
