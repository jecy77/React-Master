import { useNavigate, Link, NavLink } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="sticky top-0 bg-gray-800 text-white px-4 z-30">
        {/* <ul> */}
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

        {/* <li>
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
        </ul> */}
        <div className="container mx-auto flex justify-between items-center h-14">
          <div>
            <Link to="/" className="text-ml font-bold">
              Lean Canvas
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map(item => (
              <NavLink
                key={item.id}
                to={item.to}
                className="hover:text-gray-300"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <FaBars />
          </button>
          <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            짐코딩 강의
          </button>
        </div>

        {/* Mobile Menu */}
        <aside
          className={`
          fixed top-0 left-0 w-64 h-full bg-gray-800
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden transform transition-transform duration-300 ease-in-out
          `}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none"
              aria-label="Close menu"
              onClick={toggleMenu}
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map(item => (
              <NavLink
                key={item.id}
                to={item.to}
                className="hover:text-gray-300"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </header>
    </>
  );
}
