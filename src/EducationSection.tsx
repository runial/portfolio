import {
  SECTION_IDS,
  EDUCATION_HEADER,
  TJHSST_HEADER,
  TJHSST_DESCRIPTION,
  TJHSST_IMG_ALT,
  TJHSST_IMG_CREDIT,
} from './textConstants.ts';
// Removed direct import of tjhsstImage as OptimizedPicture will handle sources
import { Section } from './Section.tsx';
import { BulletList } from './BulletList.tsx';
import { memo } from 'react';
import { OptimizedPicture } from './OptimizedPicture.tsx'; // Import OptimizedPicture

// Import optimized image versions for TJHSST
import tjhsstDesktopWebp from './assets/img-optimized/tjhsst.desktop.webp';
import tjhsstMobileWebp from './assets/img-optimized/tjhsst.mobile.webp';
import tjhsstDesktopPng from './assets/img-optimized/tjhsst.desktop.png';
import tjhsstMobilePng from './assets/img-optimized/tjhsst.mobile.png';

interface SchoolProps {
  name: string;
  description: string[];
  // src: string; // Replaced by specific sources
  // alt: string; // Already part of OptimizedPictureProps
  imgCredit?: string;
  // Props for OptimizedPicture
  webpSrcDesktop: string;
  webpSrcMobile: string;
  pngSrcDesktop: string;
  pngSrcMobile: string;
  altText: string; // Renamed to avoid conflict if 'alt' was used differently
  imageClassName?: string; // To pass existing classNames
}

function School({
  name,
  description,
  imgCredit,
  webpSrcDesktop,
  webpSrcMobile,
  pngSrcDesktop,
  pngSrcMobile,
  altText,
  imageClassName,
}: SchoolProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-fg-secondary text-xl font-bold">{name}</h2>
        <BulletList className="text-fg-secondary" content={description} />
      </div>
      <div className="flex flex-col gap-2">
        <OptimizedPicture
          webpSrcDesktop={webpSrcDesktop}
          webpSrcMobile={webpSrcMobile}
          pngSrcDesktop={pngSrcDesktop}
          pngSrcMobile={pngSrcMobile}
          alt={altText}
          className={imageClassName} // Pass the original className here
          loading="lazy"
        />
        {imgCredit && <p className="text-fg-secondary text-sm">{imgCredit}</p>}
      </div>
    </div>
  );
}

export const EducationSection = memo(function EducationSection() {
  return (
    <Section id={SECTION_IDS.EDUCATION} sectionName={EDUCATION_HEADER}>
      <School
        name={TJHSST_HEADER}
        description={TJHSST_DESCRIPTION}
        webpSrcDesktop={tjhsstDesktopWebp}
        webpSrcMobile={tjhsstMobileWebp}
        pngSrcDesktop={tjhsstDesktopPng}
        pngSrcMobile={tjhsstMobilePng}
        altText={TJHSST_IMG_ALT}
        imgCredit={TJHSST_IMG_CREDIT}
        imageClassName="h-full img-large" // Pass the original classes
      />
    </Section>
  );
});

// import {
//   SECTION_IDS,
//   EDUCATION_HEADER,
//   TJHSST_HEADER,
//   TJHSST_DESCRIPTION,
//   TJHSST_IMG_ALT,
//   TJHSST_IMG_CREDIT,
// } from './textConstants.ts';
// import tjhsstImage from './assets/img-og/tjhsst.png';
// import { Section } from './Section.tsx';
// import { BulletList } from './BulletList.tsx';
// import { memo } from 'react';
//
// interface SchoolProps {
//   name: string;
//   description: string[];
//   src: string;
//   alt: string;
//   imgCredit?: string;
// }
//
// function School({ name, description, src, alt, imgCredit }: SchoolProps) {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10">
//       <div className="flex flex-col gap-4">
//         <h2 className="text-fg-secondary text-xl font-bold">{name}</h2>
//         <BulletList className="text-fg-secondary" content={description} />
//       </div>
//       <div className="flex flex-col gap-2">
//         <img
//           src={src}
//           alt={alt}
//           className="h-full img-large"
//         />
//         {imgCredit && (
//           <p className="text-fg-secondary text-sm">{imgCredit}</p>
//         )}
//       </div>
//     </div>
//   );
// }
//
// export const EducationSection = memo(function EducationSection() {
//   return (
//     <Section id={SECTION_IDS.EDUCATION} sectionName={EDUCATION_HEADER}>
//       <School
//         name={TJHSST_HEADER}
//         description={TJHSST_DESCRIPTION}
//         src={tjhsstImage}
//         alt={TJHSST_IMG_ALT}
//         imgCredit={TJHSST_IMG_CREDIT}
//       />
//     </Section>
//   );
// });
