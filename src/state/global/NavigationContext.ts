/// We're setting up the global Location Context here
import { makeVar, useReactiveVar } from '@apollo/client';

export type NavigationItem = {
  label: string;
  icon: JSX.Element;
  to: string;

  // href is used for external links
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

  ]
});
// Aliasing the navigation context for clarity when reading vs writing
export const setNavigationContext = navigationContext;

// QoL hook to read the navigation context
// Assumes the type of the provided var (NavigationContext | undefined)
export const useNavigationContext = () => useReactiveVar(navigationContext);