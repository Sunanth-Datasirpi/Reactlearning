import "./App.css";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import PrimeButtons from "./Components/PrimeButtons";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "./styles.css";
import Accordion from "./Components/accordian/Accordian";
import Editable from "./Components/editable/Editable";

function App() {
  const [date, setDate] = useState();
  const [text, setText] = useState("");
  const toastRef = useRef(null); // Initialize with null

  const ButtonClick = () => {
    if (text) {
      toastRef.current.show({
        severity: "info",
        summary: "Success",
        detail: "Data Submitted",
      });
    } else {
      toastRef.current.show({
        severity: "error",
        summary: "Error",
        detail: "Value is required",
      });
    }
  };

  return (
    <div className="App">
      <h1>PimeReact</h1>
      <Toast ref={toastRef} />
      <label>Enter the Date:</label>
      <Calendar value={date} onChange={(e) => setDate(e.value)} />
      <br />
      <br />
      <label>Enter the name: </label>
      <InputText value={text} onChange={(e) => setText(e.target.value)} />
      <Button label="Submit" icon="pi pi-check" onClick={ButtonClick} />
      <PrimeButtons />

      <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>
      <i className="pi pi-spin pi-cog" style={{ fontSize: "2rem" }}></i>
      <br />
      <Accordion
        title="Click here to expand"
        content="Creating Reusable Components"
      />
      <br />
      <Editable />
    </div>
  );
}

export default App;
