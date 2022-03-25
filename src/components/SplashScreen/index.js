import '../../assets/styles/splash.css';

function SplashScreen(){
    return (
      <section id="login">

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