import "./App.css";
import ChangeColour from "./components/ChangeColour";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColour />
    </div>
  );
}

export default App;
