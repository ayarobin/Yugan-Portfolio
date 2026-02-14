"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import "./fanart-fix.css";

const scanImages = [
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
  "/Fan Art 3/Shikamaru.jpg",
  "/Fan Art 3/Shinobu.jpg",
  "/Fan Art 3/Sol Badguy.jpg",
  "/Fan Art 3/Soul Eater.jpg",
  "/Fan Art 3/Tengen.jpg",
  "/Fan Art 3/Trigun.jpg",
  "/Fan Art 3/Unohana.jpg",
  "/Fan Art 3/Vasto Lorde.jpg",
  "/Fan Art 3/Yuta.jpg"
];

export default function FanArtPage() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const currentIdx = zoomedImg
    ? scanImages.findIndex(img => img === zoomedImg)
    : -1;

  const showPrev = currentIdx > 0;
  const showNext = currentIdx < scanImages.length - 1;

  const closeModal = () => {
    setZoomedImg(null);
    setIsZoomedIn(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showPrev) {
      setZoomedImg(scanImages[currentIdx - 1]);
      setIsZoomedIn(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showNext) {
      setZoomedImg(scanImages[currentIdx + 1]);
      setIsZoomedIn(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="p-8 mt-12">
        <h1 className="text-3xl font-bold mb-6">Fan Art</h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {scanImages.map(img => {
            const name =
              img.split("/").pop()?.replace(/\.[^/.]+$/, "") ?? "";

            return (
              <div
                key={img}
                className="bg-gray-700 aspect-[3/4] rounded shadow-lg overflow-hidden cursor-pointer fanart-image-container"
                onClick={() => setZoomedImg(img)}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover fanart-image"
                  draggable={false}
                  onContextMenu={e => e.preventDefault()}
                />
                <span className="block text-white text-sm bg-black/60 px-2 py-1 text-center truncate">
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        {/* MODAL */}
        {zoomedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/95"
            onClick={closeModal}
          >
            {/* TITLE */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
              <span className="px-4 py-2 bg-black/60 text-white text-lg rounded">
                {zoomedImg.split("/").pop()?.replace(/\.[^/.]+$/, "")}
              </span>
            </div>

            {/* CLOSE */}
            <button
              className="fixed top-4 right-4 z-50 bg-gray-900 text-white rounded-full w-8 h-8 text-xl hover:bg-gray-700"
              onClick={e => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ×
            </button>

            {/* PREV / NEXT */}
            {showPrev && (
              <button
                className="fixed left-8 top-1/2 -translate-y-1/2 z-50 text-white text-4xl hover:text-teal-300 focus:outline-none"
                style={{ background: "none", border: "none", boxShadow: "none", padding: 0, width: 'auto', height: 'auto' }}
                onClick={handlePrev}
                aria-label="Previous image"
              >
                ←
              </button>
            )}

            {showNext && (
              <button
                className="fixed right-8 top-1/2 -translate-y-1/2 z-50 text-white text-4xl hover:text-teal-300 focus:outline-none"
                style={{ background: "none", border: "none", boxShadow: "none", padding: 0, width: 'auto', height: 'auto' }}
                onClick={handleNext}
                aria-label="Next image"
              >
                →
              </button>
            )}

            {/* SCROLL AREA */}
            <div
              className="absolute inset-0 overflow-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-full overflow-auto p-24 flex justify-center">
                <img
                  src={zoomedImg}
                  alt=""
                  draggable={false}
                  onContextMenu={e => e.preventDefault()}
                  onClick={() => setIsZoomedIn(z => !z)}
                  className={`
                    rounded shadow-lg w-auto h-auto max-w-[90vw] max-h-[80vh] select-none object-contain
                    transition-transform duration-300 ease-out
                    hover:cursor-[url('/Icons/magnifier.svg'),zoom-in]
                    ${isZoomedIn
                      ? "cursor-zoom-out scale-[1.6] origin-top max-w-[100vw] max-h-none"
                      : "cursor-zoom-in scale-100 max-w-[90vw] max-h-[80vh]"}
                  `}
                />
              </div>

            </div>
          </div>
        )}
      </main>
    </>
  );
}
