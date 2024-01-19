"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const VisitBtn = ({ shareUrl }: { shareUrl: string }) => {
  const [mounted, setMounted] = useState(false);
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;

  const toshareLink = () => {
    window.open(shareLink, "_blank");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button className="w-[200px]" onClick={toshareLink}>
      Visit
    </Button>
  );
};

export default VisitBtn;
