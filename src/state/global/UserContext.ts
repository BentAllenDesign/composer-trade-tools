/// We're setting up the global User Context here
import { makeVar, useReactiveVar } from '@apollo/client';
import { GQLAccount, GQLAccountOwner, GQLAccountOwnerContact, GQLAccountTrustedContact } from '../../graphql/types';

export type UserContext = {
  info: GQLAccountOwner;
  contact: GQLAccountOwnerContact;
  trustedContact?: GQLAccountTrustedContact;
  accounts: GQLAccount[];
};

// Mutable variable to store the user context
// We really would only use the aliased version of this
// in our components since we have the useUserContext wrapper
// hook, but I'm exporting both anyways
export const userContext = makeVar<UserContext | undefined>(undefined);
// Aliasing the user context for clarity when reading vs writing
export const setUserContext = userContext;

// QoL hook to read the user context
// Assumes the type of the provided var (UserContext | undefined)
export const useUserContext = () => useReactiveVar(userContext);
