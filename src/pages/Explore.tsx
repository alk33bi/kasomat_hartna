import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { City, CategoryId, OfferType } from "@/types";
import { categories } from "@/data/categories";
import { businesses, offers, getBusinessesForOffer, getDaysRemaining } from "@/data/mockData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationSelector from "@/components/LocationSelector";
import DealCard from "@/components/DealCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X, MapIcon, List, Sparkles } from "lucide-react";

type SortOption = "newest" | "ending-soon" | "highest-discount";

export default function Explore() {
  const [searchParams] = useSearchParams();
  const initialCity = (searchParams.get("city") as City) || "";
  const initialCategory = (searchParams.get("category") as CategoryId) || "";

  const [city, setCity] = useState<City | "">(initialCity);
  const [area, setArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "">(initialCategory);
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const [offerTypeFilter, setOfferTypeFilter] = useState<OfferType | "">("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filteredOffers = useMemo(() => {
    let result = offers.filter((o) => o.isActive && getDaysRemaining(o.endDate) > 0);

    result = result.filter((o) => {
      const biz = getBusinessesForOffer(o);
      if (!biz) return false;
      if (city && biz.city !== city) return false;
      if (area && area !== "all" && biz.area !== area) return false;
      if (selectedCategory && biz.category !== selectedCategory) return false;
      if (offerTypeFilter && o.type !== offerTypeFilter) return false;
      if (keyword) {
        const q = keyword.toLowerCase();
        return (
          o.title.toLowerCase().includes(q) ||
          o.description.toLowerCase().includes(q) ||
          biz.name.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (sort === "ending-soon") {
      result.sort((a, b) => getDaysRemaining(a.endDate) - getDaysRemaining(b.endDate));
    } else if (sort === "newest") {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [city, area, selectedCategory, keyword, sort, offerTypeFilter]);

  const clearFilters = () => {
    setCity("");
    setArea("");
    setSelectedCategory("");
    setKeyword("");
    setOfferTypeFilter("");
    setSort("newest");
  };

  const hasFilters = city || area || selectedCategory || keyword || offerTypeFilter;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page header with gradient */}
      <div className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute inset-0 bg-mesh-pattern opacity-40" />
        <div className="absolute top-0 end-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 start-0 w-48 h-48 bg-accent/8 rounded-full blur-3xl translate-y-1/2" />
        
        <div className="container relative py-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h1 className="text-2xl md:text-3xl font-extrabold">تصفح العروض</h1>
          </div>
          <p className="text-muted-foreground">اكتشف أفضل الخصومات والعروض القريبة منك</p>
        </div>
      </div>

      <div className="relative flex-1">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-vivid" />
        
        <div className="container relative py-6">
          {/* شريط البحث */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ابحث عن عروض أو محلات..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="ps-10 bg-card/80 backdrop-blur-sm"
              />
            </div>
            <LocationSelector
              selectedCity={city}
              selectedArea={area}
              onCityChange={setCity}
              onAreaChange={setArea}
              compact
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
                className={showFilters ? "bg-primary text-primary-foreground" : "bg-card/80 backdrop-blur-sm"}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode(viewMode === "list" ? "map" : "list")}
                className="bg-card/80 backdrop-blur-sm"
              >
                {viewMode === "list" ? <MapIcon className="h-4 w-4" /> : <List className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* شريط الفلاتر */}
          {showFilters && (
            <div className="mb-6 p-4 bg-card/60 backdrop-blur-sm rounded-xl space-y-4 animate-fade-in-up border border-border/50">
              <div className="flex flex-wrap gap-3">
                <Select value={offerTypeFilter} onValueChange={(v) => setOfferTypeFilter(v as OfferType | "")}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="نوع العرض" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأنواع</SelectItem>
                    <SelectItem value="percentage">خصم نسبة ٪</SelectItem>
                    <SelectItem value="bogo">اشترِ واحصل</SelectItem>
                    <SelectItem value="free-delivery">توصيل مجاني</SelectItem>
                    <SelectItem value="bundle">باقة</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="ترتيب حسب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">الأحدث</SelectItem>
                    <SelectItem value="ending-soon">ينتهي قريباً</SelectItem>
                    <SelectItem value="highest-discount">أعلى خصم</SelectItem>
                  </SelectContent>
                </Select>

                {hasFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
                    <X className="h-3 w-3" /> مسح الكل
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* أزرار الفئات */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            <Button
              variant={selectedCategory === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("")}
              className={selectedCategory === "" ? "shadow-md shadow-primary/20" : "bg-card/80"}
            >
              الكل
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? "" : cat.id)}
                className={`whitespace-nowrap ${selectedCategory === cat.id ? "shadow-md shadow-primary/20" : "bg-card/80"}`}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* الفلاتر النشطة */}
          {hasFilters && (
            <div className="flex flex-wrap gap-2 mb-4">
              {city && (
                <Badge variant="secondary" className="gap-1 bg-primary/10 text-primary border border-primary/20">
                  {city} <X className="h-3 w-3 cursor-pointer" onClick={() => { setCity(""); setArea(""); }} />
                </Badge>
              )}
              {area && area !== "all" && (
                <Badge variant="secondary" className="gap-1 bg-accent/10 text-accent border border-accent/20">
                  {area} <X className="h-3 w-3 cursor-pointer" onClick={() => setArea("")} />
                </Badge>
              )}
              {selectedCategory && (
                <Badge variant="secondary" className="gap-1 bg-burgundy/10 text-burgundy border border-burgundy/20">
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("")} />
                </Badge>
              )}
            </div>
          )}

          {/* النتائج */}
          <p className="text-sm text-muted-foreground mb-4">
            {filteredOffers.length} عرض
          </p>

          {viewMode === "list" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredOffers.map((offer, i) => {
                const biz = getBusinessesForOffer(offer);
                if (!biz) return null;
                return <DealCard key={offer.id} offer={offer} business={biz} index={i} />;
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card/60 backdrop-blur-sm h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p className="font-semibold">عرض الخريطة</p>
                <p className="text-sm">قريباً — سيتم ربط خرائط Google أو Mapbox هنا.</p>
              </div>
            </div>
          )}

          {filteredOffers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg font-semibold text-muted-foreground">لا توجد عروض</p>
              <p className="text-sm text-muted-foreground mt-1">جرب تعديل الفلاتر أو كلمات البحث</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>مسح الفلاتر</Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
