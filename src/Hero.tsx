import { HERO_SECTION, HERO_SECTION_2 } from './textConstants.ts';
// import heroImage from './assets/img-og/hero.png'; // No longer needed directly
import { memo } from 'react';
import { OptimizedPicture } from './OptimizedPicture.tsx'; // Import OptimizedPicture

// Import optimized image versions for hero.png
import heroDesktopWebp from './assets/img-optimized/hero.desktop.webp';
import heroMobileWebp from './assets/img-optimized/hero.mobile.webp';
import heroDesktopPng from './assets/img-optimized/hero.desktop.png';
import heroMobilePng from './assets/img-optimized/hero.mobile.png';

export const Hero = memo(function Hero() {
  // heroStyle is no longer needed as OptimizedPicture handles the image
  // const heroStyle = {
  //   background: `url('${heroImage}') no-repeat center`,
  //   backgroundSize: 'cover',
  // };

  return (
    <div className="w-full">
      {/*
        The parent div needs `position: relative` for the absolute positioning of OptimizedPicture.
        The `h-[60vh]` and flex properties are kept on this parent.
        `bg-cover` and `bg-no-repeat` are removed as the image tag will handle this.
        `main-hero` class is kept if it has other non-background styles.
      */}
      <div className="main-hero relative text-2xl flex flex-col justify-end items-center h-[60vh] overflow-hidden">
        <OptimizedPicture
          webpSrcDesktop={heroDesktopWebp}
          webpSrcMobile={heroMobileWebp}
          pngSrcDesktop={heroDesktopPng}
          pngSrcMobile={heroMobilePng}
          alt="Abstract background design" // Provide a descriptive alt text
          className="absolute inset-0 w-full h-full object-cover -z-10" // Styles to make it act like a background
          loading="eager" // Hero images are often critical
        />
        {/* Content needs to be above the image */}
        <span className="text-bg w-full dynamic my-10 relative z-10">{HERO_SECTION}</span>
      </div>
      <div className="text-2xl mt-20 flex justify-center">
        <span className=" w-full dynamic">{HERO_SECTION_2}</span>
      </div>
    </div>
  );
});

// import { HERO_SECTION, HERO_SECTION_2 } from './textConstants.ts';
// import heroImage from './assets/img-og/hero.png';
// import { memo } from 'react';
//
// export const Hero = memo(function Hero() {
//   const heroStyle = {
//     background: `url('${heroImage}') no-repeat center`,
//     backgroundSize: 'cover',
//   };
//
//   return (
//     <div className="w-full">
//       <div className="main-hero text-2xl bg-cover bg-no-repeat flex flex-col justify-end items-center h-[60vh]" style={heroStyle}>
//         <span className="text-bg w-full dynamic my-10">{HERO_SECTION}</span>
//       </div>
//       <div className="text-2xl mt-20 flex justify-center">
//         <span className=" w-full dynamic">{HERO_SECTION_2}</span>
//       </div>
//     </div>
//   );
// });