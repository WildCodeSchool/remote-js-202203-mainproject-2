import '../../assets/styles/splash.css';

function SplashScreen(){

    // Manage random background to show off when the application loads
    const backgrounds = [
        {url: 'avengers.jpg'}, 
        {url: 'captainthor.jpg'}, 
        {url: 'darkknight.jpg'}, 
        {url: 'delorean.jpg'}, 
        {url: 'halloween.jpg'}, 
        {url: 'interstellar.jpg'}, 
        {url: 'ironman.jpg'}, 
        {url: 'it.jpg'}, 
        {url: 'joker.jpg'}, 
        {url: 'junglecruise.jpg'}, 
        {url: 'sweeneytodd.jpg'}
    ];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    return (
      <section id="login" style={{backgroundImage: `url(./assets/images/backgrounds/${randomBackground.url})`}}>

        <h1>MyMovies</h1>

        <div className="content">
            <h2>Welcome</h2>
            <button id="enterApp">ENTER</button>
            <button id="signupHere">Your first time here? <span>Sign Up</span></button>
        </div>

      </section>
    );
}

export default SplashScreen;