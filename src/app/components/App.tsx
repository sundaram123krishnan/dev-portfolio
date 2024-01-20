import HomeText from "./HomeText";
import RollOver from "./HomeRollOver";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="h-scren bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10  lg:mt-80 lg:gap-48">
        <HomeText />
        <RollOver />
      </div>
    </div>
  );
}
