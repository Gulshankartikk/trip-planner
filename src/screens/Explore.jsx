import React from 'react';
import Card from '../components/ui/Card';
import { Search, MapPin } from 'lucide-react';

const Explore = () => {
    const destinations = [
        { title: 'Nainital', country: 'India', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80' },
        { title: 'Rishikesh', country: 'India', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80' },
        { title: 'Santorini', country: 'Greece', image: 'https://images.opencv.org/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
        { title: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
        { title: 'Reykjavik', country: 'Iceland', image: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&w=400&q=80' },
        { title: 'Amalfi Coast', country: 'Italy', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80' }
    ];

    return (
        <div style={{ padding: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px' }}>Explore</h1>

            <div className="glass" style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderRadius: '16px', marginBottom: '24px', gap: '12px' }}>
                <Search size={20} color="var(--text-secondary)" />
                <input placeholder="Discover new places..." style={{ border: 'none', background: 'transparent', flex: 1, fontSize: '16px', outline: 'none', color: 'var(--text-primary)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {destinations.map((dest, index) => (
                    <Card key={index} delay={index * 0.1} style={{ overflow: 'hidden' }}>
                        <div style={{ height: '120px', width: '100%' }}>
                            <img src={dest.image} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '12px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '700' }}>{dest.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.6, fontSize: '12px', marginTop: '2px' }}>
                                <MapPin size={12} />
                                <span>{dest.country}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Explore;
