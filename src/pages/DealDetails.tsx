import { useParams, Link } from "react-router-dom";
import { offers, businesses, getBusinessesForOffer, getOffersByBusiness, getDaysRemaining } from "@/data/mockData";
import { categories } from "@/data/categories";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DealCard from "@/components/DealCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageCircle, Phone, Share2, MapPin, Clock, Calendar,
  ExternalLink, Navigation, ArrowRight, Tag
} from "lucide-react";

const offerTypeLabels: Record<string, string> = {
  percentage: "خصم",
  bogo: "اشترِ واحصل",
  "free-delivery": "توصيل مجاني",
  bundle: "باقة عرض",
};

export default function DealDetails() {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((o) => o.id === id);
  const business = offer ? getBusinessesForOffer(offer) : undefined;

  if (!offer || !business) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">العرض غير موجود</h2>
            <Link to="/explore"><Button>تصفح العروض</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const category = categories.find((c) => c.id === business.category);
  const daysLeft = getDaysRemaining(offer.endDate);
  const similarOffers = offers
    .filter((o) => o.id !== offer.id && o.isActive && getBusinessesForOffer(o)?.city === business.city)
    .slice(0, 4);

  const whatsappUrl = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `مرحباً! أنا مهتم بعرضكم: "${offer.title}"`
  )}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${business.coordinates.lat},${business.coordinates.lng}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${business.name}&ll=${business.coordinates.lat},${business.coordinates.lng}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: offer.title, text: offer.description, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-6 max-w-4xl">
        <Link to="/explore" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowRight className="h-4 w-4" /> العودة للعروض
        </Link>

        {/* صورة المحل */}
        {business.images?.[0] && (
          <div className="rounded-xl overflow-hidden mb-6 h-64 md:h-80">
            <img src={business.images[0]} alt={business.name} className="w-full h-full object-cover" />
          </div>
        )}

        {/* رأس العرض */}
        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-deal">
          <div className="bg-gradient-hero p-6 md:p-10 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                {offerTypeLabels[offer.type]}
              </Badge>
              {category && (
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {category.name}
                </Badge>
              )}
              {daysLeft <= 3 && daysLeft > 0 && (
                <Badge variant="destructive" className="animate-pulse">
                  ينتهي خلال {daysLeft} يوم!
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{offer.title}</h1>
            <p className="text-white/80 text-lg">{offer.description}</p>
            <div className="mt-4 text-4xl font-extrabold text-accent">{offer.discountValue}</div>
          </div>

          <div className="p-6 space-y-6">
            {/* التواريخ */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {offer.startDate} — {offer.endDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {daysLeft > 0 ? `${daysLeft} يوم متبقي` : "انتهى"}
              </span>
            </div>
            {offer.terms && (
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-1">الشروط والأحكام</p>
                <p className="text-sm text-muted-foreground">{offer.terms}</p>
              </div>
            )}

            {/* معلومات المحل */}
            <div className="border-t border-border pt-6">
              <h3 className="font-bold text-lg mb-4">عن المحل</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Tag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{business.name}</p>
                      <p className="text-sm text-muted-foreground">{business.description}</p>
                    </div>
                  </div>
                  <p className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {business.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {business.openingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* أزرار التواصل */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white gap-2" size="lg">
                  <MessageCircle className="h-5 w-5" /> واتساب
                </Button>
              </a>
              <a href={`tel:${business.phone}`} className="flex-1 min-w-[140px]">
                <Button variant="outline" className="w-full gap-2" size="lg">
                  <Phone className="h-5 w-5" /> اتصال
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={handleShare} className="gap-2">
                <Share2 className="h-5 w-5" /> مشاركة
              </Button>
            </div>

            {/* الخرائط */}
            <div className="flex flex-wrap gap-3">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" className="gap-2">
                  <Navigation className="h-4 w-4" /> خرائط Google
                </Button>
              </a>
              <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" /> خرائط Apple
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* عروض مشابهة */}
        {similarOffers.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold mb-6">عروض مشابهة قريبة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {similarOffers.map((o) => {
                const biz = getBusinessesForOffer(o);
                if (!biz) return null;
                return <DealCard key={o.id} offer={o} business={biz} />;
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex-1" />
      <Footer />
    </div>
  );
}
