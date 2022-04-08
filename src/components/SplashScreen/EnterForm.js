import { Link } from 'react-router-dom';

export default function EnterForm(){

    const opening = new Audio('./assets/sounds/opening.mp3');
    const start = () => {
      opening.addEventListener('ended', () => {
        document.getElementById('enterApp').click();
      });
      opening.play();
    };

    return (
      <>
        <h2>Welcome</h2>
        <div className="connect-forms">
          <Link to="/login"><button id="enterApp">ENTER</button></Link>
          <button id="enterFake" onClick={start}>ENTER</button>
          <Link to="/signup">
            <button id="signupHere" className='text-button'>Your first time here? <span>Sign Up</span></button>
          </Link>
        </div>
      </>
    );
}