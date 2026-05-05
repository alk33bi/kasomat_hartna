import { Business, Offer } from "@/types";

// صور فريدة لكل محل — بدون تكرار
const businessImages: Record<string, string[]> = {
  b1: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"],
  b2: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop"],
  b3: ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"],
  b4: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"],
  b5: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop"],
  b6: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop"],
  b7: ["https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop"],
  b8: ["https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop"],
  b9: ["https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=400&fit=crop"],
  b10: ["https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop"],
  b11: ["https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop"],
  b12: ["https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop"],
  b13: ["https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=400&fit=crop"],
  b14: ["https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop"],
  b15: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop"],
  b16: ["https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop"],
  b17: ["https://images.unsplash.com/photo-1549465220-1a8b9238f399?w=600&h=400&fit=crop"],
  b18: ["https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop"],
  b19: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop"],
  b20: ["https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=400&fit=crop"],
  b21: ["https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=400&fit=crop"],
  b22: ["https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&h=400&fit=crop"],
  b23: ["https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600&h=400&fit=crop"],
  b24: ["https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop"],
  b25: ["https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&h=400&fit=crop"],
  b26: ["https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"],
  b27: ["https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&h=400&fit=crop"],
  b28: ["https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop"],
  b29: ["https://images.unsplash.com/photo-1594035910387-fea081d37e60?w=600&h=400&fit=crop"],
  b30: ["https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&h=400&fit=crop"],
  b31: ["https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop"],
  b32: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop"],
  b33: ["https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop"],
  b34: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"],
  b35: ["https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&h=400&fit=crop"],
  b36: ["https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop"],
  b37: ["https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=600&h=400&fit=crop"],
  b38: ["https://images.unsplash.com/photo-1585747860019-8032075e9d55?w=600&h=400&fit=crop"],
  b39: ["https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop"],
  b40: ["https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop"],
  b41: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=400&fit=crop"],
  b42: ["https://images.unsplash.com/photo-1469504512102-900f29606341?w=600&h=400&fit=crop"],
  b43: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop"],
  b44: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"],
  b45: ["https://images.unsplash.com/photo-1587303876067-04f31cccf42e?w=600&h=400&fit=crop"],
};

