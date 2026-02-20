import { useState,useEffect } from "react";
import Navbar from "@/components/Navbar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SortDropdown } from "@/components/SortDropDown";
import Topheadlines from "./pages/Topheadlines";
import Everything from "./pages/Everything";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Flame, Globe,Search } from "lucide-react";
import Footer from '@/components/Footer'


const App = () => {
  const [activeTab, setActiveTab] =useState<"headlines" | "everything">("everything");
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [sortBy, setSortBy] = useState("publishedAt");
  const[searchQuery, setSearchQuery] = useState<string>('');
  const [input, setInput] = useState('');
  const [page, setPage]=useState<number>(1);
  const [totalPages, setTotalPages]=useState<number>(1);


  useEffect(()=>{
    setPage(1);
  },[activeTab, selectedCategory, sortBy, searchQuery])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex-1 flex flex-col">
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
                <>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search topics..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e)=>{
                        if(e.key==='Enter'){
                          console.log('The enter key is being pressed');
                          console.log('the input is ', input);
                          setSearchQuery(input);
                        }
                      }}
                      className="w-48 pl-9 sm:w-64"
                    />
                  </div>
                  <SortDropdown
                    selected={sortBy}
                    onSelect={setSortBy}
                  />
                </>
              )}
            </div>
          </div>

          {/* 🔥 PAGES ARE MOUNTED HERE */}
          <TabsContent value="headlines">
            <Topheadlines filterby={selectedCategory} page={page} setTotalPages={setTotalPages} />
          </TabsContent>

          <TabsContent value="everything">
            <Everything sortby={sortBy} search={searchQuery} page={page} setTotalPages={setTotalPages} />
          </TabsContent>
        </Tabs>
        
      </main>
      <div className="container mx-auto px-4">
      <div className="flex justify-center border-t border-white/10 px-4 py-3">
          <div className="inline-flex items-center gap-4 rounded-md">
            <div>
              <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
                <button  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0"
                onClick={()=>setPage(prev=>prev-1)}
                disabled={page==1} disabled:opacity-40 disabled:cursor-not-allowed>
                  <span className="sr-only">Previous</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                    <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </button>
                <h5  aria-current="page" className="relative z-10 inline-flex items-center  bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{page} out of {totalPages}</h5>
                <button  
                onClick={()=>setPage(prev=>prev+1)}
                disabled={page>=totalPages}
                disabled:opacity-40
                disabled:cursor-not-allowed
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                    <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
        </div>

      <Footer />
    </div>
  );
};

export default App;
