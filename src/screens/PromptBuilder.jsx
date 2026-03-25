import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { ChevronLeft, Copy, CheckCircle2, Wand2 } from 'lucide-react';

const ToggleRow = ({ label, description, checked, onChange }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--card-border)' }}>
        <div style={{ flex: 1, paddingRight: '16px' }}>
            <div style={{ fontWeight: '600', fontSize: '15px' }}>{label}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>{description}</div>
        </div>
        <div 
            onClick={() => onChange(!checked)}
            style={{
                width: '44px',
                height: '24px',
                background: checked ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                borderRadius: '12px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
            }}
        >
            <motion.div
                animate={{ x: checked ? 22 : 2 }}
                style={{
                    width: '20px',
                    height: '20px',
                    background: 'white',
                    borderRadius: '10px',
                    position: 'absolute',
                    top: '2px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
            />
        </div>
    </div>
);

const PromptBuilder = () => {
    const { navigate } = useNavigation();
    const [formData, setFormData] = useState({
        destination: 'Paris, France',
        duration: '5-day',
        dates: 'June 1-5, 2026',
        group: '2 adults',
        budget: '$1500 total excluding flights',
        interests: 'art, cuisine, walking tours',
        style: 'mid-range',
        constraints: 'vegetarian options, no early mornings',
    });

    const [enhancements, setEnhancements] = useState({
        budgetBreakdown: false,
        sustainability: false,
        alternatives: false,
    });

    const [copied, setCopied] = useState(false);

    let generatedPrompt = `"Act as an expert trip planner. Create a detailed ${formData.duration || '[duration]'} itinerary for ${formData.destination || '[destination]'} from ${formData.dates || '[dates]'} for ${formData.group || '[group size/type]'}. Budget: ${formData.budget || '[budget]'}. Interests: ${formData.interests || '[interests]'}. Travel style: ${formData.style || '[travel style]'}. Constraints: ${formData.constraints || '[constraints]'}. Include: day-by-day schedule with times, meals, transport options, estimated costs per activity, top 3 accommodation suggestions with links/prices, flight/hotel booking tips, weather considerations, and hidden gems. Format as a table with columns for Day, Morning, Afternoon, Evening, Costs, Notes."`;

    const extras = [];
    if (enhancements.budgetBreakdown) {
        extras.push("Break down costs by category (accommodation 40%, food 20%, activities 30%, transport 10%) and suggest free alternatives.");
    }
    if (enhancements.sustainability) {
        extras.push("Prioritize eco-friendly transport (walking, metro over taxis), local-owned spots, low-carbon activities.");
    }
    if (enhancements.alternatives) {
        extras.push("Provide 2 backup options per day for rain or fatigue, plus packing list and visa info.");
    }
    
    if (extras.length > 0) {
        generatedPrompt += '\n\nEnhancements:\n' + extras.join('\n');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '15px',
        borderRadius: '12px',
        border: '1px solid var(--card-border)',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        outline: 'none',
        marginBottom: '16px',
        transition: 'all 0.2s ease',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--text-secondary)',
        marginBottom: '6px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    return (
        <div style={{ padding: '24px', paddingBottom: '100px' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <button onClick={() => navigate(SCREENS.DASHBOARD)} style={{ border: 'none', background: 'var(--bg-secondary)', width: '40px', height: '40px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <ChevronLeft size={24} />
                </button>
                <div>
                    <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Prompt Builder</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Build expert AI planner prompts</p>
                </div>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Card style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <Wand2 size={20} color="var(--accent-teal)" />
                        <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Trip Details</h2>
                    </div>

                    <label style={labelStyle}>Destination</label>
                    <input style={inputStyle} value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})} placeholder="e.g., Paris, France" />

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>Duration</label>
                            <input style={inputStyle} value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} placeholder="e.g., 5-day" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>Dates</label>
                            <input style={inputStyle} value={formData.dates} onChange={e => setFormData({...formData, dates: e.target.value})} placeholder="e.g., June 1-5" />
                        </div>
                    </div>

                    <label style={labelStyle}>Group & Type</label>
                    <input style={inputStyle} value={formData.group} onChange={e => setFormData({...formData, group: e.target.value})} placeholder="e.g., 2 adults, family with kids" />

                    <label style={labelStyle}>Budget Range</label>
                    <input style={inputStyle} value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} placeholder="e.g., $2000 total excluding flights" />

                    <label style={labelStyle}>Interests</label>
                    <input style={inputStyle} value={formData.interests} onChange={e => setFormData({...formData, interests: e.target.value})} placeholder="e.g., history, food, outdoor activities" />

                    <label style={labelStyle}>Travel Style</label>
                    <input style={inputStyle} value={formData.style} onChange={e => setFormData({...formData, style: e.target.value})} placeholder="e.g., luxury, budget, mid-range" />

                    <label style={labelStyle}>Constraints</label>
                    <input style={{...inputStyle, marginBottom: 0}} value={formData.constraints} onChange={e => setFormData({...formData, constraints: e.target.value})} placeholder="e.g., vegetarian meals, avoid crowds" />
                </Card>

                <Card style={{ padding: '20px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Enhancements</h2>
                    <ToggleRow 
                        label="Budget Breakdown" 
                        description="Add category cost breakdown and free alternatives." 
                        checked={enhancements.budgetBreakdown} 
                        onChange={v => setEnhancements({...enhancements, budgetBreakdown: v})} 
                    />
                    <ToggleRow 
                        label="Sustainability" 
                        description="Prioritize eco-friendly transport and low-carbon activities." 
                        checked={enhancements.sustainability} 
                        onChange={v => setEnhancements({...enhancements, sustainability: v})} 
                    />
                    <ToggleRow 
                        label="Alternatives & Backup" 
                        description="Add backup options for rain, plus packing & visa info." 
                        checked={enhancements.alternatives} 
                        onChange={v => setEnhancements({...enhancements, alternatives: v})} 
                    />
                </Card>

                <Card style={{ padding: '20px', background: 'linear-gradient(to right bottom, var(--bg-secondary), var(--bg-primary))', border: '2px solid var(--accent-primary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--accent-primary)' }}>Generated Prompt</h2>
                        <button 
                            onClick={handleCopy}
                            style={{ 
                                display: 'flex', alignItems: 'center', gap: '6px', 
                                padding: '6px 12px', borderRadius: '8px', 
                                background: copied ? 'var(--accent-teal)' : 'var(--bg-primary)', 
                                color: copied ? 'white' : 'var(--text-primary)',
                                border: '1px solid var(--card-border)', cursor: 'pointer',
                                fontSize: '13px', fontWeight: '600', transition: 'all 0.2s'
                            }}
                        >
                            {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <div style={{ 
                        fontSize: '14px', lineHeight: '1.6', color: 'var(--text-primary)', 
                        background: 'var(--bg-primary)', padding: '16px', borderRadius: '12px',
                        border: '1px solid var(--card-border)', maxHeight: '200px', overflowY: 'auto',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {generatedPrompt}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PromptBuilder;
