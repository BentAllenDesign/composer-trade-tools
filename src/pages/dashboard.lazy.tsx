import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { ResponsiveLine, Serie } from "@nivo/line";
import { createLazyFileRoute } from "@tanstack/react-router";
import dayjs from "dayjs";
import React from "react";
import { PortfolioMetric } from "../components/Dashboard/PortfolioMetric";
import { useGetPortfolioOverviewByAccountIdQuery } from "../graphql/get-portfolio-overview-by-account-id.g";
import { useAccountContext } from "../state/global/AccountContext";

export const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = React.useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [portfolioChartData, setPortfolioChartData] = React.useState<Serie[]>(
    [],
  );

  const { activeAccountId } = useAccountContext();

  const handleDateChange = React.useCallback(
    (dates: [Date | null, Date | null]) => {
      setDateRange(dates);
      // Here you should query your database for the new data based on the selected dates.
      // Update your state with the new data.
    },
    [],
  );

  const { data } = useGetPortfolioOverviewByAccountIdQuery({
    skip: !activeAccountId,
    variables: { account_id: activeAccountId! },
    pollInterval: 5000,
    onError: console.error,
    onCompleted: ({ portfolioHistory }) => {
      setPortfolioChartData([
        {
          id: "portfolio",
          data: portfolioHistory!.series_unix_timestamps.map(
            (timestamp, index) => ({
              x: dayjs(timestamp).format("YYYY-MM-DD"),
              y: portfolioHistory?.series_values[index],
            }),
          ),
        },
      ]);
    },
  });

  const lowestPortfolioValue = React.useMemo<number>(() => {
    const series = data?.portfolioHistory?.series_values.map(
      (value) => value as number,
    );
    return Math.min(...(series || [0]));
  }, [data?.portfolioHistory?.series_values]);

  return (
    <Box className="box-border my-6 overflow-x-visible">
      <Box className="flex gap-6 sm:flex-wrap overflow-x-scroll sm:overflow-hidden px-6 pb-6 gradient-mask-r-[transparent,rgba(0,0,0,1.0)_5%,rgba(0,0,0,1.0)_95%] sm:gradient-mask-none">
        <PortfolioMetric
          title="Portfolio Value"
          value={data?.portfolioOverview?.portfolio_value}
          dollarChange={data?.portfolioOverview?.todays_dollar_change}
          percentChange={data?.portfolioOverview?.todays_percent_change}
        />
        <PortfolioMetric
          title="Total Cash"
          value={data?.portfolioOverview?.total_cash}
          unallocatedCash={data?.portfolioOverview?.total_unallocated_cash}
        />
        <PortfolioMetric
          type="percent"
          title="Cumulative Return"
          value={data?.portfolioOverview?.simple_return}
        />
        <PortfolioMetric skeleton />
      </Box>
      <Box className="hidden flex gap-6">
        <Card className="bg-white w-full overflow-visible" variant="outlined">
          <CardContent className="p0">
            <Box className="flex justify-between items-center mb-4">
              <Box>
                <Typography
                  component="h2"
                  className="tracking-tighter font-semibold text-2xl"
                >
                  Portfolio Overview
                </Typography>
                <Typography
                  variant="h6"
                  className="text-secondary-500"
                ></Typography>
                <Typography className="text-green-600 text-4xl font-medium">
                  {data?.portfolioOverview?.portfolio_value?.toLocaleString(
                    "en-US",
                    { style: "currency", currency: "USD" },
                  ) || 0.0}
                </Typography>
              </Box>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  views={["year", "month"]}
                  label="Start Date"
                  defaultValue={dayjs().subtract(2, "month").toDate()}
                  value={dateRange[0]}
                  onChange={(date: Date | null) =>
                    handleDateChange([date, dateRange[1]])
                  }
                  slotProps={{
                    textField: { size: "small", className: "w-36" },
                  }}
                />
                <DatePicker
                  views={["year", "month"]}
                  label="End Date"
                  defaultValue={dayjs().toDate()}
                  value={dateRange[1]}
                  onChange={(date) => handleDateChange([dateRange[0], date])}
                  slotProps={{
                    textField: { size: "small", className: "w-36" },
                  }}
                />
              </LocalizationProvider> */}
            </Box>
            <div style={{ height: 400 }}>
              <ResponsiveLine
                data={portfolioChartData}
                margin={{ top: 10, bottom: 1 }}
                xScale={{
                  type: "time",
                  format: "%Y-%m-%d",
                  precision: "day",
                }}
                xFormat="time:%b %d"
                yScale={{
                  type: "linear",
                  stacked: true,
                  min: "auto",
                  max: "auto",
                }}
                yFormat={(value) =>
                  value.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                }
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  renderTick: (tick) => (
                    <g transform={`translate(${tick.x},${tick.y - 2})`}>
                      <text className="anchor-start text-[10px] font-base opacity-60 leading-none">
                        {tick.value.toLocaleString("en-US", {
                          month: "short",
                          year: "2-digit",
                        })}
                      </text>
                    </g>
                  ),
                  tickValues: "every month",
                  tickSize: 0,
                  tickPadding: 0,
                }}
                axisLeft={{
                  tickSize: 0,
                  tickPadding: -40,
                  renderTick: (tick) => (
                    <g transform={`translate(${tick.x},${tick.y - 2})`}>
                      <text className="anchor-start text-[10px] font-base opacity-60 leading-none">
                        {tick.value.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        })}
                      </text>
                    </g>
                  ),
                  format: (value) =>
                    value.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    }),
                }}
                colors={theme.palette.primary.main}
                curve="catmullRom"
                enableArea
                areaBaselineValue={lowestPortfolioValue}
                enablePoints={false}
                useMesh
                legends={[]}
              />
            </div>
          </CardContent>
        </Card>
        {/* <Paper className='bg-white h-64 w-1/3 p-6' variant="outlined">
          <Box className='flex flex-col justify-center'>
            <Typography className='leading-none font-bold text-center text-lg tracking-tight'>Live Symphonies</Typography>
          </Box>
        </Paper> */}
      </Box>
    </Box>
  );
};

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
});
