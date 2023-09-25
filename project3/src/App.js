import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import Form from "./components/Form";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import HookEffectCounter from "./components/HookEffectCounter";
import Focusinputref from "./components/Focusinputref";
import ContextTutorial from "./components/ContextTutorial";
import FormFn from "./components/FormFn";

function App() {
  return (
    <div className="App">
      <Greet name="Sunanth" colour="violet">
        <i>How are you</i>
      </Greet>
      <Greet name="Messi" colour="blue" />
      {/* passing name and colour using props */}
      <Welcome name="Website" />
      <Welcome name="Virtual World" />
      <Message />
      <Counter />
      <br />
      <FunctionClick />
      <br />
      <ClassClick />
      <ParentComponent />
      <br />
      <br />
      <Form />
      <UseState />
      <br />
      <UseReducer />
      <br />
      <HookEffectCounter />
      <Focusinputref />
      <ContextTutorial />
      <FormFn></FormFn>
    </div>
  );
}

export default App;
