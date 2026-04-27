import { Link } from "react-router";
import LoveStuffyImage from "./LoveStuffyImage";

function TopBar() {
  return (
    <div id="topbar" className="topbar">
      <ul className="toplist">
        <li>
          <LoveStuffyImage width={100} />
        </li>
        <li>
          <div className="topbutton" id="homebutton">
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </div>
        </li>
        <li>
          <div className="topbutton" id="shopbutton">
            <Link to="/characters">
              <h2>Characters</h2>
            </Link>
          </div>
        </li>
        <li>
          <div className="topbutton" id="shopbutton">
            <Link to="/shop">
              <h2>Store</h2>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default TopBar;
