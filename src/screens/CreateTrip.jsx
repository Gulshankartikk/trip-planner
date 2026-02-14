import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { MapPin, Calendar, DollarSign, Users, Sparkles, ChevronLeft } from 'lucide-react';

const CreateTrip = () => {
    const { navigate, setTripData } = useNavigation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        destination: '',
        budget: 'Medium',
        style: 'Solo'
    });

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
        else {
            setTripData(prev => ({ ...prev, ...formData }));
            navigate(SCREENS.AI_PLANNER);
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
        else navigate(SCREENS.DASHBOARD);
    };

    const steps = [
        { title: 'Where to?', icon: MapPin, field: 'destination', placeholder: 'Enter city or country' },
        { title: 'Budget', icon: DollarSign, field: 'budget', options: ['Economy', 'Medium', 'Luxury'] },
        { title: 'Style', icon: Users, field: 'style', options: ['Solo', 'Family', 'Couple', 'Adventure'] },
        { title: 'Ready?', icon: Sparkles, summary: true }
    ];

    const currentStepData = steps[step - 1];

    return (
        <div style={{ padding: '24px', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                <button onClick={handleBack} style={{ border: 'none', background: 'var(--bg-secondary)', width: '40px', height: '40px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <ChevronLeft size={24} />
                </button>
                <div style={{ flex: 1 }}>
                    <div style={{ height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', width: '100%' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / 4) * 100}%` }}
                            style={{ height: '100%', background: 'var(--accent-primary)', borderRadius: '2px' }}
                        />
                    </div>
                </div>
            </header>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    style={{ flex: 1 }}
                >
                    <div style={{ marginBottom: '32px' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-teal))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            boxShadow: '0 8px 16px rgba(0,122,255,0.2)'
                        }}>
                            <currentStepData.icon size={28} color="white" />
                        </div>
                        <h2 style={{ fontSize: '28px', fontWeight: '800' }}>{currentStepData.title}</h2>
                    </div>

                    {currentStepData.field === 'destination' && (
                        <input
                            type="text"
                            autoFocus
                            placeholder={currentStepData.placeholder}
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '20px',
                                fontSize: '18px',
                                borderRadius: '16px',
                                border: '1px solid var(--card-border)',
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                boxShadow: 'var(--shadow-sm)'
                            }}
                        />
                    )}

                    {currentStepData.options && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {currentStepData.options.map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => setFormData({ ...formData, [currentStepData.field]: opt })}
                                    style={{
                                        padding: '24px 16px',
                                        borderRadius: '16px',
                                        border: formData[currentStepData.field] === opt ? '2px solid var(--accent-primary)' : '1px solid var(--card-border)',
                                        background: formData[currentStepData.field] === opt ? 'rgba(0,122,255,0.05)' : 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}

                    {currentStepData.summary && (
                        <Card style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Destination</span>
                                    <span style={{ fontWeight: '700' }}>{formData.destination || 'Not set'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Budget</span>
                                    <span style={{ fontWeight: '700' }}>{formData.budget}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Style</span>
                                    <span style={{ fontWeight: '700' }}>{formData.style}</span>
                                </div>
                            </div>
                        </Card>
                    )}
                </motion.div>
            </AnimatePresence>

            <div style={{ marginTop: '40px' }}>
                <Button
                    style={{ width: '100%', padding: '18px', fontSize: '18px' }}
                    disabled={step === 1 && !formData.destination}
                    onClick={handleNext}
                >
                    {step === 4 ? 'Generate Itinerary' : 'Continue'}
                </Button>
            </div>
        </div>
    );
};

export default CreateTrip;
