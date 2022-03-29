import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../assets/styles/splash.css';

// List of available background to pick from
const backgrounds = [
    { url: 'avengers.jpg' },
    { url: 'captainthor.jpg' },
    { url: 'darkknight.jpg' },
    { url: 'delorean.jpg' },
    { url: 'halloween.jpg' },
    { url: 'interstellar.jpg' },
    { url: 'ironman.jpg' },
    { url: 'it.jpg' },
    { url: 'joker.jpg' },
    { url: 'junglecruise.jpg' },
    { url: 'sweeneytodd.jpg' },
];

function SplashScreen() {

    const [randomBackground, setRandomBackground] = useState('');

    // Settle the random background and change it on every render
    React.useEffect(() => {
        chooseRandomBackground();
    }, []);

    // Choose a random background among the available ones
    function chooseRandomBackground() {
        setRandomBackground(
            backgrounds[Math.floor(Math.random() * backgrounds.length)]
        );
    }

  return (
    <section
      id="login"
      style={{
        backgroundImage: `url(./assets/images/backgrounds/${randomBackground.url})`,
      }}
    >
      <h1>MyMovies</h1>
      <div className="content">
        <Outlet />
      </div>
    </section>
  );
}

export default SplashScreen;
