import { useContext } from "react";
import AccordionIcon from "./AccordionIcon";
import { AccordionContext } from "./Accordian";

const AccordionHeader = ({ children }) => {
  const { toggleExpand } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpand}>
      {children}
      <AccordionIcon />
    </button>
  );
};

export default AccordionHeader;
