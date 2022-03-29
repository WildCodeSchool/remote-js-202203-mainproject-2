import { Link } from 'react-router-dom';

function EnterForm(){

    return (
      <>
        <h2>Welcome</h2>
        <div className="connect-forms">
          <Link to="/login"><button id="enterApp">ENTER</button></Link>
          <Link to="/signup">
            <button id="signupHere" className='text-button'>Your first time here? <span>Sign Up</span></button>
          </Link>
        </div>
      </>
    );
}

export default EnterForm;