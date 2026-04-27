import Intro from "./Intro"
import WhatLoveStuffy from "./WhatLoveStuffy"

function BodyH() {
    return (
        <div id="body" style={{ position: 'fixed', top: 140 }}>
          <Intro/>
          <WhatLoveStuffy/>
      <div id="Links">
        <h2>Links</h2>
        <ul>
          <li>
            <a href="Shop">
              <h3>LoveStufy.Store</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default BodyH