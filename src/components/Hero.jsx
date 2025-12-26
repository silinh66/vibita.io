import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Activity, Zap } from 'lucide-react';
import heroImage from '../assets/app_paypal_sync.png';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            paddingTop: '120px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Main Grid */}
            <div className="hero-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '4rem',
                alignItems: 'center'
            }}>

                {/* Left Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        marginBottom: '2rem'
                    }}>
                        Trusted by 10,000+ Shopify Merchants
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Empower Your <br />
                        <span style={{ color: 'var(--text-dim)' }}>Shopify Store.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-dim)',
                        maxWidth: '550px',
                        marginBottom: '3rem',
                        lineHeight: 1.6,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Supercharge your business with our suite of apps. Sync tracking data, manage multi-store inventory, and automate WhatsApp marketing—all in one place.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <motion.button
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            Explore Apps <ArrowRight size={18} />
                        </motion.button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#fff" stroke="none" />)}
                            </div>
                            <span style={{ fontSize: '0.9rem' }}>5.0 star rating on App Store</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats" style={{
                        marginTop: '5rem',
                        display: 'flex',
                        gap: '4rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '2rem'
                    }}>
                        {[
                            { label: 'Orders Synced', value: '10M+' },
                            { label: 'Revenue Recovered', value: '$500M+' }
                        ].map(stat => (
                            <div key={stat.label}>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 600 }}>{stat.value}</h3>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    {/* Background elements */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle, rgba(165,180,252,0.2) 0%, rgba(0,0,0,0) 70%)',
                        zIndex: -1
                    }} />

                    <motion.div
                        className="glass-panel"
                        style={{
                            height: 'auto',
                            width: '100%',
                            overflow: 'hidden',
                            borderRadius: '24px',
                            padding: '1rem',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={heroImage}
                            alt="Vibita Ecosystem"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}
                        />

                        {/* Floating Badge 1 */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '10%',
                                right: '-20px',
                                background: 'rgba(59,130,246,0.9)',
                                padding: '1rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div style={{ background: '#fff', padding: '8px', borderRadius: '50%' }}><Zap size={20} color="#3b82f6" fill="#3b82f6" /></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Sync Speed</div>
                                <div style={{ fontWeight: 700 }}>Real-time</div>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2 */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                bottom: '15%',
                                left: '-20px',
                                background: 'rgba(34,197,94,0.9)',
                                padding: '1rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div style={{ background: '#fff', padding: '8px', borderRadius: '50%' }}><Activity size={20} color="#22c55e" /></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Conversion</div>
                                <div style={{ fontWeight: 700 }}>+35% Boost</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
