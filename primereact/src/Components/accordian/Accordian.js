import { createContext } from "react";
import { useToggle } from "../../hooks/useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand,
  };

  return (
    <Provider value={value}>
      <div className="accordion">
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </div>
    </Provider>
  );
};

export default Accordion;

export { AccordionContext };
