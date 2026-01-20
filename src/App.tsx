import { useState } from "react";
import Navbar from "@/components/Navbar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SortDropdown } from "@/components/SortDropDown";
import Topheadlines from "./pages/Topheadlines";
import Everything from "./pages/Everything";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Globe } from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] =
  useState<"headlines" | "everything">("headlines");

  const [selectedCategory, setSelectedCategory] = useState("general");
  const [sortBy, setSortBy] = useState("publishedAt");
  // const[query, setQuery] = useState<string>('bitcoin')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* HERO */}
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stay Informed<span className="text-accent">.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Curated news from around the world, delivered beautifully.
          </p>
        </div>

        <Tabs
  value={activeTab}
  onValueChange={(value) =>
    setActiveTab(value as "headlines" | "everything")
  }
>
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

            {/* Controls */}
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

          {/* 🔥 PAGES ARE MOUNTED HERE */}
          <TabsContent value="headlines">
            <Topheadlines filterby={selectedCategory} />
          </TabsContent>

          <TabsContent value="everything">
            <Everything sortby={sortBy} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default App;
