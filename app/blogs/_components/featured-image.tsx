import Image from "next/image";
import { Mark } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * A post's featured image, or a branded tile when WP has none. The caller
 * sets the aspect ratio and radius via className; the image fills it.
 * Directive-free so both the server pages and the client grid can render it.
 */
export function FeaturedImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  imageClassName,
}: {
  src: string | null;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-tile", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]"
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_75%_85%_at_50%_0%,black,transparent)]" />
          <span className="relative flex size-14 items-center justify-center rounded-[16px] bg-white/10 ring-1 ring-white/15">
            <Mark name="doc" className="size-7 text-white" />
          </span>
        </div>
      )}
    </div>
  );
}
