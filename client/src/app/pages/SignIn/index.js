import Login from "@/app/components/GoogleSignIn/Login";
import SignInForm from "@/app/components/SignInForm";
// should make a link component for the "sign up"
export default function SignIn() {
    return(
        <div className="sign-in-container">
            <h1>Insert Logo Here</h1>
            <SignInForm/>
            {/* <Login/> */}
            <p>Don't have an account? </p>
        </div>
    );
}