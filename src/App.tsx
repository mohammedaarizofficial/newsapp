import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SortDropdown } from "@/components/SortDropDown";
import { NewsGrid } from "./pages/NewsGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockTopHeadlines, mockEverythingNews } from "@/data/mockNews";
import { Flame, Globe } from "lucide-react";
import { shuffle } from "./js/shuffle";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [activeTab, setActiveTab] = useState("headlines");

  // ✅ PURE memo (no side effects)
  const sortedEverything = useMemo(() => {
    const result = [...mockEverythingNews];

    if (sortBy === "relevancy") {
      return shuffle(result);
    }

    if (sortBy === "popularity") {
      return result.reverse();
    }

    return result;
  }, [sortBy]);

  // ✅ PURE memo
  const filteredHeadlines = useMemo(() => {
    if (selectedCategory === "all") return mockTopHeadlines;

    return mockTopHeadlines.filter(
      (article) => article.category.toLowerCase() === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stay Informed<span className="text-accent">.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Curated news from around the world, delivered beautifully.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="headlines" className="gap-2">
                <Flame className="h-4 w-4" />
                Top Headlines
              </TabsTrigger>
              <TabsTrigger value="everything" className="gap-2">
                <Globe className="h-4 w-4" />
                Everything
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              {activeTab === "headlines" && (
                <CategoryFilter
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                />
              )}
              {activeTab === "everything" && (
                <SortDropdown
                  selected={sortBy}
                  onSelect={setSortBy}
                />
              )}
            </div>
          </div>

          <TabsContent value="headlines" className="mt-0">
            <NewsGrid articles={filteredHeadlines} />
          </TabsContent>

          <TabsContent value="everything" className="mt-0">
            <NewsGrid articles={sortedEverything} />
          </TabsContent>
        </Tabs>
      </main>

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
    </div>
  );
};

export default App;
