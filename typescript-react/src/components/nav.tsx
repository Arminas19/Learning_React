import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'

export const Nav = () => {
    const [user] = useAuthState(auth);
    const LogOut = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <nav className="nav">
                <div className="links">
                    <Link to='/'> Home </Link>
                    { !user? (<Link to='/login'> Login </Link>): (
                    <Link to='/posts'> Create Posts </Link>)}
                </div>
                <div className="user">
                    {user && (
                        <>
                            <p> {user?.displayName || "Unknown User"} </p>
                            <img src={user?.photoURL || ""} width='30' height='30' />
                            <button onClick={LogOut} className='nav-button'> Log out </button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};