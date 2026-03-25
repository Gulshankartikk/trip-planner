import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { Sparkles, CheckCircle2, Map, Calendar, Coffee, MapPin, Clock, DollarSign, AlertCircle, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { generateTripItinerary } from '../services/aiService';

const AITripPlanner = () => {
    const { navigate, tripData, saveTrip } = useNavigation();
    const [generating, setGenerating] = useState(true);
    const [progress, setProgress] = useState(0);
    const [tripResponse, setTripResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!tripData?.destination) {
            navigate(SCREENS.CREATE_TRIP);
            return;
        }

        const interval = setInterval(() => {
            setProgress(prev => Math.min(prev + 5, 90)); // Simulate progress until API responds
        }, 500);

        generateTripItinerary(tripData)
            .then(data => {
                setTripResponse(data);
                setProgress(100);
                setTimeout(() => setGenerating(false), 800);
            })
            .catch(err => {
                console.error("AI Generation Error:", err);
                setError("Failed to generate itinerary. Please ensure your API key is set in .env.local");
                setGenerating(false);
            })
            .finally(() => clearInterval(interval));

        return () => clearInterval(interval);
    }, [tripData, navigate]);

    if (generating) {
        return (
            <div style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '80px', height: '80px', borderRadius: '24px',
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: '32px', boxShadow: '0 0 40px rgba(0,122,255,0.4)'
                    }}
                >
                    <Sparkles size={40} color="white" />
                </motion.div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>Crafting your perfect trip to {tripData.destination}...</h2>
                <div style={{ width: '100%', maxWidth: '280px', height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
                    <motion.div style={{ height: '100%', background: 'var(--accent-primary)', borderRadius: '3px', width: `${progress}%`, transition: 'width 0.5s ease' }} />
                </div>
                <p style={{ marginTop: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>AI is analyzing top destinations and mapping your personalized route.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '24px', textAlign: 'center', paddingTop: '100px' }}>
                <AlertCircle size={48} color="var(--accent-danger)" style={{ margin: '0 auto', marginBottom: '16px' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Oops!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{error}</p>
                <Button onClick={() => navigate(SCREENS.CREATE_TRIP)}>Go Back</Button>
            </div>
        );
    }

    if (!tripResponse) return null;

    const handleSaveTrip = () => {
        saveTrip({
            destination: tripData.destination,
            style: tripData.style,
            budget: tripData.budget,
            date: new Date().toLocaleDateString(),
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80', // generic travel image
            itinerary: tripResponse
        });
        navigate(SCREENS.ITINERARY);
    };

    return (
        <div style={{ padding: '24px', paddingBottom: '100px' }}>
            <header style={{ marginBottom: '32px', position: 'relative' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: 'absolute', top: -10, right: 0 }}>
                    <CheckCircle2 color="var(--accent-teal)" size={32} />
                </motion.div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>AI Generated</span>
                <h1 style={{ fontSize: '32px', fontWeight: '800', marginTop: '4px' }}>{tripResponse.summary?.title || `${tripData.destination} Trip`}</h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.5' }}>{tripResponse.summary?.overview}</p>
            </header>

            <Card style={{ padding: '20px', marginBottom: '32px', borderLeft: '4px solid var(--accent-secondary)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="var(--accent-secondary)" /> Recommended Stay: {tripResponse.stay_recommendation?.area_name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{tripResponse.stay_recommendation?.why}</p>
            </Card>

            <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px' }}>Your Daily Itinerary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {tripResponse.itinerary?.map((day, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '20px', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px' }}>
                                {day.day}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{day.theme}</h3>
                                {day.notes && <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{day.notes}</p>}
                            </div>
                        </div>

                        <div style={{ paddingLeft: '20px', borderLeft: '2px dashed var(--card-border)', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {day.items?.map((item, itemIdx) => (
                                <Card key={itemIdx} style={{ padding: '16px', position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '-27px', top: '24px', width: '12px', height: '12px', borderRadius: '6px', background: 'var(--bg-primary)', border: '2px solid var(--accent-primary)' }} />
                                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                                                <Clock size={12} /> {item.time_block}
                                            </div>
                                            <h4 style={{ fontSize: '16px', fontWeight: '700' }}>{item.name}</h4>
                                        </div>
                                        <div style={{ padding: '4px 8px', borderRadius: '12px', background: 'var(--bg-secondary)', fontSize: '11px', fontWeight: '600', color: 'var(--text-secondary)' }}>
                                            {item.cost_level.toUpperCase()}
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '8px' }}>
                                        {item.description}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                                        <MapPin size={12} /> {item.area}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {tripResponse.logistics && (
                <div style={{ marginTop: '32px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Logistics & Tips</h2>
                    <Card style={{ padding: '20px', background: 'var(--bg-secondary)' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h4 style={{ fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}><Map size={16} /> Transport</h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{tripResponse.logistics?.local_transport?.summary}</p>
                        </div>
                        {tripResponse.tips?.safety?.length > 0 && (
                            <div>
                                <h4 style={{ fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}><Info size={16} /> Safety & Culture</h4>
                                <ul style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, paddingLeft: '20px' }}>
                                    {tripResponse.tips.safety.map((tip, i) => <li key={i}>{tip}</li>)}
                                </ul>
                            </div>
                        )}
                    </Card>
                </div>
            )}

            <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                <Button style={{ flex: 1 }} onClick={handleSaveTrip}>Save Trip to Itinerary</Button>
            </div>
        </div>
    );
};

export default AITripPlanner;
