import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/form-elements";
import FormSubmit from "@/components/form-submit";
import React from "react";

const SubmitPage = async ({ params }: { params: { formUrl: string } }) => {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("Form not found!");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmit formUrl={params.formUrl} content={formContent} />;
};

export default SubmitPage;
