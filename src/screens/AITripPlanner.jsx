import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { Sparkles, CheckCircle2, Map, Calendar, Coffee, Utensils, Camera, Waves, Landmark, ShoppingBag, Mountain, Wind, Zap, Flame, Heart } from 'lucide-react';
import Button from '../components/ui/Button';

const AITripPlanner = () => {
    const { navigate, tripData, saveTrip } = useNavigation();
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

    const handleSaveTrip = () => {
        saveTrip({
            destination: tripData.destination,
            style: tripData.style,
            budget: tripData.budget,
            image: isNainital ? 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80' :
                (isRishikesh ? 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80' :
                    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80'),
            itinerary: currentItinerary
        });
        navigate(SCREENS.ITINERARY);
    };

    return (
        <div style={{ padding: '24px', paddingBottom: '100px' }}>
            {/* ... (existing header code) */}
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

            {/* ... (existing itinerary rendering code) ... */}

            <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                <Button style={{ flex: 1 }} onClick={handleSaveTrip}>Save Trip</Button>
                <button className="card" style={{ flex: 1, padding: '16px', background: 'transparent' }} onClick={() => navigate(SCREENS.ITINERARY)}>Full Details</button>
            </div>
        </div>
    );
};

export default AITripPlanner;
