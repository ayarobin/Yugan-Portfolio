"use client";

import * as React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";

/* -----------------------------
   Image Data
------------------------------ */

const fanArtImages = [
  { src: "/Homepage Images/Joy%20Boy.jpg", alt: "Joy Boy" },
  { src: "/Homepage Images/Zoro.jpg", alt: "Zoro" },
  { src: "/Homepage Images/Sanji.jpg", alt: "Sanji" },
  { src: "/Homepage Images/Elphelt.jpg", alt: "Elphelt" },
  { src: "/Homepage Images/Berserk.jpg", alt: "Berserk" },
  { src: "/Homepage Images/Jotaro.jpg", alt: "Jotaro" }
];

/* -----------------------------
   Page
------------------------------ */

export default function Home() {
  const [zoomedImg, setZoomedImg] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const currentIdx = zoomedImg
    ? fanArtImages.findIndex(img => img.src === zoomedImg.src)
    : -1;

  const showPrev = currentIdx > 0;
  const showNext = currentIdx < fanArtImages.length - 1 && currentIdx !== -1;

  const closeModal = () => {
    setZoomedImg(null);
    setIsZoomedIn(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showPrev) setZoomedImg(fanArtImages[currentIdx - 1]);
    setIsZoomedIn(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showNext) setZoomedImg(fanArtImages[currentIdx + 1]);
    setIsZoomedIn(false);
  };

  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative -mt-12 z-10 h-[460px] overflow-hidden">
        <img
          src="/Homepage Images/Igris copy.jpg"
          alt="Igris"
          className="w-full h-full object-cover object-top"
          draggable={false}
          onContextMenu={e => e.preventDefault()}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="flex flex-col items-center w-40">
            <img
              src="/yugan-logo.png"
              alt="Yugan Logo"
              className="w-40 h-40 object-contain drop-shadow-lg"
              draggable={false}
            />
            <span className="mt-2 text-white text-2xl font-bold tracking-widest">
              Yugan.999
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* ---------------- FAN ART ---------------- */}
      <section className="p-8 max-w-4xl mx-auto mt-20 relative">
        <h3 className="text-2xl font-bold mb-4">Fan Art</h3>

        <div className="flex flex-col gap-4">
          {[fanArtImages.slice(0, 3), fanArtImages.slice(3, 6)].map(
            (row, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4">
                {row.map(img => (
                  <div
                    key={img.alt}
                    className="bg-gray-700 w-full h-56 rounded shadow-lg overflow-hidden cursor-pointer"
                    onClick={() => setZoomedImg(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                      onContextMenu={e => e.preventDefault()}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* See More Button */}
        <div className="absolute -bottom-8 right-8 z-30">
          <a
            href="/fan-art"
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#181818] via-[#222] to-[#181818] text-[#ededed] rounded-lg shadow-lg hover:bg-[#232323] hover:text-teal-300 transition-colors font-semibold text-base border border-gray-800"
          >
            See More
          </a>
        </div>
      </section>

      {/* ---------------- BIO ---------------- */}
      <div className="w-full text-[#ededed] bg-black rounded-lg p-6 mb-32 shadow-md text-base leading-relaxed mt-32 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/Homepage Images/Bio.png"
            alt="Bio"
            className="w-full md:max-w-xs rounded-lg shadow-md"
            draggable={false}
            onContextMenu={e => e.preventDefault()}
          />
          <div>
            Yugan is a Taiwan-born artist who moved to the United States at age 14. He has worked as a freelance illustrator for over 11 years, turning a long-time passion for art into a full-time career with the support of the community that’s followed his work. Trained in traditional media since college, Yugan briefly explored digital art but ultimately chose to focus on physical mediums he loves most—markers, ink, watercolor, acrylics, and more—continuing to refine his craft through hands-on technique and expressive, original illustration.
          </div>
        </div>
      </div>

      <div className="mb-32 max-w-4xl mx-auto">
        <img
          src="/Homepage Images/Cons.png"
          alt="Cons"
          className="w-full h-[220px] rounded-2xl shadow-md object-cover block"
          draggable={false}
          onContextMenu={e => e.preventDefault()}
        />
      </div>

      {/* ---------------- ZOOM MODAL ---------------- */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95"
          onClick={closeModal}
        >
          {/* Fixed Title */}
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <span className="px-4 py-2 bg-black/60 text-white text-lg rounded">
              {zoomedImg.alt}
            </span>
          </div>

          {/* Close */}
          <button
            className="fixed top-4 right-4 z-50 bg-gray-900 text-white rounded-full w-8 h-8 text-xl hover:bg-gray-700"
            onClick={e => {
              e.stopPropagation();
              closeModal();
            }}
          >
            ×
          </button>

          {/* Prev / Next */}
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

          {/* Scroll Container */}
          <div
            className="absolute inset-0 overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-full overflow-auto p-24 flex justify-center">
              <img
                src={zoomedImg.src}
                alt={zoomedImg.alt}
                draggable={false}
                onContextMenu={e => e.preventDefault()}
                onClick={() => setIsZoomedIn(z => !z)}
                className={`
    rounded shadow-lg w-auto select-none
    transition-transform duration-300 ease-out
    ${isZoomedIn
      ? "cursor-zoom-out scale-[1.6] origin-top"
      : "cursor-zoom-in scale-100"}
    max-w-[100vw] max-h-none
  `}
              />

            </div>
          </div>
        </div>
      )}
    </main>
  );
}

