/// We're setting up the global User Context here
import { makeVar, useReactiveVar } from '@apollo/client';

export type BackgroundQueryRefContext = any;

// Mutable variable to store the background query ref context
// We really would only use the aliased version of this
// in our components since we have the useBackgroundQueryRefContext wrapper
// hook, but I'm exporting both anyways
export const backgroundQueryRefContext = makeVar<BackgroundQueryRefContext>({});
// Aliasing the background query ref context for clarity when reading vs writing
export const setBackgroundQueryRefContext = backgroundQueryRefContext;

// QoL hook to read the background query ref context
// Assumes the type of the provided var (BackgroundQueryRefContext | undefined)
export const useBackgroundQueryRefContext = () => useReactiveVar(backgroundQueryRefContext);
