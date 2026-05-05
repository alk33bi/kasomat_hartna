import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { City } from "@/types";
import { categories } from "@/data/categories";
import { businesses, offers, getBusinessesForOffer } from "@/data/mockData";
import heroImage from "@/assets/hero-oman.jpg";
import logoMain from "@/assets/logo-main.png";
import logoIcon from "@/assets/logo-icon.png";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationSelector from "@/components/LocationSelector";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Store, Flame, Star, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export default function Index() {
  const [city, setCity] = useState<City | "">("");
  const [area, setArea] = useState("");

  const featuredOffers = offers
    .filter((o) => o.isActive)
    .slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* البطل */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="اكتشف العروض في عُمان" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/15" />
        </div>
        <div className="relative container py-28 md:py-44">
          {/* Centered logo */}
          <motion.div
            className="flex flex-col items-center gap-3 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.img
              src={logoIcon}
              alt="خصومات حارتنا"
              className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-2xl"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="text-4xl md:text-6xl font-black leading-none text-center">
              <span className="text-white">خصومات</span>{" "}
              <span className="text-accent drop-shadow-lg">حارتنا</span>
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm border border-accent/20">
              <Sparkles className="h-3 w-3" />
              منصة العروض المحلية #١ في عُمان
            </div>
          </motion.div>

          <motion.div
            className="max-w-2xl space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-extrabold text-white leading-[1.15]">
              اكتشف العروض
              <br />
              <span className="text-accent drop-shadow-lg">القريبة منك في عُمان</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-white/80 max-w-lg">
              اكتشف خصومات المطاعم والمقاهي والصالونات وأكثر — في حارتك مباشرة.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 items-start">
              <div className="bg-primary/40 backdrop-blur-md rounded-xl p-3 border border-primary/30">
                <LocationSelector
                  selectedCity={city}
                  selectedArea={area}
                  onCityChange={setCity}
                  onAreaChange={setArea}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex gap-3 pt-2">
              <Link to={`/explore${city ? `?city=${city}` : ""}`}>
                <Button size="lg" className="gap-2 text-base font-bold shadow-lg shadow-primary/30">
                  تصفح العروض <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/business">
                <Button size="lg" variant="outline" className="gap-2 text-base font-bold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <Store className="h-5 w-5" /> سجّل نشاطك
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative floating shapes */}
        <motion.div
          className="absolute top-20 start-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 end-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </section>

      {/* الفئات */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute inset-0 bg-mesh-pattern" />
        <div className="absolute inset-0 section-pattern" />
        <div className="absolute inset-0 bg-animated-mesh" />
        <div className="absolute top-0 end-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/3" />
        <div className="absolute bottom-0 start-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/3" />
        <div className="absolute top-1/2 start-1/2 w-56 h-56 bg-burgundy/5 rounded-full blur-3xl" />

        <div className="container relative">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-sm font-bold text-primary">
                <Star className="h-4 w-4 fill-current" />
                اختر ما يناسبك
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold">تصفح حسب الفئة</h2>
              <p className="text-muted-foreground mt-1">اعثر على العروض في فئاتك المفضلة</p>
            </div>
            <Link to="/explore" className="hidden md:block">
              <Button variant="ghost" className="gap-1">
                عرض الكل <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {categories.map((cat, i) => (
              <motion.div key={cat.id} variants={scaleIn} custom={i}>
                <Link to={`/explore?category=${cat.id}`}>
                  <CategoryCard category={cat} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* العروض المميزة */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/6 to-burgundy/4 dark:from-primary/15 dark:via-accent/12 dark:to-burgundy/8" />
        <div className="absolute inset-0 bg-mesh-pattern opacity-60" />
        <div className="absolute inset-0 section-pattern" />
        <div className="absolute inset-0 bg-animated-mesh" />
        <div className="absolute top-0 end-0 w-96 h-96 bg-primary/8 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 start-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] translate-y-1/2" />
        <div className="absolute top-1/2 end-1/4 w-40 h-40 bg-burgundy/6 rounded-full blur-[60px]" />
        
        <motion.div
          className="absolute top-10 start-10 w-20 h-20 border-2 border-primary/10 rounded-2xl"
          animate={{ rotate: [12, 24, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 end-16 w-16 h-16 border-2 border-accent/10 rounded-xl"
          animate={{ rotate: [-6, -18, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container relative">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-sm font-bold text-accent">
                <Flame className="h-4 w-4" />
                عروض حصرية
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold">عروض مميزة</h2>
              <p className="text-muted-foreground mt-1">عروض ساخنة لا تفوتها</p>
            </div>
            <Link to="/explore">
              <Button variant="ghost" className="gap-1">
                عرض الكل <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {featuredOffers.map((offer, i) => {
              const biz = getBusinessesForOffer(offer);
              if (!biz) return null;
              return (
                <DealCard key={offer.id} offer={offer} business={biz} index={i} />
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* دعوة للعمل */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-warm-sand/30 to-background" />
        <div className="absolute inset-0 bg-mesh-pattern opacity-40" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="bg-gradient-hero rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-colorful"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />
            <motion.div
              className="absolute top-0 end-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 start-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
              >
                <Zap className="h-4 w-4 text-accent" />
                ابدأ اليوم واحصل على شهر مجاني
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold mb-4"
              >
                عندك محل في عُمان؟
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-white/80 max-w-lg mx-auto mb-8 text-lg"
              >
                وصّل عروضك لآلاف الزبائن الباحثين عن خصومات قريبة منهم. ابدأ من ٥ ر.ع/شهر فقط.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex gap-3 justify-center"
              >
                <Link to="/business">
                  <Button size="lg" className="font-bold text-base bg-accent text-white hover:bg-accent/90 shadow-lg">
                    ابدأ الآن
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" className="font-bold text-base bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20">
                    تصفح العروض
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      <Footer />
    </div>
  );
}
