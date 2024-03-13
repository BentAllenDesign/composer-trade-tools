/// We're setting up the global Location Context here
import { makeVar, useReactiveVar } from '@apollo/client';
import { DashboardCustomizeOutlined, ExploreOutlined, NewspaperOutlined, RequestQuoteOutlined, SupportAgentOutlined, TrendingUp } from '@mui/icons-material';

export type NavigationItemType = 'FEATURE' | 'RESOURCE';
export type NavigationItem = {
  label: string;
  active: boolean;
  icon: JSX.Element;
  type: NavigationItemType;
  
  // to is used for internal links, mostly used for feature types
  to?: string;
  // href is used for external links, mostly used for resource types
  href?: string;
};

export type NavigationContext = {
  items: NavigationItem[];
};

// Mutable variable to store the navigation context
// We really would only use the aliased version of this
// in our components since we have the useAppContext wrapper
// hook, but I'm exporting both anyways
export const navigationContext = makeVar<NavigationContext>({
  items: [
    {
      label: 'Dashboard',
      active: true,
      icon: <DashboardCustomizeOutlined className='text-xl md:text-2xl' />,
      to: '/dashboard',
      type: 'FEATURE'
    },
    {
      label: 'Backtest',
      active: false,
      icon: <TrendingUp className='text-xl md:text-2xl' />,
      to: '/backtest',
      type: 'FEATURE'
    },
    {
      label: 'Discovery',
      active: false,
      icon: <ExploreOutlined className='text-xl md:text-2xl' />,
      to: '/settings',
      type: 'FEATURE'
    },
    {
      label: 'Documents',
      active: false,
      icon: <RequestQuoteOutlined className='text-xl md:text-2xl' />,
      to: '/documents',
      type: 'FEATURE'
    },
    {
      label: 'Newsletter',
      active: false,
      icon: <NewspaperOutlined className='text-xl md:text-2xl' />,
      href: '/settings',
      type:  'RESOURCE'
    },
    {
      label: 'Help Center',
      active: false,
      icon: <SupportAgentOutlined className='text-xl md:text-2xl' />,
      href: '/settings',
      type: 'RESOURCE'
    }
  ]
});
// Aliasing the navigation context for clarity when reading vs writing
export const setNavigationContext = navigationContext;

// QoL hook to read the navigation context
// Assumes the type of the provided var (NavigationContext | undefined)
export const useNavigationContext = () => useReactiveVar(navigationContext);