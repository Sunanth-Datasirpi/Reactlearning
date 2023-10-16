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
import PersonList from "./components/PersonList";
import Local from "./components/Local";
import SessionStorage from "./components/SessionStorage";

function App() {
  return (
    <div className="App">
      Function Componenet and passing values using props
      <Greet name="Sunanth" colour="violet">
        <i>How are you</i>
      </Greet>
      {/* Class components and passing values */}
      <Welcome name="Website" />
      {/* class state */}
      <Message />
      {/* Change state in class */}
      <Counter />
      <br />
      {/* event handling in function */}
      <FunctionClick />
      <br />
      {/* event handling in class */}
      <ClassClick />
      {/* Parent to child communication */}
      <ParentComponent />
      <br />
      <br />
      {/* Creating form using class componenet */}
      <Form />
      {/* Usestate hook */}
      <UseState />
      <br />
      {/* usereducer hook */}
      <UseReducer />
      <br />
      {/* Useeffect Hook */}
      <HookEffectCounter />
      {/* Focus button using UseRef */}
      <Focusinputref />
      {/* Using useContext hook */}
      {/* <ContextTutorial /> */}
      {/* Creating Form using Function Componenet */}
      <FormFn />
      {/* list  */}
      <PersonList />
      <br />
      {/* Local storage */}
      <Local />
      {/* session storage */}
      <SessionStorage />
    </div>
  );
}

export default App;
