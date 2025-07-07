"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DialogAlert } from "@/components/ui/dialog";

export default function NsfwGate({ children }: { children: React.ReactNode }) {
  const [confirmed, setConfirmed] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const conf = localStorage.getItem("nsfwConfirmed");
    if (conf === "true") setConfirmed(true);
    else if (conf === "false") router.push("/");
    else setConfirmed(false);
  }, [router]);

  if (confirmed === false) {
    return (
      <DialogAlert open={true} title="NSFW Content Warning" description="This page contains content intended for adults (18+). Are you of legal age?">
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="px-6 py-2 rounded bg-green-600 text-white font-semibold focus:outline-none"
            onClick={() => {
              localStorage.setItem("nsfwConfirmed", "true");
              setConfirmed(true);
            }}
            aria-label="Yes, I am 18 or older"
          >
            Yes, I am 18+
          </button>
          <button
            className="px-6 py-2 rounded bg-red-600 text-white font-semibold focus:outline-none"
            onClick={() => {
              router.push("/");
            }}
            aria-label="No, take me back"
          >
            No, take me back
          </button>
        </div>
      </DialogAlert>
    );
  }
  if (confirmed === null) {
    return null; // loading
  }
  return <>{children}</>;
} 