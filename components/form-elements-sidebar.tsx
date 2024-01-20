import React from "react";
import SidebarBtnElement from "./sidebar-btn";
import { FormElements } from "./form-elements";
import { Separator } from "./ui/separator";

const FormElementsSidebar = () => {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">
          Layout Elements
        </p>
        <SidebarBtnElement formElement={FormElements.Titlefield} />
        <SidebarBtnElement formElement={FormElements.Subtitlefield} />
        <SidebarBtnElement formElement={FormElements.Paragraphfield} />
        <SidebarBtnElement formElement={FormElements.Separatorfield} />
        <SidebarBtnElement formElement={FormElements.Spacerfield} />

        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">
          Form Elements
        </p>
        <SidebarBtnElement formElement={FormElements.Textfield} />
        <SidebarBtnElement formElement={FormElements.Numberfield} />
        <SidebarBtnElement formElement={FormElements.TextAreafield} />
        <SidebarBtnElement formElement={FormElements.Datefield} />
        <SidebarBtnElement formElement={FormElements.Selectfield} />
        <SidebarBtnElement formElement={FormElements.Checkboxfield} />
      </div>
    </div>
  );
};

export default FormElementsSidebar;
