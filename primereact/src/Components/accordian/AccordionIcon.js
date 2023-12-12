import { useContext } from "react";
import { AccordionContext } from "./Accordian";

const AccordionIcon = () => {
  const { expand } = useContext(AccordionContext);
  return <span>{expand ? "-" : "+"}</span>;
};

export default AccordionIcon;
