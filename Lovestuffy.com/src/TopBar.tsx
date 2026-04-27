import LoveStuffyImage from "./LoveStuffyImage";

function TopBar() {
  return (
    <div id="topbar" className="topbar">
      <ul className="toplist">
        <li>
          <LoveStuffyImage width={100} />
        </li>
        <li>
          <a href="index.html">
            <div className="topbutton" id="homebutton">
              <h2>Home</h2>
            </div>
          </a>
        </li>
        <li>
          <a href="SHOP">
            <div className="topbutton" id="shopbutton">
              <h2>Store</h2>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default TopBar;
