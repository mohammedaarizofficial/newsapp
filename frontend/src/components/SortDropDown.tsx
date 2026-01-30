import { ArrowUpDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const sortOptions = [
  { value: "publishedAt", label: "Latest" },
  { value: "relevancy", label: "Relevancy" },
  { value: "popularity", label: "Popularity" },
];

interface SortDropdownProps {
  selected: string;
  onSelect: (sort: string) => void;
}

export const SortDropdown = ({ selected, onSelect }: SortDropdownProps) => {
  const selectedLabel = sortOptions.find((s) => s.value === selected)?.label || "Latest";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ArrowUpDown className="h-4 w-4" />
          <span className="hidden sm:inline">Sort: {selectedLabel}</span>
          <span className="sm:hidden">Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="flex items-center justify-between"
          >
            {option.label}
            {selected === option.value && (
              <Check className="h-4 w-4 text-accent" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

