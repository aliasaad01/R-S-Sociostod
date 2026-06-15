export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ThemeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  priceInfo: string; /* تم إزالة الـ ? لأن القيمة موجودة دائماً في البيانات */
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string; /* تم تعديلها بحرف z لتطابق حقول الـ content.ts */
  message: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}
