import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: '#fff',
            color: '#000',
            padding: '4rem 0 2rem',
            borderTop: '1px solid #eee'
        }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>vibita.</h2>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            Empowering brands to build lasting relationships with their customers through superior post-purchase experiences.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Product</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#666' }}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Integrations</li>
                            <li>Enterprise</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#666' }}>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li><a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#666' }}>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexWrap: 'wrap', // Allow wrapping on small screens
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem' // Add gap for wrapped content
                }}>
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>&copy; 2025 Vibita Inc. All rights reserved.</p>
                    <div className="footer-social" style={{ display: 'flex', gap: '1.5rem' }}>
                        <Twitter size={20} color="#666" />
                        <Instagram size={20} color="#666" />
                        <Linkedin size={20} color="#666" />
                        <Facebook size={20} color="#666" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
