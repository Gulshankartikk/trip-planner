import React from 'react';
export const MapExplorer = () => (
    <div style={{ padding: '24px', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass" style={{ padding: '40px', borderRadius: '24px', textAlign: 'center' }}>
            <h2 style={{ fontWeight: '800' }}>Interactive Map</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Coming soon in v2.0</p>
        </div>
    </div>
);

export const Profile = () => (
    <div style={{ padding: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px' }}>Profile</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '40px', overflow: 'hidden', border: '3px solid var(--accent-primary)' }}>
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>John Doe</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Explorer Gold Member</p>
            </div>
        </div>
        <div className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--card-border)', paddingBottom: '12px' }}>
                <span>Settings</span>
                <span style={{ color: 'var(--accent-primary)' }}>Edit</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--card-border)', paddingBottom: '12px' }}>
                <span>Privacy</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ff3b30' }}>
                <span>Logout</span>
            </div>
        </div>
    </div>
);
