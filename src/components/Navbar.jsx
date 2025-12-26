import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, RefreshCw, Package, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [hoveredProduct, setHoveredProduct] = useState(false);

  const products = [
    {
      name: 'Vibita Paypal Tracking Sync',
      desc: 'Sync tracking numbers to PayPal & Stripe automatically.',
      icon: RefreshCw,
      color: '#3b82f6'
    },
    {
      name: 'Vibita Warehouse Sync',
      desc: 'Multi-location inventory management & stock alerts.',
      icon: Package,
      color: '#f59e0b'
    },
    {
      name: 'Vibita Whatsapp Marketing',
      desc: 'Chat & Marketing automation for recovery & loyalty.',
      icon: MessageCircle,
      color: '#22c55e'
    }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.5rem 0',
      background: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(12px)'
    }}>
      <div className="container flex-between" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <img src={logo} alt="vibita." style={{ height: '32px' }} />
        </motion.div>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', color: 'var(--text-dim)' }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setHoveredProduct(true)}
            onMouseLeave={() => setHoveredProduct(false)}
          >
            <motion.a
              href="#"
              style={{ fontSize: '0.95rem', color: hoveredProduct ? '#fff' : 'var(--text-dim)', padding: '1rem 0' }}
            >
              Products
            </motion.a>

            <AnimatePresence>
              {hoveredProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-50%',
                    transform: 'translateX(-50%)',
                    width: '320px',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '16px',
                    padding: '0.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    marginTop: '0.5rem'
                  }}
                >
                  {products.map((p, i) => (
                    <motion.a
                      key={p.name}
                      href="#"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '1rem',
                        padding: '1rem',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#fff',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{
                        background: selectedColorOps(p.color, 0.2),
                        padding: '8px',
                        borderRadius: '8px',
                        color: p.color
                      }}>
                        <p.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.2rem' }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#888', lineHeight: 1.4 }}>{p.desc}</div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {['Solutions', 'Resources', 'Pricing'].map((item, i) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              style={{ fontSize: '0.95rem', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = '#fff'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Search size={20} />
          <ShoppingBag size={20} />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Menu size={20} style={{ display: 'none' }} />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

// Helper for color opacity
const selectedColorOps = (hex, alpha) => {
  // Simple hex to rgba for demo, assuming consistent hex input or just manual mapping
  if (hex === '#3b82f6') return `rgba(59, 130, 246, ${alpha})`;
  if (hex === '#f59e0b') return `rgba(245, 158, 11, ${alpha})`;
  if (hex === '#22c55e') return `rgba(34, 197, 94, ${alpha})`;
  return `rgba(255,255,255,${alpha})`;
}

export default Navbar;
