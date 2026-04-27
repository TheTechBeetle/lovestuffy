import Intro from "./Intro";
import Links from "./Links";
import WhatLoveStuffy from "./WhatLoveStuffy";

function BodyH() {
  return (
    <div id="body" style={{ position: "fixed", top: 140 }}>
      <Intro />
      <WhatLoveStuffy />
      <Links />
    </div>
  );
}

export default BodyH;
