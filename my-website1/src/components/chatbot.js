import React, { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      {/* Chatbot Window */}
      <div style={{
        display: isOpen ? 'block' : 'none',
        width: '350px',
        height: '500px',
        marginBottom: '10px',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
        backgroundColor: 'white' // Taki loading ke waqt piche white background rahe
      }}>
        <iframe 
          src="/bot/index.html" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
          title="AI Bot"
        />
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          float: 'Right',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#14b8a6',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden', // <-- Ye zaroori hai image ko gol rakhne ke liye
          padding: '0'        // <-- Taake image button ke poore area ko cover kare
        }}
      >
      
      </button>
    </div>
  );
}