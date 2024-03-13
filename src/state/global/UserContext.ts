/// We're setting up the global User Context here
import { makeVar, useReactiveVar } from '@apollo/client';
import { GQLAccountOwnerContact, Maybe } from '../../graphql/types';


export type UserContext = {
  firstName?: Maybe<string>;
  lastName?: Maybe<string>;
  phoneNumber?: Maybe<string>;
  contact?: GQLAccountOwnerContact;
}

// Mutable variable to store the user context
// We really would only use the aliased version of this
// in our components since we have the useUserContext wrapper
// hook, but I'm exporting both anyways
export const userContext = makeVar<UserContext>({});
// Aliasing the user context for clarity when reading vs writing
export const setUserContext = userContext;

// QoL hook to read the user context
// Assumes the type of the provided var (UserContext | undefined)
export const useUserContext = () => useReactiveVar(userContext);
