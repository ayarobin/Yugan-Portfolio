"use client";
import Navbar from "../components/Navbar";
import "./fanart-fix.css";
import { useState } from "react";

const scanImages = [
  // Fan Art 1
  "/Fan Art 1/ABA.jpg",
  "/Fan Art 1/Ace.jpg",
  "/Fan Art 1/Angewomon.jpg",
  "/Fan Art 1/Baiken GGST.jpg",
  "/Fan Art 1/Baiken.jpg",
  "/Fan Art 1/Bomb Devil.jpg",
  "/Fan Art 1/Chipp.jpg",
  "/Fan Art 1/DanDaDan.jpg",
  "/Fan Art 1/Elphelt.jpg",
  "/Fan Art 1/Frieren.jpg",
  "/Fan Art 1/Gachiakuta.jpg",
  "/Fan Art 1/Makima.jpg",
  "/Fan Art 1/Trunks.jpg",
  // Fan Art 2
  "/Fan Art 2/Deku & Bakugo.jpg",
  "/Fan Art 2/Igris.jpg",
  "/Fan Art 2/Ino.jpg",
  "/Fan Art 2/Jane.jpg",
  "/Fan Art 2/Jotaro.jpg",
  "/Fan Art 2/Megumi.jpg",
  "/Fan Art 2/Miyabi.jpg",
  "/Fan Art 2/Obito.jpg",
  "/Fan Art 2/Persona 3.jpg",
  "/Fan Art 2/Persona 5.jpg",
  "/Fan Art 2/Princess Mononoke.jpg",
  "/Fan Art 2/Ramlethal.jpg",
  // Fan Art 3
  "/Fan Art 3/Shikamaru.jpg",
  "/Fan Art 3/Shinobu.jpg",
  "/Fan Art 3/Sol Badguy.jpg",
  "/Fan Art 3/Soul Eater.jpg",
  "/Fan Art 3/Tengen.jpg",
  "/Fan Art 3/Trigun.jpg",
  "/Fan Art 3/Unohana.jpg",
  "/Fan Art 3/Vasto Lorde.jpg",
  "/Fan Art 3/Yuta.jpg",
];

export default function FanArtPage() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
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
          {scanImages.map((img) => {
            const fileNameWithExt = img.split("/").pop() || "";
            const fileName = fileNameWithExt.replace(/\.[^/.]+$/, "");
            return (
              <div key={img} className="bg-gray-700 w-full aspect-[3/4] shadow-lg flex flex-col items-center justify-start overflow-hidden cursor-pointer fanart-image-container rounded" onClick={() => setZoomedImg(img)}>
                <div className="w-full h-full flex items-center justify-center overflow-hidden fanart-image-container">
                  <img src={img} alt={fileName} className="w-full h-full object-cover fanart-image-container rounded" />
                </div>
                <span className="mt-2 text-white text-sm bg-black bg-opacity-60 rounded px-2 py-1 pointer-events-none select-none text-center w-full truncate" title={fileName}>{fileName}</span>
              </div>
            );
          })}
        </div>
        {zoomedImg && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 overflow-auto"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => { setZoomedImg(null); setIsZoomedIn(false); }}
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
              <div className="fixed top-4 right-4 flex gap-2 z-50">
                {/* Zoom In/Zoom Out buttons hidden as requested */}
                <button
                  className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-700 ml-2"
                  onClick={() => { setZoomedImg(null); setIsZoomedIn(false); }}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <img
                  src={zoomedImg}
                  alt={(zoomedImg.split("/").pop() || "").replace(/\.[^/.]+$/, "")}
                  className={isZoomedIn ? "w-[1600px] h-auto rounded shadow-lg" : "max-w-[90vw] max-h-[80vh] rounded shadow-lg"}
                  style={{objectFit: 'contain'}}
                  onContextMenu={e => e.preventDefault()}
                  draggable={false}
                />
                <span className="mt-3 px-3 py-1 bg-black bg-opacity-60 text-white text-lg rounded pointer-events-none z-[9999] text-center">
                  {(zoomedImg.split("/").pop() || "").replace(/\.[^/.]+$/, "")}
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