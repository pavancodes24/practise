import { Navbar } from "./components/Navbar";
import { Fasak } from "./components/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Fasak />
      {/* fasak is routes.jsx */}
    </div>
  );
}
