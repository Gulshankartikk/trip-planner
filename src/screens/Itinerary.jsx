import React from 'react';
import Card from '../components/ui/Card';
import { useNavigation } from '../context/NavigationState';
import { Calendar, MapPin } from 'lucide-react';

const Itinerary = () => {
    const { trips } = useNavigation();

    return (
        <div style={{ padding: '24px', paddingBottom: '100px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px' }}>My Trips</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {trips.length > 0 ? (
                    trips.map((trip) => (
                        <Card key={trip.id} style={{ padding: '20px', display: 'flex', gap: '16px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                <img src={trip.image} alt={trip.destination} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 style={{ fontWeight: '700', fontSize: '18px' }}>{trip.destination}</h3>
                                    <div style={{
                                        background: trip.status === 'Past' ? 'var(--bg-secondary)' : 'rgba(0,122,255,0.1)',
                                        color: trip.status === 'Past' ? 'var(--text-secondary)' : 'var(--accent-primary)',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        fontWeight: '700'
                                    }}>
                                        {trip.status}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', opacity: 0.7, fontSize: '13px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Calendar size={14} />
                                        <span>{trip.date}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <MapPin size={14} />
                                        <span>{trip.style}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', padding: '40px 0', opacity: 0.5 }}>
                        <p>No trips planned yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Itinerary;
