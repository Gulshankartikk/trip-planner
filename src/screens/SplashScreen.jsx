import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { useNavigation, SCREENS } from '../context/NavigationState';

const SplashScreen = () => {
    const { navigate } = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(SCREENS.AUTH);
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
            overflow: 'hidden'
        }}>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    width: '120px',
                    height: '120px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0,122,255,0.3)',
                    marginBottom: '24px'
                }}
            >
                <Plane size={60} color="white" />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    letterSpacing: '-1px',
                    margin: 0
                }}
                className="text-gradient"
            >
                TravelMate
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}
            >
                Your AI Travel Companion
            </motion.p>

            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    width: '100px',
                    height: '4px',
                    background: 'var(--accent-primary)',
                    borderRadius: '2px',
                    opacity: 0.3
                }}
            />
        </div>
    );
};

export default SplashScreen;
