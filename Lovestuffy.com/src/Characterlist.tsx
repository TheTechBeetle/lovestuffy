import LoveStufy from "./assets/Lovestufy.jpg";
import Koko from "./assets/Koko.png";
import Rkoko from "./assets/Rkoko.jpg";
import Dstufy from "./assets/Dstufy.png"
const CHARACTERS = [
  { 
    name: "Lovestufy(real)",
    image: LoveStufy,
    description: "The real Lovestufy",
  },
  {
    name: "KoKo(real)",
    image: Rkoko,
    description: "The real KoKo",
  },
  {
    name: "lovestufy",
    image: Dstufy,
    description: "I EAT",
  },
  {
    name: "KoKo",
    image: Koko,
    description: "I am a axolotl",
  },
];
export default Characterlist;
function Characterlist(){
  return(CHARACTERS)
}