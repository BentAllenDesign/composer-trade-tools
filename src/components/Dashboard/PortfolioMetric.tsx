import { Add } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";

type PortfolioMetricProps = {
  type?: "currency" | "percent";
  title?: string;
  value?: string | number;
  dollarChange?: string | number;
  percentChange?: string | number;
  unallocatedCash?: string | number;
  skeleton?: boolean;
};

export const PortfolioMetric: React.FC<PortfolioMetricProps> = ({
  type = "currency",
  title,
  value,
  dollarChange,
  percentChange,
  unallocatedCash: unaolloctedCash,
  skeleton,
}) => {
  if (skeleton) {
    return (
      <Card
        component={Button}
        variant="outlined"
        className="border-dashed border-4 box-border rounded-2xl min-w-56"
      >
        <CardContent className="items-center justify-center flex flex-col p-3 md:p-4">
          <Add className="text-4xl text-gray-300" />
          <Typography className="text-gray-400 capitalize">
            Add Portfolio Metric
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="outlined" className="bg-white rounded-2xl min-w-56">
      <CardContent className="p-3 md:p-4">
        <Typography className="font-medium tracking-tighter">
          {title}
        </Typography>
        <Typography className="text-2xl font-bold">
          {type === "percent" &&
            `${Math.round((Number(value) + Number.EPSILON) * 10000) / 100}%`}
          {type === "currency" &&
            value?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
        </Typography>
        <Box className="flex gap-x-2">
          <Typography
            className={clsx(
              !unaolloctedCash && "hidden",
              "font-medium text-gray-500",
            )}
          >
            {unaolloctedCash?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            unallocated
          </Typography>
          <Typography
            className={clsx(
              !dollarChange && "hidden",
              Number(dollarChange) < 0 && "text-red-600",
              "font-medium",
            )}
          >
            {dollarChange?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <Typography
            className={clsx(
              !percentChange && "hidden",
              Number(percentChange) < 0 ? "text-red-600" : "text-green-600",
              "font-medium",
            )}
          >
            (
            {Math.round((Number(percentChange) + Number.EPSILON) * 10000) / 100}
            %)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