export const businesses: Business[] = [
  // مسقط - مطاعم
  { id: "b1", name: "بيت اللبان", category: "restaurants", city: "Muscat", area: "Qurum", address: "شارع شاطئ القرم، مسقط", coordinates: { lat: 23.5880, lng: 58.4100 }, phone: "+96824694957", whatsapp: "+96824694957", openingHours: "١٢:٠٠ م - ١١:٠٠ م", images: businessImages.b1, subscriptionPlan: "pro", isApproved: true, description: "مأكولات عمانية تقليدية مع إطلالة بحرية خلابة." },
  { id: "b2", name: "البيت التركي", category: "restaurants", city: "Muscat", area: "Al Khuwair", address: "شارع الخوير ١٨، مسقط", coordinates: { lat: 23.5950, lng: 58.4200 }, phone: "+96824487776", whatsapp: "+96824487776", openingHours: "١١:٠٠ ص - ١١:٣٠ م", images: businessImages.b2, subscriptionPlan: "basic", isApproved: true, description: "أطباق تركية أصيلة ومشاوي." },
  { id: "b3", name: "مطعم أوتوماتيك", category: "restaurants", city: "Muscat", area: "Ruwi", address: "شارع روي الرئيسي، مسقط", coordinates: { lat: 23.5900, lng: 58.5400 }, phone: "+96824702828", whatsapp: "+96824702828", openingHours: "٦:٠٠ ص - ١٢:٠٠ ص", images: businessImages.b3, subscriptionPlan: "pro", isApproved: true, description: "مطعم لبناني شهير يقدم شاورما ومشاوي." },
  { id: "b4", name: "مطعم الأنغام", category: "restaurants", city: "Muscat", area: "Al Ghubrah", address: "طريق ٣٥٠١، الغبرة", coordinates: { lat: 23.6050, lng: 58.4150 }, phone: "+96824601234", whatsapp: "+96824601234", openingHours: "١٢:٠٠ م - ١٠:٣٠ م", images: businessImages.b4, subscriptionPlan: "featured", isApproved: true, description: "مطعم عماني راقي بأجواء تراثية." },

  // مسقط - مقاهي
  { id: "b5", name: "مقهى باتيل", category: "cafes", city: "Muscat", area: "Qurum", address: "منطقة حديقة القرم، مسقط", coordinates: { lat: 23.5870, lng: 58.4120 }, phone: "+96824561234", whatsapp: "+96824561234", openingHours: "٨:٠٠ ص - ١٠:٠٠ م", images: businessImages.b5, subscriptionPlan: "pro", isApproved: true, description: "قهوة فاخرة وحلويات عمانية بالتمر." },
  { id: "b6", name: "محطة الشاي", category: "cafes", city: "Muscat", area: "Azaiba", address: "شارع العذيبة الرئيسي، مسقط", coordinates: { lat: 23.6100, lng: 58.3600 }, phone: "+96824345678", whatsapp: "+96824345678", openingHours: "٧:٠٠ ص - ١١:٠٠ م", images: businessImages.b6, subscriptionPlan: "basic", isApproved: true, description: "كرك مميز وتخصصات المقهى." },
  { id: "b7", name: "كوفيولوجي", category: "cafes", city: "Muscat", area: "Al Hail", address: "الحيل الجنوبية، مسقط", coordinates: { lat: 23.6200, lng: 58.3300 }, phone: "+96824876543", whatsapp: "+96824876543", openingHours: "٧:٣٠ ص - ١١:٣٠ م", images: businessImages.b7, subscriptionPlan: "pro", isApproved: true, description: "محمصة قهوة مختصة." },

  // مسقط - سوبرماركت
  { id: "b8", name: "لولو هايبرماركت", category: "supermarkets", city: "Muscat", area: "Al Ghubrah", address: "دوار الغبرة، مسقط", coordinates: { lat: 23.6060, lng: 58.4100 }, phone: "+96824504050", whatsapp: "+96824504050", openingHours: "٨:٠٠ ص - ١٢:٠٠ ص", images: businessImages.b8, subscriptionPlan: "featured", isApproved: true, description: "وجهتك الشاملة للمواد الغذائية والمنزلية." },
  { id: "b9", name: "الفير", category: "supermarkets", city: "Muscat", area: "Qurum", address: "القرم، منطقة PDO، مسقط", coordinates: { lat: 23.5890, lng: 58.4050 }, phone: "+96824567800", whatsapp: "+96824567800", openingHours: "٧:٠٠ ص - ١١:٠٠ م", images: businessImages.b9, subscriptionPlan: "pro", isApproved: true, description: "سوبرماركت فاخر بمنتجات مستوردة ومحلية." },

  // مسقط - فواكه وخضروات
  { id: "b10", name: "فواكه عمان الطازجة", category: "fruits-vegetables", city: "Muscat", area: "Seeb", address: "طريق سوق السيب، مسقط", coordinates: { lat: 23.6700, lng: 58.1900 }, phone: "+96824410101", whatsapp: "+96824410101", openingHours: "٦:٠٠ ص - ٩:٠٠ م", images: businessImages.b10, subscriptionPlan: "basic", isApproved: true, description: "فواكه وخضروات طازجة يومياً من المزارع المحلية." },
  { id: "b11", name: "الوادي الأخضر", category: "fruits-vegetables", city: "Muscat", area: "Al Khuwair", address: "الخوير ٣٣، مسقط", coordinates: { lat: 23.5940, lng: 58.4180 }, phone: "+96824421212", whatsapp: "+96824421212", openingHours: "٧:٠٠ ص - ١٠:٠٠ م", images: businessImages.b11, subscriptionPlan: "pro", isApproved: true, description: "منتجات عضوية وطازجة من المزرعة يومياً." },

  // مسقط - مغاسل
  { id: "b12", name: "شامبيون للتنظيف", category: "laundry", city: "Muscat", area: "Al Khuwair", address: "شارع الخوير ٤٥، مسقط", coordinates: { lat: 23.5960, lng: 58.4210 }, phone: "+96824500500", whatsapp: "+96824500500", openingHours: "٧:٠٠ ص - ١٠:٠٠ م", images: businessImages.b12, subscriptionPlan: "pro", isApproved: true, description: "خدمات تنظيف جاف وغسيل فاخرة." },
  { id: "b13", name: "غسيل سريع عمان", category: "laundry", city: "Muscat", area: "Azaiba", address: "العذيبة الجنوبية، مسقط", coordinates: { lat: 23.6110, lng: 58.3580 }, phone: "+96824334455", whatsapp: "+96824334455", openingHours: "٦:٣٠ ص - ١٠:٣٠ م", images: businessImages.b13, subscriptionPlan: "basic", isApproved: true, description: "خدمات غسيل وكي في نفس اليوم." },

  // مسقط - صالونات
  { id: "b14", name: "صالون رويال للرجال", category: "salons", city: "Muscat", area: "Al Ghubrah", address: "الغبرة الشمالية، طريق ٤٤٢٠", coordinates: { lat: 23.6080, lng: 58.4130 }, phone: "+96824676767", whatsapp: "+96824676767", openingHours: "٩:٠٠ ص - ١٠:٠٠ م", images: businessImages.b14, subscriptionPlan: "pro", isApproved: true, description: "عناية فاخرة بالرجال وحلاقة تقليدية." },
  { id: "b15", name: "صالون جلامور للسيدات", category: "salons", city: "Muscat", area: "Qurum", address: "منطقة القرم التجارية", coordinates: { lat: 23.5885, lng: 58.4095 }, phone: "+96824787878", whatsapp: "+96824787878", openingHours: "١٠:٠٠ ص - ٩:٠٠ م", images: businessImages.b15, subscriptionPlan: "featured", isApproved: true, description: "خدمات تجميل شاملة للسيدات." },

  // مسقط - توصيل
  { id: "b16", name: "مسقط إكسبرس للتوصيل", category: "delivery", city: "Muscat", area: "Seeb", address: "المنطقة الصناعية بالسيب", coordinates: { lat: 23.6720, lng: 58.1850 }, phone: "+96824889900", whatsapp: "+96824889900", openingHours: "٢٤/٧", images: businessImages.b16, subscriptionPlan: "pro", isApproved: true, description: "توصيل سريع في نفس اليوم عبر مسقط." },

  // مسقط - هدايا
  { id: "b17", name: "قصر الهدايا العمانية", category: "gifts", city: "Muscat", area: "Ruwi", address: "منطقة سوق روي", coordinates: { lat: 23.5910, lng: 58.5380 }, phone: "+96824550055", whatsapp: "+96824550055", openingHours: "٩:٠٠ ص - ١٠:٠٠ م", images: businessImages.b17, subscriptionPlan: "basic", isApproved: true, description: "هدايا عمانية تقليدية ولبان وتذكارات." },
  { id: "b18", name: "لفّها هدية", category: "gifts", city: "Muscat", area: "Al Hail", address: "الحيل الشمالية، مبنى ٤٥٠", coordinates: { lat: 23.6220, lng: 58.3280 }, phone: "+96824661177", whatsapp: "+96824661177", openingHours: "١٠:٠٠ ص - ٩:٠٠ م", images: businessImages.b18, subscriptionPlan: "pro", isApproved: true, description: "تغليف هدايا مخصص وصناديق هدايا فاخرة." },

  // مسقط - عطور
  { id: "b19", name: "أمواج", category: "perfumes", city: "Muscat", area: "Qurum", address: "القرم، مركز صبكو", coordinates: { lat: 23.5875, lng: 58.4110 }, phone: "+96824567890", whatsapp: "+96824567890", openingHours: "١٠:٠٠ ص - ١٠:٠٠ م", images: businessImages.b19, subscriptionPlan: "featured", isApproved: true, description: "دار عطور عمانية فاخرة منذ ١٩٨٣." },
  { id: "b20", name: "الحرمين للعطور", category: "perfumes", city: "Muscat", area: "Ruwi", address: "شارع روي الرئيسي", coordinates: { lat: 23.5905, lng: 58.5390 }, phone: "+96824445566", whatsapp: "+96824445566", openingHours: "٩:٣٠ ص - ١٠:٣٠ م", images: businessImages.b20, subscriptionPlan: "pro", isApproved: true, description: "عود أصيل وعطور عربية." },

  // مسقط - ورد
  { id: "b21", name: "فلورا عمان", category: "flowers", city: "Muscat", area: "Al Khuwair", address: "الخوير ٤٢، بجانب وزارة الصحة", coordinates: { lat: 23.5945, lng: 58.4190 }, phone: "+96824112233", whatsapp: "+96824112233", openingHours: "٨:٠٠ ص - ٩:٠٠ م", images: businessImages.b21, subscriptionPlan: "pro", isApproved: true, description: "تنسيقات زهور طازجة وباقات لكل مناسبة." },

  // مسقط - مكتبات
  { id: "b22", name: "مكتبة تيرتلز", category: "bookstores", city: "Muscat", area: "Qurum", address: "مجمع جواهرات الشاطي", coordinates: { lat: 23.5860, lng: 58.4130 }, phone: "+96824564848", whatsapp: "+96824564848", openingHours: "٩:٠٠ ص - ٩:٠٠ م", images: businessImages.b22, subscriptionPlan: "pro", isApproved: true, description: "مكتبة عمان المفضلة المستقلة." },

  // نزوى
  { id: "b23", name: "مطعم نزوى التراثي", category: "restaurants", city: "Nizwa", area: "Nizwa Souq", address: "بجوار قلعة نزوى، السوق", coordinates: { lat: 22.9333, lng: 57.5333 }, phone: "+96825412345", whatsapp: "+96825412345", openingHours: "١١:٠٠ ص - ١٠:٠٠ م", images: businessImages.b23, subscriptionPlan: "pro", isApproved: true, description: "وجبات عمانية تقليدية بجوار القلعة التاريخية." },
  { id: "b24", name: "المشاكل", category: "restaurants", city: "Nizwa", area: "Birkat Al Mouz", address: "طريق بركة الموز الرئيسي", coordinates: { lat: 22.9400, lng: 57.5800 }, phone: "+96825423456", whatsapp: "+96825423456", openingHours: "١٢:٠٠ م - ١١:٠٠ م", images: businessImages.b24, subscriptionPlan: "basic", isApproved: true, description: "مشاوي وأطباق محلية في حديقة." },
  { id: "b25", name: "مقهى التمر نزوى", category: "cafes", city: "Nizwa", area: "Nizwa Souq", address: "سوق نزوى، البوابة ٢", coordinates: { lat: 22.9330, lng: 57.5340 }, phone: "+96825430001", whatsapp: "+96825430001", openingHours: "٧:٠٠ ص - ٩:٠٠ م", images: businessImages.b25, subscriptionPlan: "basic", isApproved: true, description: "مشروبات بالتمر وحلويات عمانية." },
  { id: "b26", name: "سوق نزوى الطازج", category: "supermarkets", city: "Nizwa", area: "Nizwa Souq", address: "خلف سوق نزوى، الطريق الرئيسي", coordinates: { lat: 22.9340, lng: 57.5320 }, phone: "+96825441122", whatsapp: "+96825441122", openingHours: "٧:٠٠ ص - ١١:٠٠ م", images: businessImages.b26, subscriptionPlan: "pro", isApproved: true, description: "متجر شامل للمواد الغذائية والمنزلية." },
  { id: "b27", name: "مزرعة تنوف الطازجة", category: "fruits-vegetables", city: "Nizwa", area: "Tanuf", address: "طريق قرية تنوف", coordinates: { lat: 22.9550, lng: 57.4400 }, phone: "+96825445566", whatsapp: "+96825445566", openingHours: "٦:٠٠ ص - ٦:٠٠ م", images: businessImages.b27, subscriptionPlan: "basic", isApproved: true, description: "مباشر من مزارع تنوف — رمان وتمور وأكثر." },
  { id: "b28", name: "صالون نزوى للرجال", category: "salons", city: "Nizwa", area: "Nizwa Souq", address: "سوق نزوى، بلوك ٤", coordinates: { lat: 22.9335, lng: 57.5345 }, phone: "+96825449900", whatsapp: "+96825449900", openingHours: "٨:٠٠ ص - ١٠:٠٠ م", images: businessImages.b28, subscriptionPlan: "basic", isApproved: true, description: "حلاقة كلاسيكية وعناية بالرجل." },
  { id: "b29", name: "بيت اللبان نزوى", category: "perfumes", city: "Nizwa", area: "Nizwa Souq", address: "سوق نزوى، الجناح الغربي", coordinates: { lat: 22.9328, lng: 57.5330 }, phone: "+96825447788", whatsapp: "+96825447788", openingHours: "٩:٠٠ ص - ٩:٠٠ م", images: businessImages.b29, subscriptionPlan: "pro", isApproved: true, description: "لبان فاخر وعطور عمانية تقليدية." },
  { id: "b30", name: "كنوز السوق", category: "gifts", city: "Nizwa", area: "Nizwa Souq", address: "داخل سوق نزوى", coordinates: { lat: 22.9332, lng: 57.5335 }, phone: "+96825446655", whatsapp: "+96825446655", openingHours: "٨:٠٠ ص - ٨:٠٠ م", images: businessImages.b30, subscriptionPlan: "basic", isApproved: true, description: "خناجر عمانية مصنوعة يدوياً وفضة وفخار." },
  { id: "b31", name: "مغسلة نزوى", category: "laundry", city: "Nizwa", area: "Birkat Al Mouz", address: "بركة الموز، شارع ٥", coordinates: { lat: 22.9410, lng: 57.5790 }, phone: "+96825443322", whatsapp: "+96825443322", openingHours: "٧:٠٠ ص - ٩:٠٠ م", images: businessImages.b31, subscriptionPlan: "basic", isApproved: true, description: "خدمات غسيل وكي بأسعار مناسبة." },
  { id: "b32", name: "مركز توصيل نزوى", category: "delivery", city: "Nizwa", area: "Nizwa Souq", address: "المنطقة الصناعية بنزوى", coordinates: { lat: 22.9350, lng: 57.5300 }, phone: "+96825440011", whatsapp: "+96825440011", openingHours: "٨:٠٠ ص - ١٠:٠٠ م", images: businessImages.b32, subscriptionPlan: "pro", isApproved: true, description: "توصيل في نفس اليوم لنزوى والقرى المحيطة." },

  // عبري
  { id: "b33", name: "مشاوي عبري", category: "restaurants", city: "Ibri", area: "Ibri Center", address: "شارع عبري الرئيسي، الوسط", coordinates: { lat: 23.2254, lng: 56.5163 }, phone: "+96825691234", whatsapp: "+96825691234", openingHours: "١١:٠٠ ص - ١١:٠٠ م", images: businessImages.b33, subscriptionPlan: "pro", isApproved: true, description: "مشاوي على الفحم ووجبات عمانية." },
  { id: "b34", name: "مطبخ السلام", category: "restaurants", city: "Ibri", area: "Al Harat", address: "طريق قرية الحارات", coordinates: { lat: 23.2300, lng: 56.5100 }, phone: "+96825695678", whatsapp: "+96825695678", openingHours: "١٢:٠٠ م - ١٠:٠٠ م", images: businessImages.b34, subscriptionPlan: "basic", isApproved: true, description: "طبخ منزلي وأطباق يومية مميزة." },
  { id: "b35", name: "قهوة الصحراء", category: "cafes", city: "Ibri", area: "Ibri Center", address: "وسط عبري، بجانب البلدية", coordinates: { lat: 23.2260, lng: 56.5170 }, phone: "+96825698765", whatsapp: "+96825698765", openingHours: "٦:٣٠ ص - ١٠:٠٠ م", images: businessImages.b35, subscriptionPlan: "basic", isApproved: true, description: "قهوة طازجة ووجبات خفيفة في عبري." },
  { id: "b36", name: "مارت عبري", category: "supermarkets", city: "Ibri", area: "Ibri Center", address: "وسط عبري، بلوك A", coordinates: { lat: 23.2255, lng: 56.5165 }, phone: "+96825690001", whatsapp: "+96825690001", openingHours: "٧:٠٠ ص - ١١:٠٠ م", images: businessImages.b36, subscriptionPlan: "pro", isApproved: true, description: "كل ما تحتاجه تحت سقف واحد." },
  { id: "b37", name: "خضار الحارات الطازج", category: "fruits-vegetables", city: "Ibri", area: "Al Harat", address: "الحارات، طريق ١٢", coordinates: { lat: 23.2310, lng: 56.5090 }, phone: "+96825692222", whatsapp: "+96825692222", openingHours: "٥:٣٠ ص - ٧:٠٠ م", images: businessImages.b37, subscriptionPlan: "basic", isApproved: true, description: "فواكه وخضروات من المصدر المحلي." },
  { id: "b38", name: "استوديو عبري للتصفيف", category: "salons", city: "Ibri", area: "Ibri Center", address: "وسط عبري، شارع ٧", coordinates: { lat: 23.2258, lng: 56.5168 }, phone: "+96825693333", whatsapp: "+96825693333", openingHours: "٩:٠٠ ص - ١٠:٠٠ م", images: businessImages.b38, subscriptionPlan: "basic", isApproved: true, description: "تصفيف عصري للرجال والسيدات." },
  { id: "b39", name: "وردة الصحراء", category: "flowers", city: "Ibri", area: "Ibri Center", address: "وسط عبري، بجانب المستشفى", coordinates: { lat: 23.2262, lng: 56.5175 }, phone: "+96825694444", whatsapp: "+96825694444", openingHours: "٨:٠٠ ص - ٨:٠٠ م", images: businessImages.b39, subscriptionPlan: "basic", isApproved: true, description: "تنسيقات جميلة لكل المناسبات." },
  { id: "b40", name: "مكتبة الظاهرة", category: "bookstores", city: "Ibri", area: "Ibri Center", address: "وسط عبري، شارع التعليم", coordinates: { lat: 23.2265, lng: 56.5180 }, phone: "+96825695555", whatsapp: "+96825695555", openingHours: "٨:٠٠ ص - ٩:٠٠ م", images: businessImages.b40, subscriptionPlan: "basic", isApproved: true, description: "كتب وقرطاسية ومستلزمات مدرسية." },
  { id: "b41", name: "ركن هدايا عبري", category: "gifts", city: "Ibri", area: "Al Harat", address: "قرية الحارات", coordinates: { lat: 23.2315, lng: 56.5085 }, phone: "+96825696666", whatsapp: "+96825696666", openingHours: "٩:٠٠ ص - ٩:٠٠ م", images: businessImages.b41, subscriptionPlan: "basic", isApproved: true, description: "هدايا يدوية فريدة وحرف محلية." },
  { id: "b42", name: "تنظيف إكسبرس عبري", category: "laundry", city: "Ibri", area: "Ibri Center", address: "وسط عبري، بلوك C", coordinates: { lat: 23.2250, lng: 56.5160 }, phone: "+96825697777", whatsapp: "+96825697777", openingHours: "٧:٠٠ ص - ١٠:٠٠ م", images: businessImages.b42, subscriptionPlan: "basic", isApproved: true, description: "خدمات غسيل سريعة وبأسعار مناسبة." },

  // مسقط - ألعاب وتسلية
  { id: "b43", name: "فن زون مسقط", category: "entertainment", city: "Muscat", area: "Seeb", address: "مول عمان، الطابق الثاني", coordinates: { lat: 23.6150, lng: 58.1750 }, phone: "+96824801234", whatsapp: "+96824801234", openingHours: "١٠:٠٠ ص - ١١:٠٠ م", images: businessImages.b43, subscriptionPlan: "featured", isApproved: true, description: "منطقة ترفيه عائلية مع ألعاب ترتان وألعاب فيديو ومنطقة أطفال." },
  { id: "b44", name: "جيمنج هب", category: "entertainment", city: "Muscat", area: "Al Khuwair", address: "الخوير ٢٨، مبنى الفرح", coordinates: { lat: 23.5955, lng: 58.4205 }, phone: "+96824805678", whatsapp: "+96824805678", openingHours: "٢:٠٠ م - ١٢:٠٠ ص", images: businessImages.b44, subscriptionPlan: "pro", isApproved: true, description: "مركز ألعاب إلكترونية PS5 وPC Gaming وبطولات أسبوعية." },

  // نزوى - ألعاب وتسلية
  { id: "b45", name: "أدفنتشر لاند نزوى", category: "entertainment", city: "Nizwa", area: "Nizwa Souq", address: "طريق نزوى الرئيسي، بجانب المركز التجاري", coordinates: { lat: 22.9345, lng: 57.5310 }, phone: "+96825451234", whatsapp: "+96825451234", openingHours: "٣:٠٠ م - ١٠:٠٠ م", images: businessImages.b45, subscriptionPlan: "pro", isApproved: true, description: "منطقة نطيطات وألعاب حركية للأطفال والشباب." },
];

