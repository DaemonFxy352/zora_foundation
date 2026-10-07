import Image from "next/image";
import hero from "@/public/images/hero.webp";
import programs from "@/public/images/community-workshop.webp";
import research from "@/public/images/research.webp";

// Replace these local files (or imports) and update the alt text / object position here.
const images = {
  hero: {
    src: hero,
    alt: "An older woman and a younger man exploring a smartphone together at a table.",
    position: "50% 46%",
  },
  programs: {
    src: programs,
    alt: "Adults practicing smartphone skills together during a community classroom workshop.",
    position: "50% 50%",
  },
  research: {
    src: research,
    alt: "A group reviewing research findings, charts, and educational materials around a table.",
    position: "50% 50%",
  },
};
export function HomeImage({ name }: { name: keyof typeof images }) {
  const { src, alt, position } = images[name];
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={
        name === "hero"
          ? "(max-width: 767px) 92vw, (max-width: 1279px) 43vw, 520px"
          : "(max-width: 999px) 92vw, (max-width: 1279px) 45vw, 560px"
      }
      style={{ objectFit: "cover", objectPosition: position }}
      preload={name === "hero"}
      placeholder="blur"
    />
  );
}
