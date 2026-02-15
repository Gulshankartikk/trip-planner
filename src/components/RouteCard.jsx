import React from 'react';
import Card from './ui/Card';
import { Map, Clock, Zap } from 'lucide-react';

const RouteCard = ({ route, delay = 0 }) => {
    return (
        <Card delay={delay} style={{ padding: '20px', marginBottom: '16px', background: 'rgba(255, 255, 255, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--accent-primary)' }}>{route.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>
                        <Zap size={12} />
                        <span>{route.type}</span>
                    </div>
                </div>
                <div className="glass" style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} />
                    {route.duration}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0' }}>
                <div style={{ padding: '8px', borderRadius: '12px', background: 'var(--accent-primary)', color: 'white' }}>
                    <Map size={20} />
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.5', fontWeight: '500' }}>
                    {route.path}
                </p>
            </div>

            <div style={{ textAlign: 'right' }}>
                <button className="glass" style={{ border: 'none', padding: '8px 16px', borderRadius: '12px', color: 'var(--accent-primary)', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                    View Details
                </button>
            </div>
        </Card>
    );
};

export default RouteCard;
