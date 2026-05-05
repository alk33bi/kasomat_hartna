import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Rich dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-card to-accent/8 dark:from-primary/20 dark:via-card dark:to-accent/12" />
      <div className="absolute inset-0 bg-mesh-pattern opacity-40" />
      <div className="absolute inset-0 section-pattern" />
      
      {/* Floating glow accents */}
      <motion.div
        className="absolute bottom-0 end-0 w-72 h-72 bg-primary/8 rounded-full blur-[100px] translate-y-1/2"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 start-0 w-56 h-56 bg-accent/8 rounded-full blur-[80px] -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative py-14">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div className="space-y-4" variants={fadeUp}>
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <img src={logoIcon} alt="خصومات حارتنا" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-2 bg-primary/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight">
                  <span className="text-primary">خصومات</span>{" "}
                  <span className="text-accent">حارتنا</span>
                </span>
                <span className="text-[10px] font-medium text-muted-foreground -mt-0.5">عروض قريبة منك في عُمان 🇴🇲</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              اكتشف أفضل العروض والخصومات في عُمان. وفّر أكثر، كل يوم.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4 text-sm text-primary flex items-center gap-2">
              <span className="h-1 w-4 rounded-full bg-primary/60" />
              تصفح
            </h4>
            <motion.ul className="space-y-3 text-sm text-muted-foreground" variants={stagger}>
              {[
                { to: "/explore", label: "جميع العروض" },
                { to: "/explore?city=Muscat", label: "عروض مسقط" },
                { to: "/explore?city=Nizwa", label: "عروض نزوى" },
                { to: "/explore?city=Ibri", label: "عروض عبري" },
              ].map((link) => (
                <motion.li key={link.to} variants={fadeUp}>
                  <Link to={link.to} className="hover:text-primary transition-all duration-300 hover:translate-x-[-4px] inline-block">{link.label}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4 text-sm text-primary flex items-center gap-2">
              <span className="h-1 w-4 rounded-full bg-primary/60" />
              للأعمال التجارية
            </h4>
            <motion.ul className="space-y-3 text-sm text-muted-foreground" variants={stagger}>
              {[
                { to: "/business", label: "سجّل نشاطك التجاري" },
                { to: "/business#pricing", label: "الأسعار" },
                { to: "/dashboard", label: "لوحة التحكم" },
              ].map((link) => (
                <motion.li key={link.to} variants={fadeUp}>
                  <Link to={link.to} className="hover:text-primary transition-all duration-300 hover:translate-x-[-4px] inline-block">{link.label}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4 text-sm text-primary flex items-center gap-2">
              <span className="h-1 w-4 rounded-full bg-primary/60" />
              تواصل معنا
            </h4>
            <motion.ul className="space-y-3 text-sm text-muted-foreground" variants={stagger}>
              {["support@haratna.om", "+968 2400 0000", "مسقط، سلطنة عُمان"].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>© ٢٠٢٦ خصومات حارتنا. جميع الحقوق محفوظة.</p>
          <p>صُنع بـ <span className="text-destructive animate-pulse">♥</span> في عُمان 🇴🇲</p>
        </motion.div>
      </div>
    </footer>
  );
}
