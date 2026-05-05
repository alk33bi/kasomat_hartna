import { City } from "@/types";
import { cities, cityNamesAr, getAreasByCity } from "@/data/locations";
import { MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LocationSelectorProps {
  selectedCity: City | "";
  selectedArea: string;
  onCityChange: (city: City | "") => void;
  onAreaChange: (area: string) => void;
  compact?: boolean;
}

export default function LocationSelector({
  selectedCity,
  selectedArea,
  onCityChange,
  onAreaChange,
  compact = false,
}: LocationSelectorProps) {
  const cityAreas = selectedCity ? getAreasByCity(selectedCity) : [];

  return (
    <div className={`flex ${compact ? "gap-2" : "gap-3"} items-center`}>
      <div className="flex items-center gap-2 text-primary">
        <MapPin className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </div>
      <Select value={selectedCity} onValueChange={(v) => { onCityChange(v as City | ""); onAreaChange(""); }}>
        <SelectTrigger className={compact ? "w-[130px]" : "w-[160px]"}>
          <SelectValue placeholder="اختر المدينة" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">جميع المدن</SelectItem>
          {cities.map((c) => (
            <SelectItem key={c} value={c}>{cityNamesAr[c]}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedCity && cityAreas.length > 0 && (
        <Select value={selectedArea} onValueChange={onAreaChange}>
          <SelectTrigger className={compact ? "w-[140px]" : "w-[180px]"}>
            <SelectValue placeholder="اختر المنطقة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المناطق</SelectItem>
            {cityAreas.map((a) => (
              <SelectItem key={a.id} value={a.name}>{a.nameAr}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
