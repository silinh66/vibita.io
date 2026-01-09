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
            <div className="container">
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
                                overflow: 'visible', // Changed from hidden to visible
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
                                    right: '-10px', // Adjusted from -20px
                                    background: 'rgba(59,130,246,0.9)',
                                    padding: '0.8rem 1rem', // Adjusted padding
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    zIndex: 10 // Ensure it's on top
                                }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div style={{ background: '#fff', padding: '6px', borderRadius: '50%' }}><Zap size={18} color="#3b82f6" fill="#3b82f6" /></div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Sync Speed</div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Real-time</div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '15%',
                                    left: '-10px', // Adjusted from -20px
                                    background: 'rgba(34,197,94,0.9)',
                                    padding: '0.8rem 1rem', // Adjusted padding
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    zIndex: 10
                                }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div style={{ background: '#fff', padding: '6px', borderRadius: '50%' }}><Activity size={18} color="#22c55e" /></div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Conversion</div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>+35% Boost</div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
