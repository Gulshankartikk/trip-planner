import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useNavigation, SCREENS } from '../context/NavigationState';
import { Mail, Github, Chrome } from 'lucide-react';

const AuthScreen = () => {
    const { navigate } = useNavigation();
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={{
            minHeight: '100vh',
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'var(--bg-secondary)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '40px' }}
            >
                <h2 style={{ fontSize: '32px', fontWeight: '800' }}>
                    {isLogin ? 'Welcome Back' : 'Get Started'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    {isLogin ? 'Sign in to continue planning' : 'Create an account to start your journey'}
                </p>
            </motion.div>

            <Card style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                    <Button
                        style={{ flex: 1, background: isLogin ? 'var(--accent-primary)' : 'transparent', color: isLogin ? 'white' : 'var(--text-primary)', border: isLogin ? 'none' : '1px solid var(--card-border)' }}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </Button>
                    <Button
                        style={{ flex: 1, background: !isLogin ? 'var(--accent-primary)' : 'transparent', color: !isLogin ? 'white' : 'var(--text-primary)', border: !isLogin ? 'none' : '1px solid var(--card-border)' }}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', marginLeft: '4px' }}>Email</label>
                        <input
                            type="email"
                            placeholder="hello@example.com"
                            style={{
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: '1px solid var(--card-border)',
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', marginLeft: '4px' }}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={{
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: '1px solid var(--card-border)',
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)'
                            }}
                        />
                    </div>
                    <Button onClick={() => navigate(SCREENS.DASHBOARD)}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </Button>
                </div>

                <div style={{ margin: '24px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flex: 1, height: '1px', background: 'var(--card-border)' }} />
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>or continue with</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--card-border)' }} />
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <button className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', background: 'var(--bg-primary)' }}>
                        <Chrome size={20} />
                    </button>
                    <button className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', background: 'var(--bg-primary)' }}>
                        <Github size={20} />
                    </button>
                </div>
            </Card>

            <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                By continuing, you agree to our Terms of Service.
            </p>
        </div >
    );
};

export default AuthScreen;
