import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-6">
        <Link to="/" className="text-2xl">
          VANS<span className="font-extrabold">LIFE</span>
        </Link>
        <nav className="flex items-center justify-between gap-4">
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="about" className="nav-link">
            ABOUT
          </NavLink>
          <NavLink to="vans" className="nav-link">
            VANS
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
