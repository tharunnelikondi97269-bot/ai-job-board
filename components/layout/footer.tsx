import { Briefcase, Globe, Mail, Share2 } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Briefcase className="h-4 w-4" />
              </div>
              <span>TalentHub</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Discover your next career opportunity. Browse thousands of jobs
              from top companies worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  All Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/bookmarks"
                  className="hover:text-foreground transition-colors"
                >
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Website"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TalentHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
