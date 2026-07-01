import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <Search className="h-4 w-4 text-primary" />
            <span>41+ open positions available</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find your dream job today
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Search through curated opportunities from leading tech companies.
            Filter by location, job type, and skills to find the perfect match.
          </p>
        </div>
      </div>
    </section>
  );
}
