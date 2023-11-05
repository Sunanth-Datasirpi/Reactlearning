import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["yellow", "green", "purple", "red", "black"],
        borderColor: "black",
      },
    ],
  });

  return (
    <div>
      <div style={{ width: 700 }}>
        <h2>Bar Chart</h2>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <h2>Line Chart</h2>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <h2>Pie Chart</h2>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
