import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo-big.png'
import { FaUser } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut}=useAuth();
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      alert('user successfully logged out');
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-8 md:w-12" src={logo} alt="" />
        <a className="btn btn-ghost hidden md:flex text-xl md:text-2xl"><strong className='font-stretch-90%'>Job Portal</strong></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? 
          <>
           <button className="btn mr-2" onClick={handleLogOut}>Log Out</button>
           <button className="btn">{ <img src={user.photoURL} alt="Profile" className="object-contain w-6 h-6 rounded-full" />||<FaUser></FaUser>}</button>
          </> 
          :
          <>
          <Link to="/register" className="btn mr-2">Register</Link>
        <Link to='signIn'className="btn">Sign In</Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
