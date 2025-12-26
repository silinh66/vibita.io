import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: '#fff',
            color: '#000',
            padding: '4rem 0',
            borderTop: '1px solid #eee'
        }}>
            <div className="container">
                <div className="flex-between" style={{ marginBottom: '4rem', alignItems: 'flex-start' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>vibita.</h3>
                        <p style={{ maxWidth: '300px', color: '#666', lineHeight: 1.6 }}>
                            Empowering brands to build lasting relationships with their customers through superior post-purchase experiences.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem' }}>
                        {['Product', 'Company', 'Resources'].map(col => (
                            <div key={col}>
                                <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>{col}</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {['Features', 'Pricing', 'Integrations', 'Enterprise'].map(item => (
                                        <li key={item}>
                                            <a href="#" style={{ color: '#666' }}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#666',
                    fontSize: '0.9rem'
                }}>
                    <div>© 2025 Vibita Inc. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Twitter size={20} />
                        <Instagram size={20} />
                        <Linkedin size={20} />
                        <Facebook size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
