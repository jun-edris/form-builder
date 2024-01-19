import CreateFormBtn from "@/components/create-form-btn";
import FormCards from "@/components/form-cards";
import FormCardSkeleton from "@/components/skeleton/form-card-skeleton";
import StatsCards from "@/components/stats-cards";
import { Separator } from "@/components/ui/separator";
import CardWrapper from "@/components/wrappers/card";
import React, { Suspense } from "react";

const Dashboard = () => {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
        <Suspense
          fallback={Array(4).map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
