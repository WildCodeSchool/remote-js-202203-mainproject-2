import { Link } from 'react-router-dom';

export default function ConnectForm(){

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Create user in database
        // Code here…
        location.replace('/home');
    };

    return (
        <>
        <h2>Connect</h2>
        <div className='connect-forms'>
            <form onSubmit={handleSubmit} method="POST">
                <fieldset>
                    <div className="form-row">
                        <input type="email" name="email" id="emailSignin" placeholder='E-mail*' />
                    </div>
                    <div className="form-row">
                        <input type="password" name="password" id="passwordSignin" placeholder='Password*' />
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