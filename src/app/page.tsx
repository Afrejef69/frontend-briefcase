'use client';
import Image from "next/image";
import personal from "../../public/perfil.png"
import { useEffect, useState } from "react";
import { Loading } from "@/components";

export default function Home() {
  const[displayText, setDisplayText] = useState('');
  const [remainigText, setRemainingText] = useState('Portafolio personal y blog Jeffrey Manrique Reyes Vasquez');
  const delay = 100;

  useEffect(() => {
    const updateText = () => {
      setDisplayText(prevText => prevText + remainigText.charAt(0));
      setRemainingText(prevRemainingText => prevRemainingText.substring(1));
    };
    const intervalId = setInterval(updateText, delay);
    return () => clearInterval(intervalId);
  }, [remainigText]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl md:text-5xl items-center text-center font-bold portafolio md:p-18">{displayText}</h1>
      {
      displayText.length === 'Portafolio personal y blog Jeffrey Manrique Reyes Vasquez'.length && <Image 
      src={personal} 
      alt="Perfil" 
      className="rounded-image"
      />
      }
      <Loading />
    </main>
  );
}