const futureDate = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
};
const pastDate = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().split("T")[0];
};

export const offers: Offer[] = [
  { id: "o1", businessId: "b1", title: "٢٠٪ خصم على جميع الأطباق الرئيسية", type: "percentage", discountValue: "٢٠٪", description: "استمتع بخصم ٢٠٪ على جميع الأطباق الرئيسية هذا الشهر.", startDate: pastDate(5), endDate: futureDate(25), terms: "للأكل في المطعم فقط. لا يمكن دمجه مع عروض أخرى.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o2", businessId: "b1", title: "حلوى مجانية مع العشاء", type: "bundle", discountValue: "حلوى مجانية", description: "احصل على حلوى عمانية مجانية مع أي طلب عشاء.", startDate: pastDate(3), endDate: futureDate(15), terms: "الحد الأدنى ٥ ر.ع. للأكل في المطعم فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o3", businessId: "b2", title: "اشترِ ١ واحصل على ١ مجاناً - طبق كباب", type: "bogo", discountValue: "١+١", description: "اطلب طبق كباب واحد واحصل على الثاني مجاناً.", startDate: pastDate(2), endDate: futureDate(10), terms: "صالح من الأحد للخميس فقط.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o4", businessId: "b3", title: "١٥٪ خصم على وجبات الشاورما", type: "percentage", discountValue: "١٥٪", description: "جميع وجبات الشاورما بخصم ١٥٪.", startDate: pastDate(7), endDate: futureDate(7), terms: "سفري وفي المطعم.", isActive: true, createdAt: pastDate(7), images: [] },
  { id: "o5", businessId: "b4", title: "عشاء عائلي بخصم ٣٠٪", type: "percentage", discountValue: "٣٠٪", description: "خصم ٣٠٪ على وجبة العشاء العائلية لـ ٤ أشخاص.", startDate: pastDate(1), endDate: futureDate(20), terms: "يتطلب حجز مسبق.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o6", businessId: "b5", title: "اشترِ ٢ واحصل على ١ قهوة مجاناً", type: "bogo", discountValue: "٢+١", description: "اشترِ قهوتين مختصتين واحصل على الثالثة مجاناً.", startDate: pastDate(10), endDate: futureDate(5), terms: "نفس الحجم فقط.", isActive: true, createdAt: pastDate(10), images: [] },
  { id: "o7", businessId: "b6", title: "كرك مجاني مع الفطور", type: "bundle", discountValue: "كرك مجاني", description: "كرك مجاني مع أي طلب فطور.", startDate: pastDate(3), endDate: futureDate(12), terms: "قبل ١٠ صباحاً فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o8", businessId: "b7", title: "٢٥٪ خصم على قهوة بور أوفر", type: "percentage", discountValue: "٢٥٪", description: "٢٥٪ خصم على جميع أنواع القهوة المختصة.", startDate: pastDate(4), endDate: futureDate(18), terms: "في المحل فقط.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o9", businessId: "b8", title: "١٠٪ خصم على المشتريات فوق ٢٠ ر.ع", type: "percentage", discountValue: "١٠٪", description: "احصل على ١٠٪ خصم عند شرائك بـ ٢٠ ر.ع أو أكثر.", startDate: pastDate(2), endDate: futureDate(14), terms: "لا يشمل الإلكترونيات وحليب الأطفال.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o10", businessId: "b9", title: "توصيل مجاني للطلبات +١٥ ر.ع", type: "free-delivery", discountValue: "توصيل مجاني", description: "توصيل منزلي مجاني للطلبات ١٥ ر.ع فأكثر.", startDate: pastDate(5), endDate: futureDate(30), terms: "داخل مسقط فقط.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o11", businessId: "b10", title: "صندوق فواكه بخصم ٢ ر.ع", type: "percentage", discountValue: "٢ ر.ع خصم", description: "خصم ٢ ر.ع على أي صندوق فواكه طازجة.", startDate: pastDate(1), endDate: futureDate(8), terms: "واحد لكل زبون في اليوم.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o12", businessId: "b11", title: "باقة خضروات عضوية ٢٠٪ خصم", type: "percentage", discountValue: "٢٠٪", description: "٢٠٪ خصم على باقة الخضروات العضوية الأسبوعية.", startDate: pastDate(6), endDate: futureDate(9), terms: "الطلب المسبق قبل الخميس.", isActive: true, createdAt: pastDate(6), images: [] },
  { id: "o13", businessId: "b12", title: "تنظيف ٣ بدلات بسعر ٢", type: "bogo", discountValue: "٣ بسعر ٢", description: "نظف ٣ بدلات وادفع ثمن ٢ فقط.", startDate: pastDate(3), endDate: futureDate(21), terms: "الملابس العادية فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o14", businessId: "b13", title: "٥٠٪ خصم على أول غسلة", type: "percentage", discountValue: "٥٠٪", description: "الزبائن الجدد يحصلون على ٥٠٪ خصم على أول طلب.", startDate: pastDate(10), endDate: futureDate(20), terms: "للزبائن الجدد فقط.", isActive: true, createdAt: pastDate(10), images: [] },
  { id: "o15", businessId: "b14", title: "تهذيب لحية مجاني مع القص", type: "bundle", discountValue: "تهذيب مجاني", description: "احصل على تهذيب لحية مجاني مع أي قصة شعر.", startDate: pastDate(2), endDate: futureDate(15), terms: "بالحضور أو بالموعد.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o16", businessId: "b15", title: "٣٠٪ خصم على باقة العروس", type: "percentage", discountValue: "٣٠٪", description: "خصم ٣٠٪ على باقة مكياج العروس الفاخرة.", startDate: pastDate(5), endDate: futureDate(30), terms: "الحجز قبل أسبوع.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o17", businessId: "b16", title: "توصيل مجاني أقل من ٥ كم", type: "free-delivery", discountValue: "توصيل مجاني", description: "جميع التوصيلات ضمن ٥ كم مجاناً!", startDate: pastDate(7), endDate: futureDate(14), terms: "منطقة مسقط فقط.", isActive: true, createdAt: pastDate(7), images: [] },
  { id: "o18", businessId: "b17", title: "اشترِ ٢ لبان واحصل على ١ مجاناً", type: "bogo", discountValue: "٢+١", description: "اشترِ علبتين لبان واحصل على الثالثة مجاناً.", startDate: pastDate(4), endDate: futureDate(11), terms: "نفس الحجم.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o19", businessId: "b18", title: "١٥٪ خصم على صناديق الهدايا المخصصة", type: "percentage", discountValue: "١٥٪", description: "١٥٪ خصم على جميع طلبات صناديق الهدايا المخصصة.", startDate: pastDate(1), endDate: futureDate(22), terms: "٣ قطع كحد أدنى.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o20", businessId: "b19", title: "١٠٪ خصم على مجموعة أمواج الكلاسيكية", type: "percentage", discountValue: "١٠٪", description: "١٠٪ خصم على مجموعة أمواج الكلاسيكية المختارة.", startDate: pastDate(3), endDate: futureDate(17), terms: "منتجات مختارة فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o21", businessId: "b20", title: "عينة عود مجانية مع الشراء", type: "bundle", discountValue: "عينة مجانية", description: "عينة عود فاخرة مجانية مع أي شراء فوق ١٠ ر.ع.", startDate: pastDate(5), endDate: futureDate(10), terms: "حتى نفاد الكمية.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o22", businessId: "b21", title: "٢٠٪ خصم على باقات الأعراس", type: "percentage", discountValue: "٢٠٪", description: "خصم ٢٠٪ على جميع تنسيقات زهور الأعراس.", startDate: pastDate(2), endDate: futureDate(25), terms: "الطلب قبل أسبوعين.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o23", businessId: "b22", title: "اشترِ ٣ كتب واحصل على ١ مجاناً", type: "bogo", discountValue: "٣+١", description: "اشترِ ٣ كتب واحصل على الأرخص مجاناً.", startDate: pastDate(8), endDate: futureDate(22), terms: "لا يشمل الكتب الدراسية.", isActive: true, createdAt: pastDate(8), images: [] },
  { id: "o24", businessId: "b23", title: "غداء تقليدي بخصم ٢٥٪", type: "percentage", discountValue: "٢٥٪", description: "٢٥٪ خصم على وجبات الغداء العمانية التقليدية.", startDate: pastDate(4), endDate: futureDate(16), terms: "للأكل في المطعم ١٢-٣ م فقط.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o25", businessId: "b24", title: "باقة شواء عائلية", type: "bundle", discountValue: "وفر ٣ ر.ع", description: "باقة شواء عائلية لـ ٤ أشخاص — وفر ٣ ر.ع.", startDate: pastDate(2), endDate: futureDate(12), terms: "يتطلب حجز مسبق.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o26", businessId: "b25", title: "سموذي تمر مجاني", type: "bundle", discountValue: "سموذي مجاني", description: "سموذي تمر مجاني مع أي مشروب ساخن.", startDate: pastDate(6), endDate: futureDate(8), terms: "واحد لكل زبون.", isActive: true, createdAt: pastDate(6), images: [] },
  { id: "o27", businessId: "b26", title: "٥٪ خصم على كل شيء يوم الجمعة", type: "percentage", discountValue: "٥٪", description: "٥٪ خصم على سلة مشترياتك كل جمعة.", startDate: pastDate(3), endDate: futureDate(30), terms: "أيام الجمعة فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o28", businessId: "b27", title: "عرض موسم الرمان", type: "percentage", discountValue: "١٥٪", description: "١٥٪ خصم على رمان تنوف الطازج.", startDate: pastDate(1), endDate: futureDate(20), terms: "حتى نفاد الكمية.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o29", businessId: "b28", title: "قص + فوطة ساخنة بخصم ٢ ر.ع", type: "percentage", discountValue: "٢ ر.ع خصم", description: "وفر ٢ ر.ع على قص الشعر مع فوطة ساخنة.", startDate: pastDate(5), endDate: futureDate(15), terms: "بالحضور فقط.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o30", businessId: "b29", title: "اشترِ ١ بخور واحصل على ١ مجاناً", type: "bogo", discountValue: "١+١", description: "اشترِ علبة بخور واحصل على الثانية مجاناً.", startDate: pastDate(7), endDate: futureDate(7), terms: "نفس النوع فقط.", isActive: true, createdAt: pastDate(7), images: [] },
  { id: "o31", businessId: "b30", title: "٢٠٪ خصم على المجوهرات الفضية", type: "percentage", discountValue: "٢٠٪", description: "٢٠٪ خصم على المجوهرات الفضية العمانية المصنوعة يدوياً.", startDate: pastDate(3), endDate: futureDate(18), terms: "في المحل فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o32", businessId: "b31", title: "كي دشداشة بخصم ٥٠٠ بيسة", type: "percentage", discountValue: "٥٠٠ بيسة خصم", description: "وفر ٥٠٠ بيسة على كي الدشداشة.", startDate: pastDate(4), endDate: futureDate(14), terms: "٥ قطع كحد أقصى.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o33", businessId: "b32", title: "توصيل مجاني في نزوى", type: "free-delivery", discountValue: "توصيل مجاني", description: "جميع التوصيلات في نزوى مجانية هذا الشهر.", startDate: pastDate(10), endDate: futureDate(20), terms: "حدود مدينة نزوى فقط.", isActive: true, createdAt: pastDate(10), images: [] },
  { id: "o34", businessId: "b23", title: "طبق حلويات ١+١", type: "bogo", discountValue: "١+١", description: "اشترِ طبق حلويات واحد واحصل على الثاني مجاناً.", startDate: pastDate(1), endDate: futureDate(10), terms: "بعد ٧ مساءً فقط.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o35", businessId: "b26", title: "أرز مجاني مع شراء ١٠ ر.ع", type: "bundle", discountValue: "أرز ٢ كجم مجاني", description: "احصل على ٢ كجم أرز بسمتي مجاناً عند شرائك بـ ١٠ ر.ع.", startDate: pastDate(2), endDate: futureDate(13), terms: "واحد لكل عائلة.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o36", businessId: "b33", title: "مشاوي مشكلة بخصم ٢٠٪", type: "percentage", discountValue: "٢٠٪", description: "٢٠٪ خصم على طبق المشاوي المشكلة المميز.", startDate: pastDate(3), endDate: futureDate(14), terms: "للأكل في المطعم فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o37", businessId: "b34", title: "مشروب مجاني مع وجبة الغداء", type: "bundle", discountValue: "مشروب مجاني", description: "مشروب غازي مجاني مع أي وجبة غداء.", startDate: pastDate(5), endDate: futureDate(10), terms: "١٢-٣ م يومياً.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o38", businessId: "b35", title: "قهوة الصباح بـ ١ ر.ع فقط", type: "percentage", discountValue: "فقط ١ ر.ع", description: "أي قهوة عادية بريال واحد فقط قبل ٩ صباحاً.", startDate: pastDate(7), endDate: futureDate(23), terms: "قبل ٩ صباحاً فقط.", isActive: true, createdAt: pastDate(7), images: [] },
  { id: "o39", businessId: "b36", title: "سلة رمضان بخصم ١٠٪", type: "percentage", discountValue: "١٠٪", description: "١٠٪ خصم على سلال رمضان المختارة.", startDate: pastDate(2), endDate: futureDate(28), terms: "الطلب المسبق قبل يومين.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o40", businessId: "b37", title: "تمور طازجة ٣ كجم بـ ٢ ر.ع", type: "bundle", discountValue: "٣ كجم بـ ٢ ر.ع", description: "تمور عبري الفاخرة — ٣ كجم بريالين فقط.", startDate: pastDate(1), endDate: futureDate(15), terms: "حتى نفاد الكمية.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o41", businessId: "b38", title: "قص شعر مجاني للأطفال", type: "bundle", discountValue: "قص أطفال مجاني", description: "قص شعر مجاني للطفل مع أي قص للكبار.", startDate: pastDate(3), endDate: futureDate(12), terms: "الأطفال أقل من ١٠ سنوات.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o42", businessId: "b39", title: "باقات خاصة بخصم ١٥٪", type: "percentage", discountValue: "١٥٪", description: "١٥٪ خصم على جميع الباقات الخاصة.", startDate: pastDate(5), endDate: futureDate(9), terms: "يفضل الطلب المسبق.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o43", businessId: "b40", title: "العودة للمدارس ٢٠٪ خصم", type: "percentage", discountValue: "٢٠٪", description: "٢٠٪ خصم على جميع المستلزمات المدرسية والقرطاسية.", startDate: pastDate(4), endDate: futureDate(26), terms: "لا يشمل الإلكترونيات.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o44", businessId: "b41", title: "فخار يدوي ١+١", type: "bogo", discountValue: "١+١", description: "اشترِ قطعة فخار يدوية واحصل على الثانية مجاناً.", startDate: pastDate(6), endDate: futureDate(14), terms: "نفس القيمة أو أقل.", isActive: true, createdAt: pastDate(6), images: [] },
  { id: "o45", businessId: "b42", title: "غسل وطي بخصم ٣٠٪", type: "percentage", discountValue: "٣٠٪", description: "٣٠٪ خصم على جميع خدمات الغسل والطي.", startDate: pastDate(2), endDate: futureDate(18), terms: "٣ كجم كحد أدنى.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o46", businessId: "b4", title: "عرض الغداء بخصم ٢ ر.ع", type: "percentage", discountValue: "٢ ر.ع خصم", description: "خصم ٢ ر.ع على أي وجبة غداء.", startDate: pastDate(1), endDate: futureDate(12), terms: "أيام الأسبوع فقط.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o47", businessId: "b7", title: "آيس لاتيه ١+١ يوم الجمعة", type: "bogo", discountValue: "١+١", description: "اشترِ آيس لاتيه واحصل على الثاني مجاناً كل جمعة.", startDate: pastDate(3), endDate: futureDate(21), terms: "أيام الجمعة فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o48", businessId: "b8", title: "دجاج طازج بخصم ٥٠٠ بيسة/كجم", type: "percentage", discountValue: "٥٠٠ بيسة/كجم خصم", description: "خصم ٥٠٠ بيسة على كل كجم دجاج طازج.", startDate: pastDate(1), endDate: futureDate(7), terms: "٥ كجم كحد أقصى.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o49", businessId: "b14", title: "قص شعر طلاب بـ ١.٥ ر.ع", type: "percentage", discountValue: "فقط ١.٥ ر.ع", description: "قص شعر الطلاب بريال ونصف فقط مع البطاقة.", startDate: pastDate(10), endDate: futureDate(30), terms: "بإبراز بطاقة الطالب.", isActive: true, createdAt: pastDate(10), images: [] },
  { id: "o50", businessId: "b15", title: "مانيكير + بديكير بخصم ٢٥٪", type: "percentage", discountValue: "٢٥٪", description: "٢٥٪ خصم على باقة المانيكير والبديكير.", startDate: pastDate(4), endDate: futureDate(16), terms: "بالموعد فقط.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o51", businessId: "b19", title: "طقم هدايا ٣ بسعر ٢", type: "bogo", discountValue: "٣ بسعر ٢", description: "اشترِ ٣ عطور أمواج مصغرة بسعر ٢.", startDate: pastDate(2), endDate: futureDate(14), terms: "أطقم مختارة فقط.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o52", businessId: "b21", title: "توصيل يومي مجاني", type: "free-delivery", discountValue: "توصيل مجاني", description: "توصيل مجاني في نفس اليوم لجميع الباقات.", startDate: pastDate(3), endDate: futureDate(12), terms: "منطقة مسقط فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o53", businessId: "b9", title: "١٥٪ خصم على قسم العضوي", type: "percentage", discountValue: "١٥٪", description: "١٥٪ خصم على جميع منتجات الأغذية العضوية.", startDate: pastDate(6), endDate: futureDate(9), terms: "في المحل فقط.", isActive: true, createdAt: pastDate(6), images: [] },
  { id: "o54", businessId: "b16", title: "خصم ١ ر.ع على أي توصيل", type: "percentage", discountValue: "١ ر.ع خصم", description: "وفر ريال واحد على أي طلب توصيل.", startDate: pastDate(1), endDate: futureDate(20), terms: "طلبات التطبيق فقط.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o55", businessId: "b33", title: "شوربة مجانية مع الطبق الرئيسي", type: "bundle", discountValue: "شوربة مجانية", description: "شوربة مجانية مع أي طبق رئيسي.", startDate: pastDate(2), endDate: futureDate(11), terms: "للأكل في المطعم فقط.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o56", businessId: "b36", title: "عرض نهاية الأسبوع ٥٪ خصم", type: "percentage", discountValue: "٥٪", description: "٥٪ خصم على جميع المشتريات في نهاية الأسبوع.", startDate: pastDate(4), endDate: futureDate(30), terms: "الخميس-السبت فقط.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o57", businessId: "b29", title: "طقم عطور العيد بخصم ٢٠٪", type: "percentage", discountValue: "٢٠٪", description: "٢٠٪ خصم على أطقم عطور العيد الخاصة.", startDate: pastDate(3), endDate: futureDate(25), terms: "كمية محدودة.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o58", businessId: "b12", title: "استلام وتوصيل مجاني", type: "free-delivery", discountValue: "استلام مجاني", description: "استلام وتوصيل مجاني لجميع طلبات الغسيل.", startDate: pastDate(5), endDate: futureDate(15), terms: "ضمن ٥ كم.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o59", businessId: "b22", title: "قرطاسية بخصم ١٠٪", type: "percentage", discountValue: "١٠٪", description: "١٠٪ خصم على جميع مستلزمات القرطاسية.", startDate: pastDate(7), endDate: futureDate(14), terms: "لا يشمل منتجات التخفيضات.", isActive: true, createdAt: pastDate(7), images: [] },
  { id: "o60", businessId: "b20", title: "باقة بخور ٣ بـ ٥ ر.ع", type: "bundle", discountValue: "٣ بـ ٥ ر.ع", description: "احصل على ٣ علب بخور بـ ٥ ر.ع فقط.", startDate: pastDate(2), endDate: futureDate(18), terms: "الحجم العادي فقط.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o61", businessId: "b30", title: "نقش اسم مجاني على الفضة", type: "bundle", discountValue: "نقش مجاني", description: "نقش اسم مجاني على أي مشتريات فضية.", startDate: pastDate(1), endDate: futureDate(21), terms: "١٠ أحرف كحد أقصى.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o62", businessId: "b35", title: "شاي العصر بخصم ٢٥٪", type: "percentage", discountValue: "٢٥٪", description: "٢٥٪ خصم على طقم شاي العصر لشخصين.", startDate: pastDate(4), endDate: futureDate(16), terms: "٢-٥ م يومياً.", isActive: true, createdAt: pastDate(4), images: [] },

  // عروض ألعاب وتسلية
  { id: "o63", businessId: "b43", title: "ساعة لعب مجانية للأطفال", type: "bundle", discountValue: "ساعة مجانية", description: "ساعة لعب مجانية في منطقة الترتان مع أي تذكرة دخول.", startDate: pastDate(2), endDate: futureDate(20), terms: "للأطفال من ٤-١٢ سنة.", isActive: true, createdAt: pastDate(2), images: [] },
  { id: "o64", businessId: "b43", title: "٢٠٪ خصم على تذكرة العائلة", type: "percentage", discountValue: "٢٠٪", description: "٢٠٪ خصم على تذكرة العائلة (٤ أشخاص).", startDate: pastDate(3), endDate: futureDate(15), terms: "أيام الأسبوع فقط.", isActive: true, createdAt: pastDate(3), images: [] },
  { id: "o65", businessId: "b44", title: "اشترِ ٢ ساعة جيمنج واحصل على ١ مجاناً", type: "bogo", discountValue: "٢+١", description: "اشترِ ساعتين لعب واحصل على الثالثة مجاناً على PS5 أو PC.", startDate: pastDate(1), endDate: futureDate(18), terms: "نفس الجهاز فقط.", isActive: true, createdAt: pastDate(1), images: [] },
  { id: "o66", businessId: "b44", title: "بطولة فورتنايت — اشتراك مجاني", type: "bundle", discountValue: "اشتراك مجاني", description: "اشترك مجاناً في بطولة فورتنايت الأسبوعية وفز بجوائز.", startDate: pastDate(5), endDate: futureDate(25), terms: "التسجيل عبر واتساب.", isActive: true, createdAt: pastDate(5), images: [] },
  { id: "o67", businessId: "b45", title: "٣٠٪ خصم على حفلات أعياد الميلاد", type: "percentage", discountValue: "٣٠٪", description: "٣٠٪ خصم على باقات حفلات أعياد ميلاد الأطفال.", startDate: pastDate(4), endDate: futureDate(22), terms: "الحجز قبل أسبوع.", isActive: true, createdAt: pastDate(4), images: [] },
  { id: "o68", businessId: "b45", title: "١+١ نطيطات يوم الخميس", type: "bogo", discountValue: "١+١", description: "اشترِ تذكرة نطيطات واحصل على الثانية مجاناً كل خميس.", startDate: pastDate(2), endDate: futureDate(16), terms: "أيام الخميس فقط.", isActive: true, createdAt: pastDate(2), images: [] },
];

// Helper functions
export function getBusinessById(id: string): Business | undefined {
  return businesses.find((b) => b.id === id);
}

export function getOffersByBusiness(businessId: string): Offer[] {
  return offers.filter((o) => o.businessId === businessId && o.isActive);
}

export function getBusinessesForOffer(offer: Offer): Business | undefined {
  return businesses.find((b) => b.id === offer.businessId);
}

export function getDaysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}
