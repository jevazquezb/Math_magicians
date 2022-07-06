import { NavLink } from 'react-router-dom';
import CalcUI from '../components/Calculator';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <NavLink className="menu-item" to="/">Home</NavLink>
      <NavLink className="menu-item" to="/calculator">Calculator</NavLink>
      <NavLink className="menu-item" to="/quote">Quote</NavLink>
    </nav>
  </header>
);

const Home = () => (
  <>
    <h2>Welcome to our page!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </>
);

const CalcSec = () => (
  <>
    <h2>Let&apos;s do some math!</h2>
    <CalcUI />
  </>
);

const Quote = () => (
  <>
    <div className="quote-cont">
      <p>
        <i>
          &quot;The enchanting charms of this sublime science, mathematics,
          reveal themselves in all their beauty only to those who have the
          courage to go deeply into it&quot;.
        </i>
        — Carl Friedrich Gauss.
      </p>
    </div>
  </>
);

export {
  Header,
  Home,
  CalcSec,
  Quote,
};
