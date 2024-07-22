"use client";

import Head from 'next/head';
import { useState } from 'react';
import VocabularyCard from './components/VocabularyCard';
import data from '../public/fruits.json'; // Importa el archivo JSON


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>My Vocabulary App</title>
        <meta name="description" content="A language learning app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VocabularyCard data={data[currentIndex]} flipped={flipped} onFlip={handleFlip} />

      <div className="mt-4">
        <button onClick={handlePrev} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Anterior</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Siguiente</button>
      </div>
    </div>
  );
}