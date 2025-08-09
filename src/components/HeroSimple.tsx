import React from 'react';

const HeroSimple: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">JefraPools</h1>
        <p className="text-xl mb-8">Tu piscina cristalina en 24 horas</p>
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold">
          Cotización WhatsApp
        </button>
      </div>
    </div>
  );
};

export default HeroSimple;
