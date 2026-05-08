import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/form-builder";
import React from "react";

const Builder = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("Form not Found!");
  }

  const parsedContent = JSON.parse(form.content);
  return <FormBuilder form={form} content={parsedContent} />;
};

export default Builder;
