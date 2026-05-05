import { motion } from "framer-motion";
import { MapPin, Navigation, Search } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgGlow: string;
}

const steps: Step[] = [
  {
    icon: <MapPin className="h-7 w-7" />,
    title: "اختر موقعك",
    description: "حدد مدينتك ومنطقتك في عُمان لتجد العروض القريبة منك.",
    color: "from-primary to-emerald-glow",
    bgGlow: "bg-primary/20",
  },
  {
    icon: <Search className="h-7 w-7" />,
    title: "تصفح وابحث",
    description: "استكشف العروض حسب الفئة أو نوع الخصم أو المسافة.",
    color: "from-accent to-gold",
    bgGlow: "bg-accent/20",
  },
  {
    icon: <Navigation className="h-7 w-7" />,
    title: "زُر ووفّر",
    description: "تواصل مع المحل عبر واتساب واستمتع بالخصم!",
    color: "from-burgundy to-coral",
    bgGlow: "bg-burgundy/20",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function HowItWorks() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Vibrant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-burgundy/5 dark:from-primary/10 dark:via-accent/8 dark:to-burgundy/8" />
      <div className="absolute inset-0 bg-mesh-pattern opacity-50" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 end-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 start-10 w-56 h-56 bg-accent/8 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute top-1/2 start-1/3 w-32 h-32 bg-burgundy/6 rounded-full blur-2xl" />

      <div className="container relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-4 border border-primary/10">
            ✨ ثلاث خطوات بسيطة
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">كيف تعمل المنصة؟</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            اكتشف واستمتع بالخصومات المحلية في ثلاث خطوات بسيطة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariant}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors duration-500 hover:shadow-colorful"
            >
              {/* Background glow */}
              <div className={`absolute -top-6 w-32 h-32 ${step.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <motion.div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent font-black text-sm border border-accent/20">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
