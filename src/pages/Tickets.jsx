import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Ticket, Calendar, Clock, CreditCard, ShoppingCart, Trash2, Plus, Minus, Settings2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import './Tickets.css';

export default function Tickets() {
  const { t } = useLanguage();
  const { cart, addToCart, removeFromCart, clearCart, cartTotal, bookingDate, setBookingDate } = useCart();
  const [step, setStep] = useState(1);
  const location = useLocation();

  // Accordion state
  const [expandedId, setExpandedId] = useState(null);
  
  // Config state for the currently expanded ticket
  const [ticketCounts, setTicketCounts] = useState({});

  useEffect(() => {
    if (step === 2 && cart.length === 0) {
      setStep(1);
    }
  }, [cart, step]);

  useEffect(() => {
    if (location.state?.openCart && cart.length > 0) {
      setStep(2);
      window.history.replaceState({}, document.title);
    } else if (location.state?.resetCart) {
      setStep(1);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, cart.length]);

  const attractionsData = [
    {
      id: 1,
      title: t('attr_1_title'),
      desc: t('attr_1_desc'),
      tickets: [
        { id: 'wibit_15h', label: '1,5-Hour Ticket', price: 15.0 },
        { id: 'wibit_day', label: 'Day Pass', price: 26.0 },
        { id: 'wibit_group15h', label: 'Group Ticket (1,5h)', price: 13.0 },
        { id: 'wibit_groupday', label: 'Group Ticket (Day)', price: 23.0 }
      ]
    },
    {
      id: 2,
      title: t('attr_2_title'),
      desc: t('attr_2_desc'),
      tickets: [
        { id: 'jet_30m', label: 'Jet-Ski (30min)', price: 70.0 }
      ]
    },
    {
      id: 3,
      title: t('attr_3_title'),
      desc: t('attr_3_desc'),
      tickets: [
        { id: 'sup_1h', label: 'Stand-Up Paddle Board (1h)', price: 8.0 }
      ]
    },
    {
      id: 4,
      title: t('attr_4_title'),
      desc: t('attr_4_desc'),
      tickets: [
        { id: 'tret_1h', label: 'Paddle Boat (1h)', price: 12.0 }
      ]
    }
  ];

  const handleExpand = (attr) => {
    if (expandedId === attr.id) {
      setExpandedId(null);
    } else {
      setExpandedId(attr.id);
      setTicketCounts({});
    }
  };

  const updateTicketCount = (ticketId, delta) => {
    setTicketCounts(prev => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + delta)
    }));
  };

  const calculateCurrentPrice = (attr) => {
    let total = 0;
    attr.tickets.forEach(ticket => {
      const count = ticketCounts[ticket.id] || 0;
      total += count * ticket.price;
    });
    return total;
  };

  const handleAddToCart = (attr) => {
    const price = calculateCurrentPrice(attr);
    if (price === 0) return; // Must select at least one ticket
    
    attr.tickets.forEach(ticket => {
      const count = ticketCounts[ticket.id] || 0;
      if (count > 0) {
        const cartItem = {
          name: `${attr.title}`,
          price: count * ticket.price,
          desc: `${count}x ${ticket.label}`
        };
        addToCart(cartItem);
      }
    });

    setExpandedId(null);
  };

  return (
    <div className="tickets-page">
      <div className="tickets-header">
        <h1>{t('tickets_title')}</h1>
        <p>{t('tickets_sub')}</p>
        <div className="global-date-selector" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <Calendar size={20} color="var(--primary-blue)" />
          <span style={{ fontWeight: '600' }}>{t('step3').split('.')[1]}:</span>
          <input 
            type="date" 
            className="form-input" 
            style={{ width: 'auto', display: 'inline-block', padding: '8px 12px' }}
            value={bookingDate} 
            onChange={e => setBookingDate(e.target.value)} 
          />
        </div>
      </div>

      <div className="tickets-content">
        <div className="capacity-panel glass-panel">
          <h3><Clock size={20} /> {t('capacity_title')}</h3>
          <div className="capacity-graph">
            {[10, 11, 12, 13, 14, 15, 16, 17, 18].map(hour => {
              const height = hour === 14 ? 90 : hour === 15 ? 95 : hour === 16 ? 80 : hour === 12 ? 60 : 40;
              const isHigh = height > 80;
              return (
                <div key={hour} className="graph-bar-container">
                  <div 
                    className={`graph-bar ${isHigh ? 'high' : ''}`} 
                    style={{ height: `${height}%` }}
                    title={`${height}%`}
                  ></div>
                  <span>{hour}:00</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="booking-panel glass-panel">
          {step === 1 && (
            <div className="step-1 fade-in">
              <div className="step-header-with-cart">
                <h2><Ticket size={24} /> {t('step1')}</h2>
                {cart.length > 0 && (
                  <button className="btn-secondary btn-sm" onClick={() => setStep(2)}>
                    <ShoppingCart size={16} /> {t('btn_go_to_cart')} ({cart.length})
                  </button>
                )}
              </div>
              
              <div className="ticket-list-accordion">
                {attractionsData.map(attr => {
                  const isExpanded = expandedId === attr.id;
                  
                  return (
                    <div key={attr.id} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                      <div className="accordion-header" onClick={() => handleExpand(attr)}>
                        <div className="accordion-title-info">
                          <h4>{attr.title}</h4>
                          <p>{attr.desc}</p>
                        </div>
                        <button className="btn-outline-small">
                          {isExpanded ? t('close') : t('btn_configure')} <Settings2 size={16} style={{ marginLeft: 6 }}/>
                        </button>
                      </div>
                      
                      {isExpanded && (
                        <div className="accordion-body fade-in">
                          <div className="config-section" style={{ marginTop: '16px' }}>
                            <div className="persons-grid">
                              {attr.tickets.map(ticket => (
                                <div key={ticket.id} className="person-row" style={{ padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className="person-label" style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>{ticket.label}</span>
                                    <span style={{ fontSize: '0.9rem', color: '#666' }}>{ticket.price}€ pro Ticket</span>
                                  </div>
                                  <div className="counter-controls">
                                    <button onClick={() => updateTicketCount(ticket.id, -1)}><Minus size={14}/></button>
                                    <span className="counter-val">{ticketCounts[ticket.id] || 0}</span>
                                    <button onClick={() => updateTicketCount(ticket.id, 1)}><Plus size={14}/></button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="config-footer">
                            <div className="calc-price-box">
                              <span className="calc-label">{t('total_calc')}</span>
                              <span className="calc-amount">{calculateCurrentPrice(attr)}€</span>
                            </div>
                            <button 
                              className="btn-primary" 
                              onClick={() => handleAddToCart(attr)}
                              disabled={calculateCurrentPrice(attr) === 0}
                            >
                              <ShoppingCart size={18}/> {t('btn_add_to_cart')}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-2 fade-in">
              <div className="step-header-with-cart">
                <h2><ShoppingCart size={24} /> {t('step2')}</h2>
                <button className="btn-text" onClick={() => setStep(1)}>+ Tickets hinzufügen</button>
              </div>
              
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>{t('cart_empty')}</p>
                  <button className="btn-primary" onClick={() => setStep(1)}>{t('btn_add_to_cart')}</button>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map(item => (
                      <div key={item.cartId} className="cart-item">
                        <div className="cart-item-info">
                          <h4>{item.name}</h4>
                          <p className="cart-item-desc">{item.desc}</p>
                        </div>
                        <div className="cart-item-right">
                          <span className="cart-item-price">{item.price}€</span>
                          <button className="btn-icon" onClick={() => removeFromCart(item.cartId)} title={t('remove')}>
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cart-total-box">
                    <span>{t('total')}:</span>
                    <span className="total-amount">{cartTotal}€</span>
                  </div>
                  <div className="form-actions right">
                    <button className="btn-primary" onClick={() => setStep(3)}>{t('btn_checkout')}</button>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="step-3 fade-in">
              <h2><Calendar size={24} /> {t('step3')}</h2>
              <div className="form-group">
                <input 
                  type="date" 
                  className="form-input" 
                  value={bookingDate}
                  onChange={e => setBookingDate(e.target.value)}
                />
              </div>
              <div className="form-actions spread">
                <button className="btn-text" onClick={() => setStep(2)}>Zurück</button>
                <button className="btn-primary" onClick={() => setStep(4)}>{t('btn_checkout')}</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-4 fade-in">
              <h2><CreditCard size={24} /> {t('step4')}</h2>
              <p className="payment-demo-text">Dies ist eine Simulation. Die Buchung wird sofort bestätigt.</p>
              <div className="total-price">
                {t('total')}: <span>{cartTotal}€</span>
              </div>
              <div className="form-actions spread">
                <button className="btn-text" onClick={() => setStep(3)}>Zurück</button>
                <button className="btn-primary" onClick={() => {
                  clearCart();
                  setStep(5);
                }}>{t('btn_pay')}</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="step-5 fade-in">
              <CheckCircle2 size={64} color="#4caf50" />
              <h2>{t('step5')}</h2>
              <button className="btn-secondary" onClick={() => setStep(1)}>{t('btn_book')}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
