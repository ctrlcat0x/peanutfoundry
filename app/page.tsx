import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Brain, Headphones, Gamepad2, Sparkles, Star } from "lucide-react";
import Image from "next/image";
const docPath =  "/docs/wiki/";
export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 w-screen h-screen z-0"
      />
      <div className="w-full flex justify-center mb-6 -mt-6 sm:-mt-8">
        <Image
          src="/anya_banner_large.png"
          alt="Anya Forger Peanut Foundry Banner"
          width={800}
          height={220}
          className="rounded-xl object-cover w-auto h-auto"
          priority
        />
      </div>
      <div className="relative flex flex-col items-center w-full">
        <span className="absolute left-[12rem] sm:left-[15rem] top-3 text-accent">
          <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 rotate-[-15deg]" />
        </span>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-accent drop-shadow-lg flex items-center gap-2">
          Peanut Foundry
        </h1>
        <span className="absolute right-60 sm:right-70 top-1 text-accent">
          <Star className="w-7 h-7 sm:w-9 sm:h-9 rotate-[15deg]" />
        </span>
      </div>
      <div className="relative flex flex-col items-center w-full">
        <span className="absolute left-[10rem] sm:left-[12rem] top-2 text-primary">
          <Star className="w-5 h-5 sm:w-7 sm:h-7 rotate-[-10deg]" />
        </span>
        <p className="mb-8 sm:text-xl text-lg max-w-[800px] mt-2 text-accent drop-shadow-sm flex items-center gap-2">
          Your Wiki for everything, with recommendations from Anya.
        </p>
        <span className="absolute right-40 sm:right-60 top-2 text-primary">
          <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 rotate-[10deg]" />
        </span>
      </div>
      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <Link
          href="/docs/getting-started/beginners-guide"
          className={buttonVariants({ variant: "default", size: "lg" }) + " min-w-[140px]"}
          tabIndex={0}
          aria-label="Get Started"
        >
          Get Started
        </Link>
        <Link
          href="/guide"
          className={buttonVariants({ variant: "secondary", size: "lg" }) + " min-w-[140px]"}
          tabIndex={0}
          aria-label="Guides"
        >
          Guides
        </Link>
      </div>
      {/* Browse Text */}
      <div className="mb-2 text-muted-foreground font-medium text-base relative inline-block" style={{lineHeight:1.2}}>
        <span className="relative z-10">or start browsing these pages</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 260 14"
          fill="none"
          className="absolute left-0 -bottom-3 w-full h-4 pointer-events-none z-0"
        >
          <path
            d="M4 10 Q 20 14, 40 10 Q 60 6, 80 12 Q 100 16, 120 10 Q 140 4, 160 12 Q 180 18, 200 10 Q 220 2, 240 10 Q 250 13, 256 8"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mt-4">
        <SectionBox icon={<Shield />} path="adblockingPrivacy" title="Adblocking / Privacy" desc="Block ads, trackers, and protect your privacy everywhere." />
        <SectionBox icon={<Brain />} path="" title="AI & Tools" desc="Explore AI, productivity, and automation tools." />
        <SectionBox icon={<Headphones />} path="" title="Music & Audio" desc="Stream, download, and enjoy music and podcasts." />
        <SectionBox icon={<Gamepad2 />} path="" title="Gaming" desc="Discover, download, and play your favorite games." />
        <SectionBox icon={<Shield />} path="" title="Adblocking / Privacy" desc="Block ads, trackers, and protect your privacy everywhere." />
        <SectionBox icon={<Brain />} path="" title="AI & Tools" desc="Explore AI, productivity, and automation tools." />
        <SectionBox icon={<Headphones />} path="" title="Music & Audio" desc="Stream, download, and enjoy music and podcasts." />
        <SectionBox icon={<Gamepad2 />} path="" title="Gaming" desc="Discover, download, and play your favorite games." />
      </div>
    </div>
  );
}

const SectionBox = ({ icon, path, title, desc }: { icon: React.ReactNode; path: string; title: string; desc: string }) => (
  <a
    href={docPath+path}
    className="accent-box rounded-xl border transition-colors cursor-pointer p-6 flex flex-col items-start gap-2 focus-visible:outline-none text-left"
    tabIndex={0}
    aria-label={title}
  >
    <div className="flex items-center gap-3 w-full">
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg"
        style={{ background: "var(--accent-bg-20)" }}
      >
        <span className="w-7 h-7 flex items-center justify-center">{icon}</span>
      </div>
      <div className="font-bold text-lg whitespace-nowrap">{title}</div>
    </div>
    <div className="text-sm text-muted-foreground mt-2">{desc}</div>
  </a>
);
