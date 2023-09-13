import { ProfilePicture } from "./components/ProfilePicture";
import PersonalInfo from "./components/PersonalInfo";
import Buttons from "./components/Buttons";
import Description from "./components/Description";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProfilePicture />
      <PersonalInfo />
      <Buttons />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
