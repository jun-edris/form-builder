import { GetFormStats } from "@/actions/form";
import React from "react";
import StatsCard from "../stats-cards";

const CardWrapper = async () => {
  const stats = await GetFormStats();
  return <StatsCard loading={false} data={stats} />;
};

export default CardWrapper;
