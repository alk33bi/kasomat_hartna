import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Offer, Business } from "@/types";
import { getDaysRemaining } from "@/data/mockData";
import { categories } from "@/data/categories";
import { MapPin, Clock, MessageCircle, Tag, Percent, Gift, Truck, Package, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DealCardProps {
  offer: Offer;
  business: Business;
  index?: number;
}

const offerTypeIcons: Record<string, React.ReactNode> = {
  percentage: <Percent className="h-3.5 w-3.5" />,
  bogo: <Gift className="h-3.5 w-3.5" />,
  "free-delivery": <Truck className="h-3.5 w-3.5" />,
  bundle: <Package className="h-3.5 w-3.5" />,
};

const offerTypeLabels: Record<string, string> = {
  percentage: "خصم",
  bogo: "اشترِ ١ واحصل على ١",
  "free-delivery": "توصيل مجاني",
  bundle: "باقة",
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function DealCard({ offer, business, index = 0 }: DealCardProps) {
  const daysLeft = getDaysRemaining(offer.endDate);
  const category = categories.find((c) => c.id === business.category);
  const isUrgent = daysLeft <= 3;
  const businessImage = business.images?.[0];

  const whatsappUrl = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `مرحباً! أنا مهتم بعرضكم: "${offer.title}"`
  )}`;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariant}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative rounded-2xl overflow-hidden glow-border glow-shadow card-glass"
    >
      {/* صورة المحل */}
      {businessImage && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={businessImage}
            alt={business.name}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.1, filter: "brightness(0.65)" }}
            transition={{ duration: 0.7 }}
          />
          
          {/* تدرج سفلي غني */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
          
          {/* قيمة الخصم الكبيرة — تظهر عند التمرير */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 pointer-events-none">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-primary to-emerald-glow backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg shadow-primary/30"
            >
              <span className="text-3xl font-black text-white tracking-tight">
                {offer.discountValue}
              </span>
            </motion.div>
          </div>

          {/* البادجات العلوية */}
          <div className="absolute top-3 start-3 flex gap-1.5">
            <Badge className="text-xs gap-1 bg-white/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
              {offerTypeIcons[offer.type]}
              {offerTypeLabels[offer.type]}
            </Badge>
          </div>
          <div className="absolute top-3 end-3">
            {isUrgent ? (
              <Badge variant="destructive" className="text-xs gap-1 animate-pulse shadow-md shadow-destructive/30">
                <Clock className="h-3 w-3" />
                {daysLeft <= 0 ? "انتهى" : `${daysLeft} يوم`}
              </Badge>
            ) : (
              <Badge className="text-xs gap-1 bg-primary/80 text-white backdrop-blur-sm border-0 shadow-sm">
                <Clock className="h-3 w-3" />
                {daysLeft} يوم
              </Badge>
            )}
          </div>

          {/* اسم المحل فوق الصورة */}
          <div className="absolute bottom-3 start-3 end-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/10">
                <Tag className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate drop-shadow">{business.name}</p>
                <p className="text-[11px] text-white/80 flex items-center gap-1">
                  <MapPin className="h-2.5 w-2.5 shrink-0" />
                  {business.area}، {business.city}
                </p>
              </div>
            </div>
          </div>

          {/* شريط التقدم */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-black/20">
            <motion.div
              className="h-full bg-gradient-to-l from-accent to-primary shadow-[0_0_8px_hsl(var(--glow-primary)/0.5)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(100, Math.max(8, (daysLeft / 30) * 100))}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      {/* المحتوى */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-foreground leading-snug transition-colors duration-300 group-hover:text-primary line-clamp-1">
            {offer.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{offer.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-black bg-gradient-to-r from-primary to-emerald-glow bg-clip-text text-transparent">{offer.discountValue}</span>
          {category && (
            <span className="text-[10px] font-medium text-muted-foreground bg-muted/80 px-2 py-0.5 rounded-full">
              {category.name}
            </span>
          )}
        </div>

        <div className="flex gap-2 pt-1">
          <Link to={`/deal/${offer.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full gap-1 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md hover:shadow-primary/20">
              عرض التفاصيل <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            </Button>
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-1.5 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-whatsapp/25">
              <MessageCircle className="h-4 w-4" />
              واتساب
            </Button>
          </a>
        </div>
      </div>

      {/* خط مضيء سفلي */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-l from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_10px_hsl(var(--glow-primary)/0.4)]" />
    </motion.div>
  );
}
