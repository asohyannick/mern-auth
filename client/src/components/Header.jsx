import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Button} from 'flowbite-react';
import {toggleTheme} from '../redux/theme/themeSlice';
import {FaSun, FaMoon} from 'react-icons/fa6';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme)
  const dispatch = useDispatch();
  return (
    <div className="bg-green-700 text-white font-serif font-light">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-semibold">MERN Authentication Project</h1>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="w-7 h-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
          <Button
           className="w-12 h-10 hidden sm:inline"
           color="gray"
           pill
           onClick={() => dispatch(toggleTheme())}
          >
            {theme === 'light' ? <FaSun/> : <FaMoon/>}
          </Button>
        </ul>
      </div>
    </div>
  );
}
