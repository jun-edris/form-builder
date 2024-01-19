import React from "react";
import SidebarBtnElement from "./sidebar-btn";
import { FormElements } from "./form-elements";
import { Separator } from "./ui/separator";

const FormElementsSidebar = () => {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <SidebarBtnElement formElement={FormElements.Textfield} />
    </div>
  );
};

export default FormElementsSidebar;
