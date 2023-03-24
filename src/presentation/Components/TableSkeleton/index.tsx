import { Skeleton } from "@mui/material";
import React from "react";

export const TableSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={80}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={30}
        animation={"wave"}
      ></Skeleton>
    </div>
  );
};
