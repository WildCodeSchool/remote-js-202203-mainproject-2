import { Link } from 'react-router-dom';

function RetrievePassword(){

    return (
      <>
      <h2>
        Remember
        <em>Remember… the 5<sup>th</sup> of november</em>
      </h2>
      <div className='connect-forms'>
          <form>
              <fieldset>
                  <div className="form-row">
                      <input type="email" name="email" id="emailSignin" placeholder='E-mail*' required />
                  </div>
                  <div className="form-btn">
                      <button>SEND E-MAIL</button>
                  </div>
                  <span className="form-note">If your email is part of our database, youʼll receive direction to reset your password through mail.</span>
              </fieldset>
          </form>
          <Link to="/signup"><button className='text-button'>Need a new account? <span>Sign up here</span></button></Link>
      </div>
    </>
    );
}

export default RetrievePassword;