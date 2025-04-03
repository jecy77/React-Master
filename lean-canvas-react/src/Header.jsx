import { useNavigate, Link, NavLink } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <ul>
          {/* 페이지 이동 */}
          {/* 방법 1. Navigate 이용 
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/contact')}>Contact</li> */}

          {/* 방법 2. anchor 태그 이용
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li> */}

          {/* 방법 3. Link 컴포넌트 */}
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
