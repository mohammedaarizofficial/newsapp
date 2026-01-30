export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
  url: string;
  category: string;
}

export const mockTopHeadlines: NewsArticle[] = [
  {
    id: "1",
    title: "Global Tech Summit Unveils Revolutionary AI Breakthroughs",
    description: "World leaders in technology gathered to showcase groundbreaking artificial intelligence innovations that promise to reshape industries from healthcare to transportation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    source: "Tech Today",
    date: "2 hours ago",
    url: "#",
    category: "Technology",
  },
  {
    id: "2",
    title: "Markets Rally as Central Banks Signal Policy Shift",
    description: "Stock markets worldwide experienced significant gains following coordinated announcements from major central banks indicating a potential pause in interest rate hikes.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    source: "Financial Times",
    date: "4 hours ago",
    url: "#",
    category: "Business",
  },
  {
    id: "3",
    title: "Breakthrough Treatment Shows Promise for Rare Disease",
    description: "Clinical trials reveal a new gene therapy approach that could potentially cure a previously untreatable genetic condition affecting thousands worldwide.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    source: "Health Journal",
    date: "5 hours ago",
    url: "#",
    category: "Health",
  },
  {
    id: "4",
    title: "Award-Winning Film Takes Cinema by Storm",
    description: "The critically acclaimed drama has broken box office records while sparking important conversations about social issues and artistic expression.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    source: "Entertainment Weekly",
    date: "6 hours ago",
    url: "#",
    category: "Entertainment",
  },
  {
    id: "5",
    title: "Scientists Discover New Species in Deep Ocean Expedition",
    description: "Marine biologists have identified several previously unknown species during a groundbreaking exploration of the deepest parts of the Pacific Ocean.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    source: "Science Daily",
    date: "8 hours ago",
    url: "#",
    category: "Science",
  },
  {
    id: "6",
    title: "Historic Championship Match Breaks Viewership Records",
    description: "The thrilling final attracted the largest global television audience in sports history, with an estimated 1.5 billion viewers tuning in.",
    image: "https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4",
    source: "Sports Network",
    date: "10 hours ago",
    url: "#",
    category: "Sports",
  },
  {
    id: "7",
    title: "Renewable Energy Investment Reaches All-Time High",
    description: "Global investment in clean energy technologies has surpassed fossil fuels for the first time, signaling a major shift in the energy landscape.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    source: "Green Energy Report",
    date: "12 hours ago",
    url: "#",
    category: "Business",
  },
  {
    id: "8",
    title: "Streaming Platform Announces Ambitious Content Plans",
    description: "The entertainment giant revealed a slate of over 100 new original productions spanning multiple genres and featuring A-list talent.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    source: "Media Insider",
    date: "14 hours ago",
    url: "#",
    category: "Entertainment",
  },
];

export const mockEverythingNews: NewsArticle[] = [
  ...mockTopHeadlines,
  {
    id: "9",
    title: "Space Agency Reveals Plans for Mars Mission",
    description: "Ambitious timeline outlined for first crewed mission to the red planet, with international collaboration at the forefront of the initiative.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    source: "Space Explorer",
    date: "1 day ago",
    url: "#",
    category: "Science",
  },
  {
    id: "10",
    title: "Electric Vehicle Adoption Accelerates Globally",
    description: "New data shows EV sales have doubled year-over-year as infrastructure improvements and competitive pricing drive consumer interest.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    source: "Auto Review",
    date: "1 day ago",
    url: "#",
    category: "Technology",
  },
  {
    id: "11",
    title: "Major Art Exhibition Opens to Record Crowds",
    description: "The retrospective featuring works spanning five decades has become the most visited exhibition in the museum's history.",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    source: "Arts & Culture",
    date: "2 days ago",
    url: "#",
    category: "Entertainment",
  },
  {
    id: "12",
    title: "Mental Health Awareness Campaign Gains Momentum",
    description: "Grassroots movement spreads globally as communities come together to reduce stigma and improve access to mental health resources.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
    source: "Wellness Today",
    date: "2 days ago",
    url: "#",
    category: "Health",
  },
];