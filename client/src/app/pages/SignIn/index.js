import Login from "@/app/components/GoogleSignIn/Login";
import SignInForm from "@/app/components/SignInForm";
import "./SignIn.css"
// should make a link component for the "sign up"
export default function SignIn() {
    return(
        <div className="sign-in-container">
            <div className="left-container">

            </div>
            <div className="right-container">
                <h1>Insert Logo Here</h1>
                <SignInForm/>
                {/* <Login/> */}
                <p>Don't have an account? </p>
            </div>
        </div>
    );
}