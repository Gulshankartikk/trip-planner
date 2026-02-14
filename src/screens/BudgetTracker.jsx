import React from 'react';
import Card from '../components/ui/Card';
import { DollarSign, PieChart, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const BudgetTracker = () => {
    return (
        <div style={{ padding: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px' }}>Budget</h1>

            <Card style={{ padding: '24px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'white', marginBottom: '24px' }}>
                <span style={{ opacity: 0.8, fontSize: '14px' }}>Total Spent</span>
                <h2 style={{ fontSize: '36px', fontWeight: '800', margin: '8px 0' }}>$1,240.50</h2>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '12px' }}>
                        <ArrowUpRight size={14} /> 12% vs last trip
                    </div>
                </div>
            </Card>

            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Breakdown</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                    { category: 'Flights', amount: '$600', color: '#007aff' },
                    { category: 'Accommodation', amount: '$450', color: '#5856d6' },
                    { category: 'Dining', amount: '$120', color: '#ff9500' },
                    { category: 'Activities', amount: '$70', color: '#30b0c7' }
                ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '6px', background: item.color }} />
                        <span style={{ flex: 1, fontWeight: '500' }}>{item.category}</span>
                        <span style={{ fontWeight: '700' }}>{item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BudgetTracker;
