import { Link } from 'react-router-dom';

function ConnectForm(){

    return (
        <>
        <h2>Connect</h2>
        <div className='connect-forms'>
            <form>
                <fieldset>
                    <div className="form-row">
                        <input type="email" name="email" id="emailSignin" placeholder='E-mail*' />
                    </div>
                    <div className="form-row">
                        <input type="text" name="password" id="passwordSignin" placeholder='Password*' />
                    </div>
                    <div className="form-btn">
                        <button>SIGN IN</button>
                    </div>
                </fieldset>
            </form>
            <Link to="/retrieve-password"><button className='text-button'>Forgot your password? <span>Reset it here</span></button></Link>
        </div>
      </>
    );
}

export default ConnectForm;