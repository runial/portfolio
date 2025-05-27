import { memo, useEffect, useRef } from 'react';
import { HERO_SECTION, HERO_SECTION_2, HERO_IMG_ALT } from './textConstants.ts';
import { OptimizedPicture } from './OptimizedPicture.tsx';
import heroDesktopWebp from './assets/img-optimized/hero.desktop.webp';
import heroMobileWebp from './assets/img-optimized/hero.mobile.webp';
import heroDesktopPng from './assets/img-optimized/hero.desktop.png';
import heroMobilePng from './assets/img-optimized/hero.mobile.png';

const PARALLAX_SPEED_FACTOR = 0.5; // Image scrolls at 50% of page speed

export const Hero = memo(function Hero() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Slow down image scrolling
    const handleScroll = () => {
      if (imageWrapperRef.current) {
        const scrollY = window.scrollY;
        imageWrapperRef.current.style.transform = `translateY(${
          scrollY * PARALLAX_SPEED_FACTOR
        }px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once on mount in case the page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className="w-full">
      {/* main-hero acts as the viewport for the parallax.
          overflow-hidden is crucial to clip the taller image. */}
      <div className="main-hero relative text-2xl flex flex-col justify-end items-center h-[60vh] overflow-hidden">
        {/* This wrapper will be transformed for the parallax effect.
            It needs to be taller than main-hero to allow for movement without showing gaps. */}
        <div
          ref={imageWrapperRef}
          className="absolute left-0 w-full -z-10" // Positioned behind content
          style={{
            top: '0', // Aligns with the top of the main-hero container
            height: `60vh`,
          }}
        >
          <OptimizedPicture
            webpSrcDesktop={heroDesktopWebp}
            webpSrcMobile={heroMobileWebp}
            pngSrcDesktop={heroDesktopPng}
            pngSrcMobile={heroMobilePng}
            alt={HERO_IMG_ALT}
            // Ensure the image covers the entire (taller) wrapper
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Content needs to be above the image */}
        <span className="text-bg w-full dynamic my-10 relative z-10">
          {HERO_SECTION}
        </span>
      </div>
      <div className="text-2xl mt-20 flex justify-center">
        <span className="w-full dynamic">{HERO_SECTION_2}</span>
      </div>
    </div>
  );
});