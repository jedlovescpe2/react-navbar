import { useRef, useState } from "react";
import { links } from "../data";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";

const Example = () => {
  const [showLinks, setShowLinks] = useState(false);

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
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        
          <ul className="links" ref={linksRef} style={linkStyles}>
            {links.map(({ url, id, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  );
};
export default Example;
