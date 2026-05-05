import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Star, BarChart3, Zap } from "lucide-react";

const plans = [
  {
    name: "أساسي",
    price: "٥",
    period: "/شهر",
    description: "مثالي للبداية",
    features: [
      "عرض واحد نشط في كل مرة",
      "قائمة محل عادية",
      "ربط واتساب",
      "صفحة تعريف بالمحل",
    ],
    cta: "ابدأ الأساسي",
    popular: false,
  },
  {
    name: "احترافي",
    price: "١٠",
    period: "/شهر",
    description: "للمحلات النامية",
    features: [
      "حتى ٥ عروض نشطة",
      "أولوية في نتائج البحث",
      "لوحة تحليلات بسيطة",
      "ربط واتساب",
      "صفحة تعريف بالمحل",
      "إبراز في الفئة",
    ],
    cta: "اختر الاحترافي",
    popular: true,
  },
  {
    name: "مميز",
    price: "٥",
    period: "/شهر إضافة",
    description: "أقصى ظهور",
    features: [
      "ظهور في قسم العروض المميزة",
      "أعلى نتائج الفئة",
      "شارة مميز على جميع القوائم",
      "دعم عملاء أولوية",
    ],
    cta: "أضف المميز",
    popular: false,
  },
];

export default function BusinessPricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* البطل */}
      <section className="bg-gradient-hero py-16 md:py-24 text-white">
        <div className="container text-center">
          <Badge className="bg-white/20 text-white border-0 mb-4">للأعمال التجارية العمانية</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            نمّي نشاطك التجاري مع
            <br />
            <span className="text-accent">العروض المحلية</span>
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            وصّل عروضك لآلاف الزبائن في مسقط ونزوى وعبري الباحثين عن خصومات في حارتهم.
          </p>
        </div>
      </section>

      {/* المزايا */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Zap className="h-6 w-6" />, title: "ظهور فوري", desc: "اعرض عروضك أمام الزبائن القريبين فوراً." },
              { icon: <Star className="h-6 w-6" />, title: "واتساب أولاً", desc: "الزبائن يتواصلون معك مباشرة عبر واتساب — بدون وسيط." },
              { icon: <BarChart3 className="h-6 w-6" />, title: "تتبع الأداء", desc: "شوف كم مشاهدة ونقرة وتواصل تحصل عروضك." },
            ].map((b, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto">
                  {b.icon}
                </div>
                <h3 className="font-bold text-lg">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الأسعار */}
      <section id="pricing" className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">أسعار بسيطة بالريال العماني</h2>
            <p className="text-muted-foreground mt-2">بدون رسوم خفية. إلغاء في أي وقت.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border ${
                  plan.popular
                    ? "border-primary bg-card shadow-deal-hover ring-2 ring-primary/20"
                    : "border-border bg-card shadow-deal"
                } relative`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    الأكثر شعبية
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground"> ر.ع{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/dashboard">
                  <Button
                    className="w-full gap-2"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta} <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">جاهز تبدأ؟</h2>
          <p className="text-muted-foreground mb-8">انضم لمئات المحلات العمانية التي تصل لزبائن جدد يومياً.</p>
          <Link to="/dashboard">
            <Button size="lg" className="gap-2 font-bold">
              أنشئ حساب تجاري <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
