"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";

const scanImages = [
  "ABA.jpg",
  "Ace.jpg",
  "Angewomon.jpg",
  "Baiken GGST.jpg",
  "Baiken.jpg",
  "Bomb Devil.jpg",
  "Chipp.jpg",
  "DanDaDan.jpg",
  "Deku & Bakugo.jpg",
  "Elphelt.jpg",
  "Frieren.jpg",
  "Gachiakuta.jpg",
  "Igris.jpg",
  "Ino.jpg",
  "Jane.jpg",
  "Jotaro.jpg",
  "Makima.jpg",
  "Megumi.jpg",
  "Miyabi.jpg",
  "Obito.jpg",
  "Persona 3.jpg",
  "Persona 5.jpg",
  "Princess Mononoke.jpg",
  "Ramlethal.jpg",
  "Shikamaru.jpg",
  "Shinobu.jpg",
  "Sol Badguy.jpg",
  "Soul Eater.jpg",
  "Tengen.jpg",
  "Trigun.jpg",
  "Trunks.jpg",
  "Unohana.jpg",
  "Vasto Lorde.jpg",
  "Yuta.jpg"
];

export default function FanArtPage() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const currentIdx = zoomedImg ? scanImages.findIndex(img => img === zoomedImg) : -1;
  const showPrev = currentIdx > 0;
  const showNext = currentIdx < scanImages.length - 1 && currentIdx !== -1;
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (showPrev) setZoomedImg(scanImages[currentIdx - 1]);
  };
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (showNext) setZoomedImg(scanImages[currentIdx + 1]);
  };

  return (
    <>
      <Navbar />
      <main className="p-8 mt-12">
        <h1 className="text-3xl font-bold mb-4">Fan Art</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {scanImages.map((img) => (
            <div key={img} className="bg-gray-700 w-full aspect-[3/4] rounded shadow-lg flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setZoomedImg(img)}>
              <img src={`/Images/scans/${img}`} alt={img.replace(/\..+$/, "")} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {zoomedImg && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => setZoomedImg(null)}
          >
            {showPrev && (
              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl hover:bg-gray-700 z-10"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <span className="flex items-center justify-center w-full h-full" style={{marginTop: '-4px'}}>&#8592;</span>
              </button>
            )}
            <div className="relative flex items-center justify-center w-full h-full">
              <button
                className="absolute top-2 right-2 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-700"
                onClick={() => setZoomedImg(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <img
                  src={`/Images/scans/${zoomedImg}`}
                  alt={zoomedImg.replace(/\..+$/, "")}
                  className="max-w-[90vw] max-h-[80vh] rounded shadow-lg"
                />
                <span className="mt-3 px-3 py-1 bg-black bg-opacity-60 text-white text-lg rounded pointer-events-none z-[9999] text-center">
                  {zoomedImg.replace(/\..+$/, "")}
                </span>
              </div>
            </div>
            {showNext && (
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl hover:bg-gray-700 z-10"
                onClick={handleNext}
                aria-label="Next image"
              >
                <span className="flex items-center justify-center w-full h-full" style={{marginTop: '-4px'}}>&#8594;</span>
              </button>
            )}
          </div>
        )}
      </main>
    </>
  );
}