import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Built by{" "}
            <Link
              target="_blank"
              className="px-1 underline underline-offset-2"
              href="https://ctrlcat0x.github.io"
            >
              ctrlcat0x
            </Link>
            . The source code is available on{" "}
            <Link
              target="_blank"
              className="px-1 underline underline-offset-2"
              href="https://github.com/ctrlcat0x/peanutfoundry"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        target="_blank"
        href="https://github.com/sponsors/iam-sahil"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
