const LoginSignUp = () => {
    return (
        <div className="container">
            <form>
                <label htmlFor="username">Username</label><br />
                <input type="text" id="username" /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" /><br />

                <button type="button">Sign In</button>
                <button type="button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
                    Sign In with Google
                </button>

                <p>Don't have an account?</p>
                <a href="https://www.google.com">Sign Up</a>
            </form>
        </div>
    );
};

export default LoginSignUp;




