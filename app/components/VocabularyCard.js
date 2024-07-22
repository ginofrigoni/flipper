"use client";

import { useState } from 'react';


const VocabularyCard = ({ data, flipped, onFlip }) => {
  const [language, setLanguage] = useState('italiano'); // Configurar idioma predeterminado

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const translation = data[language] || { nombre: "No data", pronunciación: "No data" };

  return (
    <div className="flip-card w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden perspective" onClick={onFlip}>
      <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Frente de la Tarjeta */}
        <div className="flip-card-front absolute w-full h-full bg-white flex flex-col items-center justify-center p-4 backface-hidden">
          <img src={data.imagen_url} alt={data.nombre} className="w-32 h-32 object-cover mb-4" />
          <h2 className="text-xl font-bold">{data.nombre}</h2>
        </div>
        {/* Reverso de la Tarjeta */}
        <div className="flip-card-back absolute w-full h-full bg-blue-100 flex flex-col items-center justify-center p-4 transform rotate-y-180 backface-hidden">
          <h2 className="text-xl font-bold">{translation.nombre}</h2>
          <p className="mt-2 text-lg">{translation.pronunciación}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">🔊</button>
        </div>
      </div>
      <select className="absolute top-2 right-2" value={language} onChange={handleLanguageChange} onClick={(e) => e.stopPropagation()}>
        <option value="italiano">Italiano</option>
        <option value="ingles">Inglés</option>
      </select>
    </div>
  );
};

export default VocabularyCard;
