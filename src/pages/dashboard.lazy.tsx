import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { ResponsiveLine, Serie } from '@nivo/line';
import { createLazyFileRoute } from '@tanstack/react-router';
import dayjs from 'dayjs';
import React from 'react';
import { useGetPortfolioOverviewByAccountIdQuery } from '../graphql/get-portfolio-overview-by-account-id.g';
import { useAccountContext } from '../state/global/AccountContext';

export const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = React.useState<[Date | null, Date | null]>([null, null]);
  const [portfolioChartData, setPortfolioChartData] = React.useState<Serie[]>([]);

  const { activeAccountId } = useAccountContext();

  const handleDateChange = React.useCallback((dates: [Date | null, Date | null]) => {
    setDateRange(dates);
    // Here you should query your database for the new data based on the selected dates.
    // Update your state with the new data.
  }, []);

  const { data } = useGetPortfolioOverviewByAccountIdQuery({
    skip: !activeAccountId,
    variables: { account_id: activeAccountId! },
    pollInterval: 1000,
    onCompleted: ({ portfolioHistory }) => {
      setPortfolioChartData([{
        id: 'portfolio',
        data: portfolioHistory!.series_unix_timestamps.map((timestamp, index) => ({
          x: dayjs(timestamp).format('YYYY-MM-DD'),
          y: portfolioHistory?.series_values[index],
        })),
      }]);
    },
  });
  
  return (
    <Box className='box-border m-6'>
      <Box className='flex gap-6'>
        <Card className="bg-white w-full" variant='outlined'>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <Typography variant="h5" component="h2" className="">
                  Portfolio Value
                </Typography>
                <Typography variant="h6" className="text-secondary-500">
                  
                </Typography>
                <Typography className="text-green-600 text-4xl font-medium">
                  {data?.portfolioOverview?.portfolio_value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || 0.00}
                </Typography>
              </div>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  views={['year', 'month']}
                  label="Start Date"
                  defaultValue={dayjs().subtract(2, 'month').toDate()}
                  value={dateRange[0]}
                  onChange={(date: Date | null) => handleDateChange([date, dateRange[1]])}
                  slotProps={{ textField: { size: 'small', className: 'w-36' } }}
                />
                <DatePicker
                  views={['year', 'month']}
                  label="End Date"
                  defaultValue={dayjs().toDate()}
                  value={dateRange[1]}
                  onChange={(date) => handleDateChange([dateRange[0], date])}
                  slotProps={{ textField: { size: 'small', className: 'w-36' } }}
                />
              </LocalizationProvider> */}
            </div>
            <div style={{ height: 400 }}>
              <ResponsiveLine
                data={portfolioChartData}
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
                xFormat="time:%Y-%m-%d"
                yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  format: '%b %d',
                  tickValues: 'every 1 month',
                }}
                colors={theme.palette.primary.main}
                enablePoints={false}
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

export const Route = createLazyFileRoute('/dashboard')({ component: Dashboard });
