import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button>
          <i className="fa-solid fa-house"></i>
        </button>
      </Link>
      <Link to="/">
        <button>
          <i className="fa-solid fa-film"></i>
        </button>
      </Link>
      <Link to="/">
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
      </Link>
      <Link to="/">
        <button>
          <i className="fa-solid fa-shuffle"></i>
        </button>
      </Link>
      <Link to="/">
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </Link>
    </nav>
  );
}
