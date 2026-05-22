import { Link } from "react-router-dom";
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
} from "../styles/common";

export default function Header() {
  return (
    <nav className={navbarClass}>
      <div className={navContainerClass}>

        {/* Brand — left side */}
        <Link to="/" className={`${navBrandClass} flex items-center gap-2`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1378/1378582.png"
            alt="BlogSpace logo"
            className="h-7 w-7 rounded-lg"
          />
          <span>BlogSpace</span>
        </Link>

        {/* Nav links — right side */}
        <div className={navLinksClass}>
          <Link
            to="/"
            style={{ color: '#9ca3af' }}
            onMouseEnter={e => e.target.style.color = '#2563eb'}
            onMouseLeave={e => e.target.style.color = '#9ca3af'}
          >
            Home
          </Link>
          <Link
            to="/register"
            style={{ color: '#9ca3af' }}
            onMouseEnter={e => e.target.style.color = '#2563eb'}
            onMouseLeave={e => e.target.style.color = '#9ca3af'}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            style={{ color: '#9ca3af' }}
            onMouseEnter={e => e.target.style.color = '#2563eb'}
            onMouseLeave={e => e.target.style.color = '#9ca3af'}
          >
            Log In
          </Link>
        </div>

      </div>
    </nav>
  );
}