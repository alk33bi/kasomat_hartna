import { Category } from "@/types";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function CategoryCard({ category, onClick, isSelected }: CategoryCardProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[category.icon] || Icons.Tag;

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-end rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 aspect-[3/4] w-full glow-border glow-shadow ${
        isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/25" : ""
      }`}
    >
      {/* صورة الخلفية */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* التدرج المظلم */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isSelected
          ? "bg-primary/70"
          : "bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-primary/80 group-hover:via-primary/40 group-hover:to-transparent"
      }`} />

      {/* الأيقونة والاسم */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 pb-3 px-1">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/20">
          <IconComponent className="h-4 w-4 text-white drop-shadow" />
        </div>
        <span className="text-xs font-bold text-white text-center leading-tight drop-shadow-md">
          {category.name}
        </span>
      </div>
    </button>
  );
}
