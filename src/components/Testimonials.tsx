import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import man1 from "@/assets/testimonials/man1.jpg";
import woman1 from "@/assets/testimonials/woman1.jpg";
import man2 from "@/assets/testimonials/man2.jpg";
import woman2 from "@/assets/testimonials/woman2.jpg";
import man3 from "@/assets/testimonials/man3.jpg";
import woman3 from "@/assets/testimonials/woman3.jpg";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    name: "فاطمة الحارثية",
    role: "ربة منزل",
    avatar: woman1,
    rating: 5,
    text: "خصومات حارتنا غيّرت طريقة تسوّقي! كل يوم ألقى عروض جديدة في حارتي. وفّرت أكثر من ٣٠ ريال في شهر واحد فقط.",
    city: "مسقط",
  },
  {
    name: "أحمد البلوشي",
    role: "صاحب مطعم",
    avatar: man1,
    rating: 5,
    text: "من يوم ما سجّلت مطعمي في المنصة، زبائني زادوا بشكل ملحوظ. أفضل استثمار سويته لنشاطي التجاري!",
    city: "نزوى",
  },
  {
    name: "مريم الكندية",
    role: "طالبة جامعية",
    avatar: woman2,
    rating: 4,
    text: "كطالبة، أحتاج أوفّر دائماً. المنصة سهّلت عليّ ألقى خصومات المطاعم والكافيهات القريبة من الجامعة.",
    city: "مسقط",
  },
  {
    name: "سالم الراشدي",
    role: "صاحب صالون",
    avatar: man2,
    rating: 5,
    text: "خصومات حارتنا وصّلتني بزبائن جدد ما كنت أقدر أوصلهم. المنصة سهلة وفعّالة والنتائج ممتازة.",
    city: "عبري",
  },
  {
    name: "نورة السعيدية",
    role: "موظفة حكومية",
    avatar: woman3,
    rating: 5,
    text: "أحب إن العروض كلها محلية وقريبة. ما أحتاج أسافر بعيد عشان ألقى خصم حلو. شكراً خصومات حارتنا!",
    city: "مسقط",
  },
  {
    name: "خالد الهنائي",
    role: "صاحب بقالة",
    avatar: man3,
    rating: 4,
    text: "بقالتي صارت معروفة أكثر بعد ما نشرت عروضي هنا. الناس يجون من حارات ثانية عشان عروضنا.",
    city: "نزوى",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.3, type: "spring", stiffness: 300 }}
        >
          <Star
            className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
          />
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("٠");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part for animation
    const numericMatch = value.match(/[\d٠-٩.,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    // For Arabic numerals, just show the value after a brief delay
    const timer = setTimeout(() => setDisplayValue(value), 200);
    return () => clearTimeout(timer);
  }, [isInView, value]);

  return (
    <motion.p
      ref={ref}
      className="text-2xl font-black text-primary"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}{suffix}
    </motion.p>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/3 to-burgundy/5 dark:from-accent/10 dark:via-primary/8 dark:to-burgundy/8" />
      <div className="absolute inset-0 bg-mesh-pattern opacity-40" />
      <div className="absolute inset-0 section-pattern" />

      {/* Decorative blobs */}
      <motion.div
        className="absolute top-0 start-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 end-1/4 w-56 h-56 bg-primary/8 rounded-full blur-[70px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent mb-4 border border-accent/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <Quote className="h-4 w-4" />
            ماذا يقول عملاؤنا
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold">آراء مستخدمينا</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            اكتشف لماذا يثق الآلاف في خصومات حارتنا للعثور على أفضل العروض
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-6 card-glass glow-border glow-shadow hover:shadow-colorful"
            >
              {/* Quote decoration */}
              <motion.div
                className="absolute top-4 end-4 text-primary"
                initial={{ opacity: 0, rotate: -20 }}
                whileInView={{ opacity: 0.1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <Quote className="h-10 w-10 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Glow on hover */}
              <div className="absolute -top-4 start-1/2 -translate-x-1/2 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative space-y-4">
                {/* Avatar + Info */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-0.5 -end-0.5 h-4 w-4 rounded-full bg-whatsapp border-2 border-card" />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.city}</p>
                  </div>
                </div>

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "٥,٠٠٠+", label: "مستخدم نشط" },
            { value: "٣٥٠+", label: "محل مسجّل" },
            { value: "٤.٨", label: "تقييم المنصة" },
            { value: "٩٥%", label: "رضا العملاء" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="text-center p-4 rounded-xl card-glass glow-border glow-shadow"
            >
              <AnimatedCounter value={stat.value} />
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
