import Link from "next/link";
import './LandingNavbar.css'
function LandingNavbar({isLanding, user}) {



    return (
        <nav>
            <div className="nav-title"><Link href='/'>Door Hinge</Link></div>
            {isLanding ? 
            <>                        
                <div className="navbar-right">
                    <Link href="/sign-in">Sign In</Link>
                    <Link href="/sign-up">Sign Up</Link>
                </div>
            </>
            : 
            <>
                <div className="navbar-right">
                    <a className='name'>Hi, <b>{user.name}</b>!</a>
                    <Link href="/Explore">Explore</Link>
                    <Link href="/Likes">Likes</Link>
                </div>
            </>
            }

            
        </nav>
    );
};


export default LandingNavbar

