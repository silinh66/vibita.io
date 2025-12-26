import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Package, MessageCircle } from 'lucide-react';

import imgPaypal from '../assets/app_paypal_sync.png';
import imgWarehouse from '../assets/app_warehouse_sync.png';
import imgWhatsapp from '../assets/app_whatsapp_marketing.png';

const FeatureCard = ({ title, desc, bg, icon: Icon, image, accentColor, featuresList }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
                background: bg,
                borderRadius: '32px',
                padding: '0',
                marginBottom: '4rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr',
                gap: '2rem',
                minHeight: '500px'
            }}>
                {/* Content */}
                <div style={{
                    padding: '4rem 2rem 4rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'var(--feature-text)'
                }}>
                    <div style={{
                        background: accentColor,
                        width: 'fit-content',
                        padding: '12px',
                        borderRadius: '16px',
                        marginBottom: '1.5rem',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <Icon size={28} color="#fff" />
                    </div>

                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em'
                    }}>
                        {title}
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.8,
                        lineHeight: 1.6,
                        marginBottom: '2rem'
                    }}>
                        {desc}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {featuresList.map((f, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', fontWeight: 500 }}>
                                <div style={{ width: '6px', height: '6px', background: accentColor, borderRadius: '50%' }}></div>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Area */}
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3rem',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)'
                }}>
                    <motion.img
                        src={image}
                        alt={title}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '400px',
                            objectFit: 'contain',
                            borderRadius: '16px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                            transform: 'perspective(1000px) rotateY(-5deg)'
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Features = () => {
    const apps = [
        {
            title: "Vibita Paypal Tracking Sync",
            desc: "Automatically sync orders and tracking information to PayPal to release funds faster and reduce disputes. Build trust with payment processors effortlessly.",
            bg: "var(--feature-bg-blue)",
            icon: RefreshCw,
            image: imgPaypal,
            accentColor: "#3b82f6",
            featuresList: [
                "Real-time Tracking Sync to PayPal & Stripe",
                "Reduce Rolling Reserves & Holds",
                "Automated Dispute Resolution Evidence",
                "Support for 1000+ Couriers"
            ]
        },
        {
            title: "Vibita Warehouse Sync",
            desc: "The ultimate solution for multi-store inventory management. Keep your stock levels accurate across all your locations and prevent overselling.",
            bg: "var(--feature-bg-yellow)",
            icon: Package,
            image: imgWarehouse,
            accentColor: "#f59e0b",
            featuresList: [
                "Multi-Location Inventory Sync",
                "Low Stock Alerts & Notifications",
                "Automated Stock Level Adjustments",
                "Transfer Inventory Between Stores"
            ]
        },
        {
            title: "Vibita Whatsapp Chat & Marketing",
            desc: "An all-in-one retention tool. Chat with customers directly via WhatsApp and convert abandoned carts with automated marketing campaigns.",
            bg: "var(--feature-bg-pink)",
            icon: MessageCircle,
            image: imgWhatsapp,
            accentColor: "#ec4899", // Using pink/green mix
            featuresList: [
                "Abandoned Cart Recovery Messages",
                "Direct Customer Support Chat",
                "Automated Order Updates via WhatsApp",
                "Targeted Marketing Broadcasts"
            ]
        }
    ];

    return (
        <section style={{
            padding: '8rem 0',
            background: '#fff',
            color: '#000',
            borderTopLeftRadius: '60px',
            borderTopRightRadius: '60px',
            marginTop: '-60px',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 600, maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
                        One platform, three powerful solutions.
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                        Everything you need to optimize operations, secure payments, and retain customers.
                    </p>
                </div>

                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem'
                }}>
                    {apps.map((app, i) => (
                        <FeatureCard key={i} {...app} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
