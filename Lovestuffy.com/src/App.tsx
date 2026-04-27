import { Routes, Route } from "react-router";
import TopBar from "./TopBar";
import HomeBody from "./HomeBody";
import Characters from "./Characters";
import Shop from "./Shop";

function App() {
  return (
    <div id="app">
      <TopBar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<HomeBody />} />
      </Routes>
    </div>
  );
}

export default App;
