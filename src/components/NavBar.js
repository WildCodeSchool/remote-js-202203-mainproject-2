import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
    <nav>
      <NavLink to="/home" activeClassName='active'>
        <button>
          <i className="fa-solid fa-house"></i>
        </button>
      </NavLink>
      <NavLink to="/movies" activeClassName='active'>
        <button>
          <i className="fa-solid fa-film"></i>
        </button>
      </NavLink>
      <NavLink to="/loved" activeClassName='active'>
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
      </NavLink>
      <NavLink to="/shuffle" activeClassName='active'>
        <button>
          <i className="fa-solid fa-shuffle"></i>
        </button>
      </NavLink>
      <NavLink to="/profile" activeClassName='active'>
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </NavLink>
    </nav>
  );
}
