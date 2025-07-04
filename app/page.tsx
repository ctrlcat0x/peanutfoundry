import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Book, Shield, Brain, Cloud, Headphones, Gamepad2, Download, Folder, Music, Film, Globe, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        Peanut Foundry
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        Wiki for everything.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
        <SectionBox icon={<Shield />} title="Adblocking / Privacy" desc="Learn how to block ads, trackers and other nasty things." />
        <SectionBox icon={<Brain />} title="Artificial Intelligence" desc="Explore the world of AI and machine learning." />
        <SectionBox icon={<Film />} title="Streaming" desc="Stream, download, torrent and binge all your favourite movies and shows!" />
        <SectionBox icon={<Headphones />} title="Listening" desc="Stream, download and torrent songs, podcasts and more!" />
        <SectionBox icon={<Gamepad2 />} title="Gaming" desc="Download and play all your favourite games or emulate some old but gold ones!" />
        <SectionBox icon={<Book />} title="Reading" desc="Find your favourite pieces of literature here for free!" />
        <SectionBox icon={<Download />} title="Downloading" desc="Download all your favourite software, movies, TV shows, music, games and more!" />
        <SectionBox icon={<Folder />} title="Torrenting" desc="Download your favourite media using the BitTorrent protocol." />
        <SectionBox icon={<Music />} title="Music" desc="All about music, streaming, and more." />
        <SectionBox icon={<Globe />} title="Web" desc="Explore the web, browsers, and online tools." />
        <SectionBox icon={<Star />} title="Favorites" desc="Curated favorites and recommendations." />
      </div>
    </div>
  );
}

const SectionBox = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <a
    href="#"
    className="accent-box rounded-xl border transition-colors cursor-pointer p-6 flex flex-col items-start gap-3 focus-visible:outline-none"
    tabIndex={0}
    aria-label={title}
  >
    <div className="w-8 h-8">{icon}</div>
    <div className="font-bold text-lg">{title}</div>
    <div className="text-sm text-muted-foreground">{desc}</div>
  </a>
);
