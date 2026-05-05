import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { businesses, offers, getDaysRemaining } from "@/data/mockData";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Plus, Pencil, Trash2, Eye, BarChart3, MessageCircle, Phone, MousePointer,
  Store, Tag, Calendar, Clock
} from "lucide-react";

const myBusiness = businesses[0];
const myOffers = offers.filter((o) => o.businessId === myBusiness.id);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("offers");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">لوحة التحكم</h1>
            <p className="text-muted-foreground">إدارة محلك وعروضك</p>
          </div>
          <Badge variant="secondary" className="gap-2 text-sm px-4 py-2 w-fit">
            <Store className="h-4 w-4" /> {myBusiness.name}
          </Badge>
        </div>

        {/* بطاقات الإحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "إجمالي المشاهدات", value: "١٬٢٤٧", icon: <Eye className="h-5 w-5" />, change: "+١٢٪" },
            { label: "نقرات واتساب", value: "٨٩", icon: <MessageCircle className="h-5 w-5" />, change: "+٨٪" },
            { label: "نقرات الاتصال", value: "٣٤", icon: <Phone className="h-5 w-5" />, change: "+٥٪" },
            { label: "نقرات الروابط", value: "١٥٦", icon: <MousePointer className="h-5 w-5" />, change: "+١٥٪" },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-deal">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">{stat.icon}</span>
                <Badge variant="secondary" className="text-xs text-primary">{stat.change}</Badge>
              </div>
              <p className="text-2xl font-extrabold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="offers">عروضي</TabsTrigger>
            <TabsTrigger value="profile">ملف المحل</TabsTrigger>
            <TabsTrigger value="create">إنشاء عرض</TabsTrigger>
          </TabsList>

          <TabsContent value="offers">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">العروض النشطة ({myOffers.length})</h2>
                <Button size="sm" className="gap-1" onClick={() => setActiveTab("create")}>
                  <Plus className="h-4 w-4" /> عرض جديد
                </Button>
              </div>

              {myOffers.map((offer) => {
                const daysLeft = getDaysRemaining(offer.endDate);
                return (
                  <div key={offer.id} className="rounded-xl border border-border bg-card p-4 shadow-deal flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{offer.title}</h3>
                        <Badge variant={daysLeft <= 3 ? "destructive" : "secondary"} className="text-xs">
                          {daysLeft > 0 ? `${daysLeft} يوم` : "انتهى"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{offer.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Tag className="h-3 w-3" /> {offer.discountValue}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {offer.startDate} — {offer.endDate}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Pencil className="h-3 w-3" /> تعديل
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1 text-destructive hover:text-destructive">
                        <Trash2 className="h-3 w-3" /> حذف
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-lg font-bold">ملف المحل التجاري</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>اسم المحل</Label>
                  <Input defaultValue={myBusiness.name} />
                </div>
                <div className="space-y-2">
                  <Label>الفئة</Label>
                  <Select defaultValue={myBusiness.category}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>المدينة</Label>
                  <Input defaultValue={myBusiness.city} />
                </div>
                <div className="space-y-2">
                  <Label>المنطقة</Label>
                  <Input defaultValue={myBusiness.area} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>العنوان</Label>
                  <Input defaultValue={myBusiness.address} />
                </div>
                <div className="space-y-2">
                  <Label>الهاتف</Label>
                  <Input defaultValue={myBusiness.phone} />
                </div>
                <div className="space-y-2">
                  <Label>واتساب</Label>
                  <Input defaultValue={myBusiness.whatsapp} />
                </div>
                <div className="space-y-2">
                  <Label>ساعات العمل</Label>
                  <Input defaultValue={myBusiness.openingHours} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>الوصف</Label>
                <Textarea defaultValue={myBusiness.description} />
              </div>
              <Button>حفظ التغييرات</Button>
            </div>
          </TabsContent>

          <TabsContent value="create">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-lg font-bold">إنشاء عرض جديد</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label>عنوان العرض</Label>
                  <Input placeholder="مثال: ٢٠٪ خصم على جميع الأطباق الرئيسية" />
                </div>
                <div className="space-y-2">
                  <Label>نوع العرض</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="اختر النوع" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">خصم نسبة ٪</SelectItem>
                      <SelectItem value="bogo">اشترِ واحصل</SelectItem>
                      <SelectItem value="free-delivery">توصيل مجاني</SelectItem>
                      <SelectItem value="bundle">باقة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>قيمة الخصم</Label>
                  <Input placeholder="مثال: ٢٠٪ أو حلوى مجانية" />
                </div>
                <div className="space-y-2">
                  <Label>تاريخ البداية</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>تاريخ النهاية</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>الوصف</Label>
                <Textarea placeholder="وصف العرض..." />
              </div>
              <div className="space-y-2">
                <Label>الشروط والأحكام</Label>
                <Textarea placeholder="أي شروط أو قيود..." />
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" /> إنشاء العرض
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex-1" />
      <Footer />
    </div>
  );
}
