"use client"
import './SignInForm.css';


export default function ForgotPassword() {
    
    return(
        <div>

            <form>
                {feedback ? <p className="feedback">{feedback}</p> : null}
                <div className='input-container'>
                    <label>
                        Password<br/>
                        <input 
                            type={hidePassword ? "password" : "text"} 
                            className='sign-in-input' 
                            value={user.password} 
                            onChange={(e) => setUser({...user,password: e.target.value})}
                        />

                        <button 
                            type='toggle-btn' 
                            className="visibility-btn"
                            onClick={handlePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="xl"/>
                        </button>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Confirm password <br/>
                        <div className='password-input-container'>
                            <input 
                                type={hidePassword ? "password" : "text"} 
                                className='sign-in-input' 
                                value={user.password} 
                                onChange={(e) => setUser({...user,password: e.target.value})}
                            />

                            <button 
                                type='toggle-btn' 
                                className="visibility-btn"
                                onClick={handlePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="xl"/>
                            </button>
                        </div>
                    </label>
                </div>

                <button type='submit' className="sign-in-btn" onClick={handleUserLogIn}>Reset Password</button>
                <Login/>
            </form>
        </div>
    );
}