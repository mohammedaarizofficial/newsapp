export default function Footer(){
    return(
        <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-lg font-semibold">
            The Daily<span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. News reimagined.
          </p>
        </div>
      </footer>

    )
}