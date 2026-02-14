import { createContext, useContext } from 'react';

export const SCREENS = {
    SPLASH: 'SPLASH',
    AUTH: 'AUTH',
    DASHBOARD: 'DASHBOARD',
    CREATE_TRIP: 'CREATE_TRIP',
    EXPLORE: 'EXPLORE',
    AI_PLANNER: 'AI_PLANNER',
    ITINERARY: 'ITINERARY',
    BUDGET: 'BUDGET',
    MAP: 'MAP',
    PROFILE: 'PROFILE'
};

export const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);
