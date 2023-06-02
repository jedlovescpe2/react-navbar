import { useRef, useState } from "react";
import { links, social } from "../data";
// import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef<any>(null);
  const linksRef = useRef<any>(null);

  const toggleLinks = () => {
    console.log();
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo-container">
            <img src='https://www.jedllenado.com/static/portfolio2/personal-hotspot/images/favicon.ico' alt="logo" className="logo" />
            <span> </span>
            <span className="fname">jed</span>
            <span className="lname">llenado</span>
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          style={linkStyles}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ url, id, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* social links */}
        <ul className="social-icons">
          {social.map(({id,url,icon}) => {
            return (
              <li key={id}><a href={url}>{icon}</a></li>
            )
          })}
        </ul>

      </div>
    </nav>
  );
};
export default Navbar;
