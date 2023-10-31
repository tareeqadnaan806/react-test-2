import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className=" flex justify-center items-center text-xl">
      <Link to="/" className="link">About</Link>
      <Link to="/certificates" className="link">Certificates</Link>
      <Link to="/projects" className="link">Projects</Link>
      <Link to="/more" className="link">More</Link>
      <Link to="/contact" className="link">Contact</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
