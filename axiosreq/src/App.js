import "./App.css";
import Axiosapi from "./Components/Axiosapi";
import Context from "./Components/Context";
import Fetch from "./Components/Fetch";
import Menu from "./Components/Menu";
import UseMemos from "./Components/UseMemo";

function App() {
  return (
    <div className="App">
      <Axiosapi />
      <Fetch />
      <Context />
      <Menu />
      <UseMemos />
    </div>
  );
}

export default App;
