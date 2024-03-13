import { makeVar, useReactiveVar } from '@apollo/client';
import { GQLGetPortfolioHistoryByAccountIdQuery } from '../../graphql/get-portfolio-history-by-account-id.g';
import { GQLGetPortfolioOverviewByAccountIdQuery } from '../../graphql/get-portfolio-overview-by-account-id.g';

export type DashboardContext = {
  portfolioOverviews?: GQLGetPortfolioOverviewByAccountIdQuery[];
  portfolioHistories?: GQLGetPortfolioHistoryByAccountIdQuery[];
}

// Mutable variable to store the dashboard context
// We really would only use the aliased version of this
// in our components since we have the useDashboardContext wrapper
// hook, but I'm exporting both anyways
export const dashboardContext = makeVar<DashboardContext>({});
// Aliasing the dashboard context for clarity when reading vs writing
export const setDashboardContext = dashboardContext;

// QoL hook to read the dashboard context
// Assumes the type of the provided var (DashboardContext | undefined)
export const useDashboardContext = () => useReactiveVar(dashboardContext);