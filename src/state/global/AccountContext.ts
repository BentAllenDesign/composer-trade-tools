/// We're setting up the global User Context here
import { makeVar, useReactiveVar } from '@apollo/client';
import { GQLAccount } from '../../graphql/types';


export type AccountContext = {
  accounts?: GQLAccount[];
  activeAccountId?: string;
}

// Mutable variable to store the account context
// We really would only use the aliased version of this
// in our components since we have the useAccountContext wrapper
// hook, but I'm exporting both anyways
export const accountContext = makeVar<AccountContext>({});
// Aliasing the account context for clarity when reading vs writing
export const setAccountContext = accountContext;

// QoL hook to read the account context
// Assumes the type of the provided var (AccountContext | undefined)
export const useAccountContext = () => useReactiveVar(accountContext);
