import { mdBreakpoint } from './viewportDetection.ts';

interface OptimizedPictureProps {
  alt: string;
  pngSrcDesktop: string;
  pngSrcMobile: string;
  webpSrcMobile: string;
  webpSrcDesktop: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function OptimizedPicture({
  alt,
  pngSrcDesktop,
  pngSrcMobile,
  webpSrcMobile,
  webpSrcDesktop,
  className,
  loading,
}: OptimizedPictureProps) {
  return (
    <picture>
      {/* Mobile Sources (Order: WebP first, then PNG) */}
      <source
        media={`(max-width: ${mdBreakpoint})`}
        srcSet={webpSrcMobile}
        type="image/webp"
      />
      <source
        media={`(max-width: ${mdBreakpoint})`}
        srcSet={pngSrcMobile}
        type="image/png"
      />

      {/* Desktop Sources (Order: WebP first, then PNG) */}
      <source
        media={`(min-width: ${mdBreakpoint})`}
        srcSet={webpSrcDesktop}
        type="image/webp"
      />
      <source
        media={`(min-width: ${mdBreakpoint})`}
        srcSet={pngSrcDesktop}
        type="image/png"
      />

      <img
        src={pngSrcDesktop} // Fallback to the desktop PNG
        alt={alt}
        className={className}
        loading={loading ?? 'lazy'} // Default to lazy loading
      />
    </picture>
  );
}
