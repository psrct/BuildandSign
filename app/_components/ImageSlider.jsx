'use client';

import { useEffect, useState } from 'react';

const imageData = [
  {
    src: '/poster.jpg',
    alt: 'ตัวอย่างงานป้ายไฟ LED คุณภาพสูง - BuildandSign',
  },
  {
    src: '/poster1.jpg',
    alt: 'ตัวอย่างงานป้ายอาคารและป้ายโฆษณา - BuildandSign', 
  },
  {
    src: '/poster2.jpg',
    alt: 'ตัวอย่างงานป้ายอาคารและป้ายโฆษณา งานก่อสร้าง สร้างอาคาร สร้างโกดัง - BuildandSign', 
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // เพิ่มเวลาให้ผู้ใช้ดูรูปได้นานกว่า

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false); // หยุด autoplay เมื่อผู้ใช้เลือกเอง
    
    // เปิด autoplay อีกครั้งหลังจาก 5 วินาที
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? imageData.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === imageData.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <div 
      className="w-full max-w-4xl relative overflow-hidden border-black border-2 rounded-lg shadow-lg group"
      role="region"
      aria-label="แสดงตัวอย่างผลงาน"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Main Image */}
      <div className="relative">
        <img
          src={imageData[currentIndex].src}
          alt={imageData[currentIndex].alt}
          className="w-full h-auto transition-opacity duration-700"
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
        
        {/* Image overlay with title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-lg font-semibold text-center">
            {imageData[currentIndex].title}
          </h3>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="ดูรูปก่อนหน้า"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="ดูรูปถัดไป"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imageData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`ไปยังรูปที่ ${index + 1}: ${imageData[index].title}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: isAutoPlay ? '100%' : '0%',
            transition: isAutoPlay ? 'width 4s linear' : 'width 0.3s ease',
          }}
        />
      </div>

      {/* Preload next image */}
      <div className="hidden">
        {imageData.map((image, index) => (
          index !== currentIndex && (
            <img
              key={index}
              src={image.src}
              alt=""
              width="1"
              height="1"
              loading="lazy"
            />
          )
        ))}
      </div>
    </div>
  );
}