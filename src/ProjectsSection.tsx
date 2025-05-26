import { memo } from 'react';
import {
  SECTION_IDS,
  PROJECTS_HEADER,
  PROJECT_DAISY_TITLE,
  PROJECT_DAISY_DESCRIPTION,
  PROJECT_DAISY_IMG_ALT,
  PROJECT_DAISY_LINK,
  PROJECT_SAY2SEE_TITLE,
  PROJECT_SAY2SEE_DESCRIPTION,
  PROJECT_SAY2SEE_IMG_ALT,
  PROJECT_SAY2SEE_LINK,
} from './textConstants.ts';
import { Section } from './Section.tsx';
import { Link } from './Link.tsx';
import { OptimizedPicture } from './OptimizedPicture.tsx';

// Import Optimized WebP images
import projectDaisyDesktopWebp from './assets/img-optimized/project_daisy.desktop.webp';
import projectDaisyMobileWebp from './assets/img-optimized/project_daisy.mobile.webp';
import say2SeeDesktopWebp from './assets/img-optimized/Say2See.desktop.webp';
import say2SeeMobileWebp from './assets/img-optimized/Say2See.mobile.webp';

// Import Optimized PNG images
import projectDaisyDesktopPng from './assets/img-optimized/project_daisy.desktop.png';
import projectDaisyMobilePng from './assets/img-optimized/project_daisy.mobile.png';
import say2SeeDesktopPng from './assets/img-optimized/Say2See.desktop.png';
import say2SeeMobilePng from './assets/img-optimized/Say2See.mobile.png';

interface ProjectProps {
  name: string;
  description: string;
  // image: string; // Replaced by specific sources
  // imageAlt: string; // Already part of OptimizedPictureProps
  href: string;
  // Props for OptimizedPicture
  webpSrcDesktop: string;
  webpSrcMobile: string;
  pngSrcDesktop: string;
  pngSrcMobile: string;
  altText: string; // Renamed to avoid conflict
  imageClassName?: string; // To pass existing classNames
}

function Project({
  name,
  description,
  href,
  webpSrcDesktop,
  webpSrcMobile,
  pngSrcDesktop,
  pngSrcMobile,
  altText,
  imageClassName,
}: ProjectProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-end transition-transform duration-300 hover:scale-104">
        <OptimizedPicture
          webpSrcDesktop={webpSrcDesktop}
          webpSrcMobile={webpSrcMobile}
          pngSrcDesktop={pngSrcDesktop}
          pngSrcMobile={pngSrcMobile}
          alt={altText}
          className={imageClassName} // Pass the original className here
          loading="lazy"
        />
        <h2 className="text-right font-bold text-xl mt-5">{name}</h2>
        <p className="text-right text-fg-secondary mt-2 text-lg w-full lg:w-[70%]">
          {description}
        </p>
      </div>
    </Link>
  );
}

export const ProjectsSection = memo(function ProjectsSection() {
  return (
    <Section id={SECTION_IDS.PROJECTS} sectionName={PROJECTS_HEADER}>
      <div className="flex flex-col gap-12">
        <Project
          name={PROJECT_DAISY_TITLE}
          description={PROJECT_DAISY_DESCRIPTION}
          webpSrcDesktop={projectDaisyDesktopWebp}
          webpSrcMobile={projectDaisyMobileWebp}
          pngSrcDesktop={projectDaisyDesktopPng}
          pngSrcMobile={projectDaisyMobilePng}
          altText={PROJECT_DAISY_IMG_ALT}
          href={PROJECT_DAISY_LINK}
          imageClassName="img-large" // Pass the original class
        />
        <Project
          name={PROJECT_SAY2SEE_TITLE}
          description={PROJECT_SAY2SEE_DESCRIPTION}
          webpSrcDesktop={say2SeeDesktopWebp}
          webpSrcMobile={say2SeeMobileWebp}
          pngSrcDesktop={say2SeeDesktopPng}
          pngSrcMobile={say2SeeMobilePng}
          altText={PROJECT_SAY2SEE_IMG_ALT}
          href={PROJECT_SAY2SEE_LINK}
          imageClassName="img-large" // Pass the original class
        />
      </div>
    </Section>
  );
});

// import projectDaisyImg from './assets/img-og/project_daisy.png';
// import Say2SeeImg from './assets/img-og/Say2See.png';
// import {
//   SECTION_IDS,
//   PROJECTS_HEADER,
//   PROJECT_DAISY_TITLE,
//   PROJECT_DAISY_DESCRIPTION,
//   PROJECT_DAISY_IMG_ALT,
//   PROJECT_DAISY_LINK,
//   PROJECT_SAY2SEE_TITLE,
//   PROJECT_SAY2SEE_DESCRIPTION,
//   PROJECT_SAY2SEE_IMG_ALT,
//   PROJECT_SAY2SEE_LINK,
// } from './textConstants.ts';
// import { Section } from './Section.tsx';
// import { Link } from './Link.tsx';
// import { memo } from 'react';
//
// interface ProjectProps {
//   name: string;
//   description: string;
//   image: string;
//   imageAlt: string;
//   href: string;
// }
//
// function Project({ name, description, image, imageAlt, href }: ProjectProps) {
//   return (
//     <Link href={href}>
//       <div className="flex flex-col items-end transition-transform duration-300 hover:scale-104">
//         <img src={image} alt={imageAlt} className="img-large" />
//         <h2 className="text-right font-bold text-xl mt-5">{name}</h2>
//         <p className="text-right text-fg-secondary mt-2 text-lg w-full lg:w-[70%]">
//           {description}
//         </p>
//       </div>
//     </Link>
//   );
// }
//
// export const ProjectsSection = memo(function ProjectsSection() {
//   return (
//     <Section id={SECTION_IDS.PROJECTS} sectionName={PROJECTS_HEADER}>
//       <div className="flex flex-col gap-12">
//         <Project
//           name={PROJECT_DAISY_TITLE}
//           description={PROJECT_DAISY_DESCRIPTION}
//           image={projectDaisyImg}
//           imageAlt={PROJECT_DAISY_IMG_ALT}
//           href={PROJECT_DAISY_LINK}
//         />
//         <Project
//           name={PROJECT_SAY2SEE_TITLE}
//           description={PROJECT_SAY2SEE_DESCRIPTION}
//           image={Say2SeeImg}
//           imageAlt={PROJECT_SAY2SEE_IMG_ALT}
//           href={PROJECT_SAY2SEE_LINK}
//         />
//       </div>
//     </Section>
//   );
// });
