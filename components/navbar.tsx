import { ModeToggle } from "@/components/theme-toggle";
import { FaGithub,FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

export const NAVLINKS = [
  {
    title: "The Wiki",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Detailed Guides",
    href: `/guide`,
  },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-14 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <ModeToggle />
              <div className="w-px h-6 bg-stone-300 dark:bg-stone-700 mx-2 mt-1.5" aria-hidden="true" />
              <Link
                target="_blank"
                href="https://discord.gg/j3XamDgjnM"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                aria-label="Join us on Discord"
              >
                <FaDiscord className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/ctrlcat0x/peanutfoundry"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <FaGithub className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 ">
      <Image src="/anya_stare.png" alt="Anya Forger Peanut Foundry Logo" className="pixelRender" width={24} height={24} />
      <h2 className="text-md font-bold">Peanut Foundry</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-base text-[14.5px] dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
