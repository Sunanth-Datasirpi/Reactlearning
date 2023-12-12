import { useContext } from "react";
import { AccordionContext } from "./Accordian";

const AccordionContent = ({ children }) => {
  const { expand } = useContext(AccordionContext);

  return <>{expand && <div className="content">{children}</div>}</>;
};

export default AccordionContent;
