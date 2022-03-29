import React, { useState } from 'react';
import '../../assets/styles/splash.css';
import EnterForm from './EnterForm';

function SplashScreen() {

    const [randomBackground, setRandomBackground] = useState('');
    React.useEffect(() => {
        chooseRandomBackground();
    }, '');

    function chooseRandomBackground() {
        setRandomBackground(
            backgrounds[Math.floor(Math.random() * backgrounds.length)]
        );
    }

  // Manage random background to show off when the application loads
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

  return (
    <section
      id="login"
      style={{
        backgroundImage: `url(./assets/images/backgrounds/${randomBackground.url})`,
      }}
    >
      <h1>MyMovies</h1>

      <div className="content">
        <EnterForm  />
      </div>
    </section>
  );
}

export default SplashScreen;
