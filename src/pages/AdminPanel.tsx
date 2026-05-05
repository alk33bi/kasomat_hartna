import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { businesses, offers } from "@/data/mockData";
import { categories } from "@/data/categories";
import { cities } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Check, X, Eye, Store, Tag, Shield, Search, MapPin
} from "lucide-react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("businesses");
  const [searchQuery, setSearchQuery] = useState("");

  const pendingBusinesses = businesses.filter((b) => !b.isApproved);
  const allBusinesses = businesses.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">لوحة الإدارة</h1>
            <p className="text-muted-foreground text-sm">إدارة المحلات والعروض وإعدادات المنصة</p>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "إجمالي المحلات", value: businesses.length, icon: <Store className="h-5 w-5" /> },
            { label: "العروض النشطة", value: offers.filter(o => o.isActive).length, icon: <Tag className="h-5 w-5" /> },
            { label: "المدن", value: cities.length, icon: <MapPin className="h-5 w-5" /> },
            { label: "الفئات", value: categories.length, icon: <Tag className="h-5 w-5" /> },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-deal">
              <span className="text-muted-foreground">{stat.icon}</span>
              <p className="text-2xl font-extrabold mt-2">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="businesses">المحلات</TabsTrigger>
            <TabsTrigger value="offers">العروض</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="businesses">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="ابحث عن المحلات..."
                    className="ps-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {pendingBusinesses.length > 0 && (
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-4">
                  <p className="font-semibold text-sm">
                    {pendingBusinesses.length} محل بانتظار الموافقة
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {allBusinesses.map((biz) => (
                  <div key={biz.id} className="rounded-xl border border-border bg-card p-4 shadow-deal flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{biz.name}</h3>
                        <Badge variant={biz.isApproved ? "secondary" : "destructive"} className="text-xs">
                          {biz.isApproved ? "معتمد" : "قيد المراجعة"}
                        </Badge>
                        <Badge variant="outline" className="text-xs">{biz.subscriptionPlan}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {categories.find(c => c.id === biz.category)?.name} · {biz.area}، {biz.city}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3 w-3" /> عرض
                      </Button>
                      {!biz.isApproved && (
                        <>
                          <Button size="sm" className="gap-1">
                            <Check className="h-3 w-3" /> موافقة
                          </Button>
                          <Button variant="destructive" size="sm" className="gap-1">
                            <X className="h-3 w-3" /> رفض
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="offers">
            <div className="space-y-3">
              {offers.slice(0, 20).map((offer) => {
                const biz = businesses.find(b => b.id === offer.businessId);
                return (
                  <div key={offer.id} className="rounded-xl border border-border bg-card p-4 shadow-deal flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">{offer.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {biz?.name} · {offer.discountValue} · ينتهي {offer.endDate}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={offer.isActive ? "secondary" : "destructive"} className="text-xs">
                        {offer.isActive ? "نشط" : "غير نشط"}
                      </Badge>
                      <Button variant="outline" size="sm"><Eye className="h-3 w-3" /></Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="max-w-lg space-y-6">
              <div>
                <h3 className="font-bold mb-3">الفئات</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <Badge key={c.id} variant="secondary">{c.name}</Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  إدارة الفئات ستكون متاحة عند ربط الخادم الخلفي.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3">المدن المدعومة</h3>
                <div className="flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <Badge key={c} variant="secondary">{c}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex-1" />
      <Footer />
    </div>
  );
}
