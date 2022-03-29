import { Link } from 'react-router-dom';

function SignupForm(){

    return (
      <>
        <h2>Create account</h2>
        <div className='connect-forms'>
            <form>
                <fieldset>
                    <div className="form-row">
                        <input type="text" name="firstname" id="firstnameSignup" placeholder='Firstname' />
                    </div>
                    <div className="form-row">
                        <input type="email" name="email" id="emailSignup" placeholder='E-mail*' />
                    </div>
                    <div className="form-row">
                        <input type="text" name="password" id="passwordSignup" placeholder='Password*' />
                    </div>
                    <div className="form-btn">
                        <button>SIGN UP</button>
                    </div>
                </fieldset>
            </form>
            <Link to="/login"><button className='text-button'>Remember you <span>have an account?</span></button></Link>
        </div>
      </>
    );
}

export default SignupForm;