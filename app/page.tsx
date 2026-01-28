"use client";
import * as React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import type {} from 'react';
import type {} from 'react/jsx-runtime';
import ReactJSX from 'react/jsx-runtime';

const fanArtImages = [
  { src: "/Homepage Images/Joy%20Boy.jpg", alt: "Joy Boy" },
  { src: "/Homepage Images/Zoro.jpg", alt: "Zoro" },
  { src: "/Homepage Images/Sanji.jpg", alt: "Sanji" },
  { src: "/Homepage Images/Elphelt.jpg", alt: "Elphelt" },
  { src: "/Homepage Images/Berserk.jpg", alt: "Berserk" },
  { src: "/Homepage Images/Jotaro.jpg", alt: "Jotaro" },
  // Removed Makima and Angewomon
];


export default function Home() {
  const [zoomedImg, setZoomedImg] = useState<{ src: string; alt: string } | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const currentIdx = zoomedImg ? fanArtImages.findIndex(img => img.src === zoomedImg.src) : -1;
  const showPrev = currentIdx > 0;
  const showNext = currentIdx < fanArtImages.length - 1 && currentIdx !== -1;
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (showPrev) setZoomedImg(fanArtImages[currentIdx - 1]);
  };
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (showNext) setZoomedImg(fanArtImages[currentIdx + 1]);
  };

  return (
    <main>
      <div>
        <div className="relative z-20">
          <Navbar />
        </div>
        <div
          className="w-full overflow-hidden relative -mt-12 z-10"
          style={{ height: '460px' }}
        >
          <img
            src="/Homepage Images/Igris copy.jpg"
            alt="Igris copy"
            className="w-full h-full object-cover object-top"
            onContextMenu={e => e.preventDefault()}
            draggable={false}
          />
          {/* Yugan Logo centered in hero section */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="flex flex-col items-center w-40" style={{ maxWidth: '160px' }}>
              <img
                src="/yugan-logo.png"
                alt="Yugan Logo"
                className="w-40 h-40 object-contain drop-shadow-lg"
                style={{ maxWidth: '160px', maxHeight: '160px' }}
                draggable={false}
              />
              <span className="block text-white text-center font-bold text-2xl mt-2 w-full" style={{ letterSpacing: '0.05em' }}>
                Yugan.999
              </span>
            </div>
          </div>
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.6, pointerEvents: 'none', zIndex: 10 }}
          />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-4xl">
          {/*
            <h3 className="text-2xl font-bold mb-2 mt-20">Original Art</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <div className="bg-gray-700 w-full h-56 rounded shadow-lg" />
              <div className="bg-gray-700 w-full h-56 rounded shadow-lg" />
              <div className="bg-gray-700 w-full h-56 rounded shadow-lg" />
            </div>
            <div className="flex justify-end mb-8">
              <a href="/original-art" className="flex items-center gap-2 bg-gray-800 text-[#ededed] px-4 py-2 rounded shadow-lg mt-2 hover:bg-gray-600 hover:text-teal-300 transition-colors duration-200 group">
                <span className="transition-colors duration-200 group-hover:text-teal-300">See more</span>
                <span className="text-xl transition-colors duration-200 group-hover:text-teal-300">→</span>
              </a>
            </div>
          */}
          <section className="p-8">
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-2">Fan Art</h3>
              <div className="flex flex-col gap-4 mb-2">
                <div className="flex flex-col sm:flex-row gap-4">
                  {fanArtImages.slice(0, 3).map((img, idx) => (
                    <div key={img.alt} className="bg-gray-700 w-full h-56 rounded shadow-lg flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setZoomedImg(img)}>
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" onContextMenu={e => e.preventDefault()} draggable={false} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {fanArtImages.slice(3, 6).map((img, idx) => (
                    <div key={img.alt} className="bg-gray-700 w-full h-56 rounded shadow-lg flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setZoomedImg(img)}>
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" onContextMenu={e => e.preventDefault()} draggable={false} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mb-8">
                <a href="/fan-art" className="flex items-center gap-2 bg-gray-800 text-[#ededed] px-4 py-2 rounded shadow-lg mt-2 hover:bg-gray-600 hover:text-teal-300 transition-colors duration-200 group">
                  <span className="transition-colors duration-200 group-hover:text-teal-300">See more</span>
                  <span className="text-xl transition-colors duration-200 group-hover:text-teal-300">→</span>
                </a>
              </div>
              <div className="w-full text-[#ededed] bg-black rounded-lg p-6 mb-32 shadow-md text-base leading-relaxed mt-32">
                <div className="flex flex-col md:flex-row items-start gap-6 h-full min-h-[8rem]">
                  <div className="flex-1 flex items-start justify-center md:max-w-xs w-full">
                    <img src="/Homepage Images/Bio.png" alt="Bio" className="w-full h-auto max-h-[340px] object-cover shadow-md bg-gray-800 rounded-lg" onContextMenu={e => e.preventDefault()} draggable={false} />
                  </div>
                  <div className="flex-1">
                    Yugan is a Taiwan-born artist who moved to the United States at age 14. He has worked as a freelance illustrator for over 11 years, turning a long-time passion for art into a full-time career with the support of the community that’s followed his work. Trained in traditional media since college, Yugan briefly explored digital art but ultimately chose to focus on physical mediums he loves most—markers, ink, watercolor, acrylics, and more—continuing to refine his craft through hands-on technique and expressive, original illustration.

                    <div className="mt-8 mb-12">
                      <h4 className="text-lg font-semibold mb-1">Contact Information</h4>
                      <a href="mailto:yugandraws@gmail.com" className="text-teal-300 hover:underline">yugandraws@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <img src="/Homepage Images/Cons.png" alt="Cons" className="w-auto max-h-[220px] object-contain shadow-md bg-gray-800 rounded-lg mb-32" onContextMenu={e => e.preventDefault()} draggable={false} />
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
      {zoomedImg && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 overflow-auto"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => { setZoomedImg(null); setIsZoomedIn(false); }}
        >
          {zoomedImg.src !== "/Images/Berserk.jpg" && showPrev && (
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
                src={zoomedImg.src}
                alt={zoomedImg.alt}
                className={isZoomedIn ? "w-[1600px] h-auto rounded shadow-lg" : "max-w-[90vw] max-h-[80vh] rounded shadow-lg"}
                onContextMenu={e => e.preventDefault()}
                draggable={false}
              />
              <span className="mt-3 px-3 py-1 bg-black bg-opacity-60 text-white text-lg rounded pointer-events-none z-[9999] text-center">
                {zoomedImg?.alt || (zoomedImg?.src ? zoomedImg.src.split('/').pop()?.replace(/\..+$/, "") : "")}
              </span>
            </div>
          </div>
          {zoomedImg.src !== "/Images/Berserk.jpg" && showNext && (
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
  );
}
