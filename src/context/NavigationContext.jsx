import React, { useState } from 'react';
import { NavigationContext, SCREENS } from './NavigationState';

export function NavigationProvider({ children }) {
    const [currentScreen, setCurrentScreen] = useState(SCREENS.SPLASH);
    const [tripData, setTripData] = useState({
        destination: '',
        dates: null,
        budget: '',
        style: '',
        itinerary: null
    });

    const navigate = (screen) => {
        setCurrentScreen(screen);
        window.scrollTo(0, 0);
    };

    return (
        <NavigationContext.Provider value={{ currentScreen, navigate, tripData, setTripData }}>
            {children}
        </NavigationContext.Provider>
    );
}
