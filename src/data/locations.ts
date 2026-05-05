import { Area, City } from "@/types";

export const cities: City[] = ["Muscat", "Nizwa", "Ibri"];

export const cityNamesAr: Record<City, string> = {
  Muscat: "مسقط",
  Nizwa: "نزوى",
  Ibri: "عبري",
};

export const areas: Area[] = [
  // Muscat
  { id: "al-khuwair", name: "Al Khuwair", nameAr: "الخوير", city: "Muscat" },
  { id: "al-ghubrah", name: "Al Ghubrah", nameAr: "الغبرة", city: "Muscat" },
  { id: "azaiba", name: "Azaiba", nameAr: "العذيبة", city: "Muscat" },
  { id: "seeb", name: "Seeb", nameAr: "السيب", city: "Muscat" },
  { id: "al-hail", name: "Al Hail", nameAr: "الحيل", city: "Muscat" },
  { id: "qurum", name: "Qurum", nameAr: "القرم", city: "Muscat" },
  { id: "ruwi", name: "Ruwi", nameAr: "روي", city: "Muscat" },
  // Nizwa
  { id: "nizwa-souq", name: "Nizwa Souq", nameAr: "سوق نزوى", city: "Nizwa" },
  { id: "birkat-al-mouz", name: "Birkat Al Mouz", nameAr: "بركة الموز", city: "Nizwa" },
  { id: "tanuf", name: "Tanuf", nameAr: "تنوف", city: "Nizwa" },
  // Ibri
  { id: "ibri-center", name: "Ibri Center", nameAr: "وسط عبري", city: "Ibri" },
  { id: "al-harat", name: "Al Harat", nameAr: "الحارات", city: "Ibri" },
];

export function getAreasByCity(city: City): Area[] {
  return areas.filter((a) => a.city === city);
}
