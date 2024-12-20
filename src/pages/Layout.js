import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/ingatlanok">Ingatlanok</Link>
          </li>
          <li>
            <Link to="/urlap">Hirdetés hozzáadása</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;