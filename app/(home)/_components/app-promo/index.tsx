import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import appPreview from "./assets/app-preview.png";
import appStore from "./assets/app-store.svg";
import googlePlay from "./assets/google-play.svg";

const STORES = [
  { src: appStore, alt: "App Store" },
  { src: googlePlay, alt: "Google Play" },
];

/** Copy left, phone photo bleeding off the right edge. Staggered fade-up. */
export function AppPromo() {
  return (
    <section className="flex w-full max-w-[500px] flex-col items-center justify-between px-5 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:flex-row lg:px-16">
      <div className="flex w-full flex-col items-start gap-9 py-10 lg:w-[551px] lg:py-0">
        <div className="flex flex-col gap-2.5">
          <Reveal variant="up" distance={60} as="h2">
            <span className="block text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
              BizvoraOne on the Go
            </span>
          </Reveal>
          <Reveal variant="up" distance={30} delay={100}>
            <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
              BizvoraOne ships a secure mobile REST API (JWT-authenticated),
              <br className="hidden lg:block" /> with mobile apps built on top of
              it, for your team on the move.
            </p>
          </Reveal>
        </div>
        <Reveal variant="up" distance={30} delay={200}>
          <div className="flex items-start gap-2.5">
            {STORES.map((store) => (
              <Link key={store.alt} href="#" className="shrink-0">
                <Image
                  src={store.src}
                  alt={store.alt}
                  width={120}
                  height={40}
                  className="h-10 w-[120px]"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none w-full shrink-0 lg:w-[521px]">
        <Image
          src={appPreview}
          alt="BizvoraOne mobile app preview"
          width={1024}
          height={1024}
          className="h-[352px] w-full object-cover object-top lg:h-[493px] lg:object-contain"
        />
      </div>
    </section>
  );
}
