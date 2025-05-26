import { memo } from 'react';
import { HERO_SECTION, HERO_SECTION_2, HERO_IMG_ALT } from './textConstants.ts';
import { OptimizedPicture } from './OptimizedPicture.tsx';
import heroDesktopWebp from './assets/img-optimized/hero.desktop.webp';
import heroMobileWebp from './assets/img-optimized/hero.mobile.webp';
import heroDesktopPng from './assets/img-optimized/hero.desktop.png';
import heroMobilePng from './assets/img-optimized/hero.mobile.png';

export const Hero = memo(function Hero() {
  return (
    <div className="w-full">
      <div className="main-hero relative text-2xl flex flex-col justify-end items-center h-[60vh] overflow-hidden">
        <OptimizedPicture
          webpSrcDesktop={heroDesktopWebp}
          webpSrcMobile={heroMobileWebp}
          pngSrcDesktop={heroDesktopPng}
          pngSrcMobile={heroMobilePng}
          alt={HERO_IMG_ALT}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          loading="eager"
        />

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
