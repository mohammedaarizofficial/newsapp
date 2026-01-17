import { Newspaper } from "lucide-react";

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Newspaper className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight">
              The Daily<span className="text-accent">.</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              News Reimagined
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-muted-foreground sm:block">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </header>
  );
};

