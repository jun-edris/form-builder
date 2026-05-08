"use client";

import { Button } from "./ui/button";

const VisitBtn = ({ shareUrl }: { shareUrl: string }) => {
  return (
    <Button
      className="w-[150px]"
      onClick={() => {
        window.open(`${window.location.origin}/submit/${shareUrl}`, "_blank");
      }}
    >
      Visit
    </Button>
  );
};

export default VisitBtn;
