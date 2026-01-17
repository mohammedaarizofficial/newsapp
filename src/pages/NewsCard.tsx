import { Calendar, ExternalLink } from "lucide-react";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
  url: string;
  category?: string;
  featured?: boolean;
}

export const NewsCard = ({
  title,
  description,
  image,
  source,
  date,
  url,
  category,
  featured = false,
}: NewsCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-lg bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-48"}`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {category}
          </span>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className={`font-display font-semibold leading-tight text-primary-foreground ${
              featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-medium text-foreground">{source}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
          </div>
          <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </a>
  );
};