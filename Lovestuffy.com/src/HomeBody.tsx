import Intro from "./Intro";

import WhatLoveStuffy from "./WhatLoveStuffy";

function HomeBody() {
  return (
    <div id="body" style={{ position: "fixed", top: 140 }}>
      <Intro />
      <WhatLoveStuffy />
    </div>
  );
}

export default HomeBody;
