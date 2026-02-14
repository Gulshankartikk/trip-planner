import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { Sparkles, CheckCircle2, Map, Calendar, Coffee, Utensils, Camera, Waves, Landmark, ShoppingBag, Mountain, Wind, Zap, Flame, Heart } from 'lucide-react';
import Button from '../components/ui/Button';

const AITripPlanner = () => {
    const { navigate, tripData } = useNavigation();
    const [generating, setGenerating] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setGenerating(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const destination = tripData.destination.toLowerCase();
    const isNainital = destination.includes('nainital');
    const isRishikesh = destination.includes('rishikesh');

    const nainitalItinerary = [
        {
            day: 1,
            title: 'Explore Main Nainital (Relaxed Start)',
            activities: [
                { time: 'Morning', activity: 'Boating at Naini Lake', icon: Waves, detail: 'Start with boating (best in morning or sunset).' },
                { time: 'Late Morning', activity: 'Naina Devi Temple', icon: Landmark, detail: 'Famous temple near the lake. Quick visit + calm atmosphere.' },
                { time: 'Evening', activity: 'Mall Road', icon: ShoppingBag, detail: 'Shopping, cafés, local food. Try momos + bun tikki + hot chocolate.' }
            ],
            tip: 'Walk slowly and enjoy the vibe — no rush on Day 1.'
        },
        {
            day: 2,
            title: 'Viewpoints & Nature',
            activities: [
                { time: 'Morning', activity: 'Snow View Point', icon: Mountain, detail: 'Take ropeway for amazing Himalayan views. Best photos spot 📸' },
                { time: 'Afternoon', activity: 'Tiffin Top', icon: Map, detail: 'Short trek (or horse ride available). Great picnic point.' },
                { time: 'Evening', activity: 'Naina Peak', icon: Mountain, detail: 'Highest point in Nainital. Perfect for nature lovers & panoramic views.' }
            ],
            tip: 'Carry water + light jacket.'
        },
        {
            day: 3,
            title: 'Nearby Lakes Tour (Peaceful Day)',
            activities: [
                { time: 'Morning', activity: 'Bhimtal', icon: Waves, detail: 'Less crowded & scenic. Boating + island aquarium.' },
                { time: 'Afternoon', activity: 'Sattal', icon: Wind, detail: 'Seven connected lakes. Perfect for bird watching & calm nature.' },
                { time: 'Evening', activity: 'Naukuchiatal', icon: Map, detail: 'Adventure activities like paragliding. Relaxed atmosphere.' }
            ],
            tip: 'Hire local taxi for easy lake tour.'
        }
    ];

    const rishikeshItinerary = [
        {
            day: 1,
            title: 'Spiritual Vibes & Ganga Aarti',
            activities: [
                { time: 'Morning', activity: 'Laxman Jhula & Ram Jhula', icon: Landmark, detail: 'Walk across famous suspension bridges. Stop for photos and river views.' },
                { time: 'Afternoon', activity: 'Cafe Hopping', icon: Coffee, detail: 'Relax at Little Buddha Cafe or Freedom Cafe overlooking the Ganges.' },
                { time: 'Evening', activity: 'Ganga Aarti at Triveni Ghat', icon: Flame, detail: 'Witness the divine oil lamp ceremony at sunset. Truly mesmerizing ✨' }
            ],
            tip: 'Avoid wearing revealing clothes near temples/Aarti.'
        },
        {
            day: 2,
            title: 'Adventure & Waterfalls',
            activities: [
                { time: 'Morning', activity: 'River Rafting', icon: Waves, detail: 'Experience the thrill of rafting through Grade 1 & 2 rapids. (16km/24km)' },
                { time: 'Afternoon', activity: 'Neer Garh Waterfall', icon: Mountain, detail: 'Short trek to beautiful tiered waterfalls. Perfect for a quick dip.' },
                { time: 'Evening', activity: 'Local Market Exploration', icon: ShoppingBag, detail: 'Shop for spiritual items, crystals, and Himalayan herbs in Rishikesh town.' }
            ],
            tip: 'Pre-book rafting to avoid last minute price hikes.'
        },
        {
            day: 3,
            title: 'Ashrams & Inner Peace',
            activities: [
                { time: 'Morning', activity: 'Beatles Ashram', icon: Heart, detail: 'Explore the ruins of Chaurasi Kutia where the Beatles stayed in 1968.' },
                { time: 'Afternoon', activity: 'Yoga & Meditation', icon: Wind, detail: 'Join a drop-in yoga class at Parmarth Niketan or Sivananda Ashram.' },
                { time: 'Evening', activity: 'Parmarth Niketan Aarti', icon: Flame, detail: 'A more peaceful Aarti experience by the river bank.' }
            ],
            tip: 'Hire a scooter for flexible movement across town.'
        }
    ];

    const budgetData = isNainital ? {
        hotel: '₹1500–3000/day',
        food: '₹400–700/day',
        travel: '₹800–1500/day'
    } : {
        hotel: '₹1200–2500/day',
        food: '₹300–600/day',
        travel: '₹500–1000/day'
    };

    if (generating) {
        return (
            <div style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '32px',
                        boxShadow: '0 0 40px rgba(0,122,255,0.4)'
                    }}
                >
                    <Sparkles size={40} color="white" />
                </motion.div>

                <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>Crafting your perfect trip to {tripData.destination}...</h2>
                <div style={{ width: '100%', maxWidth: '280px', height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', position: 'relative' }}>
                    <motion.div
                        style={{ height: '100%', background: 'var(--accent-primary)', borderRadius: '3px', width: `${progress}%` }}
                    />
                </div>
                <p style={{ marginTop: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>AI is analyzing top destinations and your travel style.</p>
            </div>
        );
    }

    const currentItinerary = isRishikesh ? rishikeshItinerary : (isNainital ? nainitalItinerary : null);

    return (
        <div style={{ padding: '24px', paddingBottom: '100px' }}>
            <header style={{ marginBottom: '32px', position: 'relative' }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ position: 'absolute', top: -10, right: 0 }}
                >
                    <CheckCircle2 color="var(--accent-teal)" size={32} />
                </motion.div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>AI Generated</span>
                <h1 style={{ fontSize: '32px', fontWeight: '800', marginTop: '4px' }}>{tripData.destination} Duo</h1>
                <p style={{ color: 'var(--text-secondary)' }}>3 Days • {tripData.style} • {tripData.budget}</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {currentItinerary ? (
                    currentItinerary.map((dayPlan, dayIdx) => (
                        <div key={dayIdx}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ background: 'var(--accent-primary)', color: 'white', width: '24px', height: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>{dayPlan.day}</span>
                                {dayPlan.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {dayPlan.activities.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (dayIdx * 3 + index) * 0.1 }}
                                        className="glass"
                                        style={{ padding: '16px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                                    >
                                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <item.icon size={20} color="var(--accent-primary)" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{item.time}</span>
                                            </div>
                                            <p style={{ fontWeight: '700', fontSize: '15px', marginTop: '2px' }}>{item.activity}</p>
                                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>{item.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div style={{ marginTop: '12px', padding: '12px', borderRadius: '12px', background: 'rgba(255, 149, 0, 0.1)', border: '1px solid rgba(255, 149, 0, 0.2)', fontSize: '13px', color: 'var(--accent-orange)', fontWeight: '600' }}>
                                ⭐ Tip: {dayPlan.tip}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Day 1: Arrival & Exploration</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { time: '09:00 AM', activity: 'Breakfast at local cafe', icon: Coffee },
                                { time: '11:00 AM', activity: 'Visit the main city square', icon: Map },
                                { time: '01:30 PM', activity: 'Lunch at traditional restaurant', icon: Utensils },
                                { time: '04:00 PM', activity: 'Scenic viewpoint photography', icon: Camera },
                                { time: '07:30 PM', activity: 'Evening sunset cruise', icon: Calendar }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass"
                                    style={{ padding: '16px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}
                                >
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <item.icon size={20} color="var(--accent-primary)" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{item.time}</span>
                                        <p style={{ fontWeight: '600', fontSize: '15px' }}>{item.activity}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {(isNainital || isRishikesh) && (
                <Card style={{ marginTop: '32px', padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Estimated Budget (Per Person)</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>Hotel (mid-range)</span>
                            <span style={{ fontWeight: '600' }}>{budgetData.hotel}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>Food</span>
                            <span style={{ fontWeight: '600' }}>{budgetData.food}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>Local travel</span>
                            <span style={{ fontWeight: '600' }}>{budgetData.travel}</span>
                        </div>
                    </div>
                </Card>
            )}

            <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                <Button style={{ flex: 1 }} onClick={() => navigate(SCREENS.DASHBOARD)}>Save Trip</Button>
                <button className="card" style={{ flex: 1, padding: '16px', background: 'transparent' }} onClick={() => navigate(SCREENS.ITINERARY)}>Full Details</button>
            </div>
        </div>
    );
};

export default AITripPlanner;
