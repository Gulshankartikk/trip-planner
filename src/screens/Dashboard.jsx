import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { Search, MapPin, Calendar, Plus, ChevronRight, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    const { navigate, setTripData, tripData } = useNavigation();

    const upcomingTrips = [
        { id: 1, destination: 'Paris, France', date: 'Sep 12 - Sep 18', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
        { id: 2, destination: 'Tokyo, Japan', date: 'Oct 05 - Oct 15', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80' },
        { id: 3, destination: 'Nainital, India', date: 'Feb 16 - Feb 19', image: 'https://en.wikipedia.org/wiki/Nainital' }
    ];

    return (
        <div style={{ padding: '24px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Where next?</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Explore the world with AI</p>
                </div>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    border: '2px solid var(--accent-primary)',
                    cursor: 'pointer'
                }} onClick={() => navigate(SCREENS.PROFILE)}>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            <div className="glass" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '16px',
                marginBottom: '32px',
                gap: '12px'
            }}>
                <Search size={20} color="var(--text-secondary)" />
                <input
                    placeholder="Search destinations..."
                    style={{ border: 'none', background: 'transparent', flex: 1, fontSize: '16px', outline: 'none', color: 'var(--text-primary)' }}
                />
            </div>

            <section style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Upcoming Trips</h2>
                    <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '600' }}>See all</span>
                </div>

                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none' }}>
                    {upcomingTrips.map((trip, index) => (
                        <Card key={trip.id} delay={index * 0.1} style={{ minWidth: '280px', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ height: '160px', width: '100%' }}>
                                <img src={trip.image} alt={trip.destination} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '16px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '700' }}>{trip.destination}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', opacity: 0.7, fontSize: '13px' }}>
                                    <Calendar size={14} />
                                    <span>{trip.date}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(SCREENS.CREATE_TRIP)}
                        style={{
                            minWidth: '200px',
                            height: '240px',
                            borderRadius: 'var(--radius-md)',
                            border: '2px dashed var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ width: '40px', height: '40px', borderRadius: '20px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Plus size={20} color="var(--accent-primary)" />
                        </div>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>New Trip</span>
                    </motion.div>
                </div>
            </section>

            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '700' }}>AI Recommendations</h2>
                    <TrendingUp size={20} color="var(--accent-teal)" />
                </div>

                <Card style={{ padding: '16px', display: 'flex', gap: '16px' }} onClick={() => { setTripData({ ...tripData, destination: 'Nainital' }); navigate(SCREENS.AI_PLANNER); }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=200&q=80" alt="Nainital" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Explore Nainital</h3>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Peaceful lakes and Himalayan views await.</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px', color: 'var(--accent-primary)', fontSize: '13px', fontWeight: '600' }}>
                            <span>Plan now</span>
                            <ChevronRight size={14} />
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
};

export default Dashboard;
