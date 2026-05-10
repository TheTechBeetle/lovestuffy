import LoveStuffyImage from "./LoveStuffyImage";

function Intro() {
  return (
    <div id="Header">
      <h1>LoveStufy.com</h1>
      <h3>Welcome to LoveStufy.com</h3>
      <p>Lovestufy is pronounced Luv-stuff-e</p>
      <a>and spelled "LoveStufy"</a>
      <a style={{color:"grey", fontSize: "small"}}>(not lovestuffy)</a>
      <br />
      <LoveStuffyImage width={200} />
    </div>
  );
}

export default Intro;
