import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { FaSpinner } from "react-icons/fa";

import { useRouter } from "next/navigation";

const SaveFormBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);

      toast({ title: "Success", description: "Your form has been saved!" });
      router.refresh();
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong!" });
    }
  };

  const savingForm = () => {
    startTransition(updateFormContent);
  };
  return (
    <Button
      variant="outline"
      className="gap-2"
      disabled={loading}
      onClick={savingForm}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
};

export default SaveFormBtn;
