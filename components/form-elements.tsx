import React from "react";
import { TextFieldFormElement } from "./fields/textfield";
import { TitleFieldFormElement } from "./fields/titlefield";
import { SubTitlefieldFormElement } from "./fields/subtitlefield";
import { ParagraphfieldFormElement } from "./fields/paragraphfield";
import { SeparatorfieldFormElement } from "./fields/separatorfield";
import { SpacerfieldFormElement } from "./fields/spacerfield";
import { NumberfieldFormElement } from "./fields/numberfield";
import { TextAreaFieldFormElement } from "./fields/textareafield";
import { DatefieldFormElement } from "./fields/datefield";
import { SelectfieldFormElement } from "./fields/selectfield";
import { CheckboxFieldFormElement } from "./fields/checkboxfield";

export type ElementsType =
  | "Textfield"
  | "Titlefield"
  | "Subtitlefield"
  | "Paragraphfield"
  | "Separatorfield"
  | "Spacerfield"
  | "Numberfield"
  | "TextAreafield"
  | "Datefield"
  | "Selectfield"
  | "Checkboxfield";

export type SubmitFunctionType = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;
  construct: (id: string) => FormElementInstance;
  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  formComponent: React.FC<{
    elementInstance: FormElementInstance;
    submitValue?: (key: string, value: string) => void;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  validate: (FormElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  Textfield: TextFieldFormElement,
  Numberfield: NumberfieldFormElement,
  TextAreafield: TextAreaFieldFormElement,
  Datefield: DatefieldFormElement,
  Selectfield: SelectfieldFormElement,
  Checkboxfield: CheckboxFieldFormElement,
  Titlefield: TitleFieldFormElement,
  Subtitlefield: SubTitlefieldFormElement,
  Paragraphfield: ParagraphfieldFormElement,
  Separatorfield: SeparatorfieldFormElement,
  Spacerfield: SpacerfieldFormElement,
};
