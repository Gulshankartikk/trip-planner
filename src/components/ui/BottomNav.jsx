import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Plus, Calendar, User } from 'lucide-react';
import { useNavigation, SCREENS } from '../../context/NavigationState';

const BottomNav = () => {
    const { currentScreen, navigate } = useNavigation();

    const navItems = [
        { id: SCREENS.DASHBOARD, icon: Home, label: 'Home' },
        { id: SCREENS.EXPLORE, icon: Compass, label: 'Explore' },
        { id: SCREENS.CREATE_TRIP, icon: Plus, label: 'Plan', isCenter: true },
        { id: SCREENS.ITINERARY, icon: Calendar, label: 'Trips' },
        { id: SCREENS.PROFILE, icon: User, label: 'Profile' }
    ];

    if (currentScreen === SCREENS.SPLASH || currentScreen === SCREENS.AUTH) return null;

    return (
        <div className="glass" style={{
            position: 'fixed',
            bottom: '10px',
            left: '10px',
            right: '10px',
            height: '64px',
            borderRadius: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '0 10px',
            zIndex: 1000,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
            {navItems.map((item) => (
                <motion.div
                    key={item.id}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(item.id)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '8px',
                        position: 'relative'
                    }}
                >
                    {item.isCenter ? (
                        <div style={{
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                            width: '48px',
                            height: '48px',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,122,255,0.4)',
                            marginTop: '-30px'
                        }}>
                            <item.icon size={24} color="white" />
                        </div>
                    ) : (
                        <>
                            <item.icon
                                size={22}
                                color={currentScreen === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)'}
                            />
                            {currentScreen === item.id && (
                                <motion.div
                                    layoutId="nav-pill"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        width: '4px',
                                        height: '4px',
                                        borderRadius: '2px',
                                        backgroundColor: 'var(--accent-primary)'
                                    }}
                                />
                            )}
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default BottomNav;
