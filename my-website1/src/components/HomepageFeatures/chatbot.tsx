import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', z-index: 1000 }}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#14b8a6',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src="/img/robot.jpg" alt="Bot" style={{ width: '35px', borderRadius: '50%' }} />
      </button>

      {/* Chat Window Container */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          width: '350px',
          height: '500px',
          backgroundColor: 'white',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          {/* Yahan apne chatbot ka sahi path dein */}
          <iframe 
            src="/physical-ai-c.../src/index.html" 
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;