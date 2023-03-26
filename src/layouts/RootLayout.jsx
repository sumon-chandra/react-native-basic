import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="career">Careers</NavLink>
        </nav>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
