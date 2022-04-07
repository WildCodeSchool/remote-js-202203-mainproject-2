import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
    <nav>
      <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
        <button>
          <i className="fa-solid fa-house"></i>
        </button>
      </NavLink>
      <NavLink to="/library" className={({ isActive }) => isActive ? 'active' : ''}>
        <button>
          <i className="fa-solid fa-film"></i>
        </button>
      </NavLink>
      <NavLink to="/loved" className={({ isActive }) => isActive ? 'active' : ''}>
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
      </NavLink>
      <NavLink to="/shuffle" className={({ isActive }) => isActive ? 'active' : ''}>
        <button>
          <i className="fa-solid fa-shuffle"></i>
        </button>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </NavLink>
    </nav>
  );
}
