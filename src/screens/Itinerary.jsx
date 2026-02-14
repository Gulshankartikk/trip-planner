import React from 'react';
import Card from '../components/ui/Card';

const Itinerary = () => {
    return (
        <div style={{ padding: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px' }}>My Trips</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Card style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontWeight: '700' }}>Paris Getaway</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Sep 12 - Sep 18 • 2 Adults</p>
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Upcoming</div>
                    </div>
                </Card>
                <Card style={{ padding: '16px', opacity: 0.6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontWeight: '700' }}>London Explorer</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Jun 05 - Jun 10 • Solo</p>
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Past</div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Itinerary;
