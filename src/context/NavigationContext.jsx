import React, { useState } from 'react';
import { NavigationContext, SCREENS } from './NavigationState';

export function NavigationProvider({ children }) {
    const [currentScreen, setCurrentScreen] = useState(SCREENS.SPLASH);
    const [trips, setTrips] = useState([
        {
            id: 1,
            destination: 'Paris, France',
            date: 'Sep 12 - Sep 18',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80',
            style: 'Couple',
            budget: 'Luxury',
            status: 'Upcoming'
        },
        {
            id: 2,
            destination: 'Tokyo, Japan',
            date: 'Oct 05 - Oct 15',
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
            style: 'Solo',
            budget: 'Medium',
            status: 'Upcoming'
        }
    ]);
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

    const saveTrip = (newTrip) => {
        setTrips(prev => [
            {
                ...newTrip,
                id: Date.now(),
                status: 'Upcoming',
                date: 'Next Month' // Placeholder for date logic
            },
            ...prev
        ]);
    };

    return (
        <NavigationContext.Provider value={{ currentScreen, navigate, tripData, setTripData, trips, saveTrip }}>
            {children}
        </NavigationContext.Provider>
    );
}
