export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image?: string;
}

export interface Service {
  name: string;
  duration: string;
  price: number;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export const products: Product[] = [
  { id: 101, name: "Intense Lightening Black Soap", price: 10000, category: "Body Care", description: "Traditional black soap for deep cleansing and brightening", image: "/images/Intense%20Lightening%20Black%20Soap.jpg" },
  { id: 102, name: "Lightening Oil", price: 15000, category: "Face Care", description: "Nourishing brightening oil for improved glow", image: "/images/Lightening%20Oil.jpg" },
  { id: 103, name: "Intense Lightening Scrub", price: 10500, category: "Body Care", description: "Exfoliating scrub for smoother and brighter skin", image: "/images/Intense%20Lightening%20Body%20Scrub.jpg" },
  { id: 104, name: "Glow Oil (100ml)", price: 5000, category: "Body Care", description: "Travel-size glow oil for everyday use", image: "/images/Glow%20Oil.jpg" },
  { id: 105, name: "Glow Oil (200ml)", price: 10000, category: "Body Care", description: "Large-size glow oil for long-lasting sheen", image: "/images/Glow%20Oil.jpg" },
  { id: 106, name: "Brightening Body Milk", price: 10000, category: "Body Lotions", description: "Daily body milk that helps improve skin radiance", image: "/images/Brightening%20Body%20Milk%20Lotion.jpg" },
  { id: 107, name: "Acne Face Wash", price: 10000, category: "Face Care", description: "Clarifying face wash for acne-prone skin", image: "/images/Acne%20Face%20Wash.jpg" },
  { id: 108, name: "Intense Lightening Lotion", price: 25500, category: "Body Lotions", description: "Intensive lotion for uneven skin tone", image: "/images/Intense%20Lightening%20Lotion.jpg" },
  { id: 109, name: "Intense Lightening Body Scrub", price: 8000, category: "Body Care", description: "Body scrub that removes buildup and smooths texture", image: "/images/Intense%20Lightening%20Body%20Scrub.jpg" },
  { id: 110, name: "Advanced Lightening Liquid Black Soap", price: 10000, category: "Body Care", description: "Liquid black soap for cleansing and brightening support", image: "/images/Advance%20Lightening%20Black%20Soap.jpg" },
  { id: 111, name: "Day Face Cream", price: 10000, category: "Face Care", description: "Hydrating daytime face cream for daily radiance", image: "/images/Day%20Face%20Cream.jpg" },
  { id: 112, name: "Night Face Cream", price: 10000, category: "Face Care", description: "Nourishing night cream to support overnight renewal", image: "/images/Night%20Day%20Cream.jpg" },
  { id: 113, name: "Lightening Face Wash", price: 10000, category: "Face Care", description: "Gentle cleanser for a clearer, brighter complexion", image: "/images/Lightening%20Face%20Wash.jpg" },
  { id: 114, name: "Depigmenting Toner", price: 35000, category: "Face Care", description: "Targeted toner for uneven tone and dark spots", image: "/images/Dipigmenting Toner.jpg" },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Consultation",
    services: [
      { name: "Skincare Consultation", duration: "25 min", price: 30000 },
      { name: "International Skincare Consultation", duration: "25 min", price: 50000 },
    ]
  },
  {
    title: "Facial Treatments",
    services: [
      { name: "Acne Treatment Facials With Light Therapy Mask", duration: "45 min", price: 65850 },
      { name: "Vitamin C Brightening Facials", duration: "45 min", price: 65500 },
      { name: "Acne Mask Peel Facials", duration: "1 hr", price: 65850 },
      { name: "Derma-planing Facials", duration: "45 min", price: 68850 },
      { name: "Derma-Planning Facial Pro", duration: "1 hr", price: 90750 },
      { name: "Microdermabrasion With Light Therapy Mask", duration: "50 min", price: 65500 },
      { name: "Hydra Facial", duration: "1 hr", price: 78500 },
      { name: "Facial Massage", duration: "30 min", price: 30000 },
      { name: "Deluxe Signature Facelift", duration: "1 hr", price: 78500 },
      { name: "Skin Renewal Facials", duration: "45 min", price: 55750 },
      { name: "ADD ONS (Sheet mask LED Therapy)", duration: "10–30 min", price: 10000 },
    ]
  },
  {
    title: "Deluxe Infusions",
    services: [
      { name: "Immune Booster Drip", duration: "1 hr", price: 65000 },
      { name: "Flawless Glow Glutathione Drip", duration: "1 hr", price: 80000 },
      { name: "Luminous Skin Glutathione Drip", duration: "1 hr", price: 95000 },
      { name: "NAD+ Therapy", duration: "1 hr", price: 195000 },
      { name: "Deluxe Glow Drip", duration: "1 hr", price: 155000 },
    ]
  },
  {
    title: "Chemical Peel",
    services: [
      { name: "Salicylic Acid Peel", duration: "50 min", price: 65000 },
      { name: "Mandelic Acid Peel", duration: "45 min", price: 65000 },
      { name: "Tranexamic Acid Peel", duration: "1 hr", price: 65000 },
      { name: "Tretinoin Peel", duration: "1 hr", price: 65000 },
      { name: "Kojic Acid Peel", duration: "1 hr", price: 65000 },
      { name: "Jessner Cocktail Peel", duration: "1 hr", price: 75000 },
      { name: "Micro Needling + Peel", duration: "1 hr", price: 160500 },
      { name: "Deluxe Glass Skin Micro Needling", duration: "1 hr", price: 280500 },
      { name: "Knee Peel", duration: "1 hr", price: 150950 },
      { name: "Elbow Peel", duration: "1 hr", price: 130950 },
      { name: "Knuckle Peel", duration: "1 hr", price: 130500 },
      { name: "Feet Peel", duration: "1 hr", price: 225000 },
      { name: "Nano Needling", duration: "1 hr", price: 95000 },
      { name: "Micro Needling (PRP)", duration: "1 hr", price: 150500 },
      { name: "Micro Needling", duration: "1 hr", price: 100500 },
      { name: "Micro Needling + TCA Cross", duration: "1 hr", price: 200500 },
      { name: "Corrective Acne Treatment", duration: "1 hr", price: 80950 },
      { name: "Corrective Acne Treatment Combo", duration: "1 hr", price: 110950 },
      { name: "Depigmenting Treatment", duration: "1 hr", price: 105000 },
      { name: "TCA Peel", duration: "1 hr", price: 100500 },
      { name: "CAT Protocol (3 mths)", duration: "1 hr", price: 995000 },
      { name: "DPT Protocol (3 mths)", duration: "1 hr", price: 980000 },
      { name: "Cosmelan / Perfect Peel / Back", duration: "1 hr", price: 0 },
      { name: "Back Peel / Chest Peel", duration: "1 hr", price: 0 },
    ]
  },
  {
    title: "Laser Treatment",
    services: [
      { name: "Décolletage (chest)", duration: "1 hr", price: 55000 },
      { name: "Half Face", duration: "1 hr", price: 60000 },
      { name: "Neck", duration: "1 hr", price: 55000 },
      { name: "Upper Lip", duration: "1 hr", price: 30000 },
      { name: "Sides of Face", duration: "1 hr", price: 40000 },
      { name: "Under Chin", duration: "1 hr", price: 40000 },
      { name: "Full Face", duration: "1 hr", price: 75000 },
      { name: "Full Arms", duration: "1 hr", price: 95000 },
      { name: "Half Arm", duration: "1 hr", price: 75000 },
      { name: "Full Legs", duration: "1 hr", price: 140000 },
      { name: "Half Leg", duration: "1 hr", price: 100000 },
      { name: "Under Arm", duration: "1 hr", price: 55000 },
      { name: "Bikini", duration: "1 hr", price: 60000 },
      { name: "Breast", duration: "1 hr", price: 55000 },
      { name: "Brazilian", duration: "1 hr", price: 101000 },
      { name: "Lower Belly", duration: "1 hr", price: 45000 },
      { name: "Tummy Trail", duration: "1 hr", price: 30000 },
      { name: "Gentlemen Laser", duration: "1 hr", price: 70000 },
      { name: "Laser Half Back", duration: "1 hr", price: 80000 },
      { name: "Laser Full Back", duration: "1 hr", price: 110000 },
      { name: "Laser Full Buttocks", duration: "1 hr", price: 75000 },
      { name: "Under Chin and Sides", duration: "1 hr", price: 75000 },
      { name: "Under Chin and Neck", duration: "1 hr", price: 80000 },
      { name: "Upper Lip and Under Chin", duration: "1 hr", price: 65000 },
      { name: "Knuckles", duration: "1 hr", price: 40000 },
      { name: "Nail Fungus (Per Finger)", duration: "1 hr", price: 20000 },
      { name: "Shoulders", duration: "1 hr", price: 55000 },
      { name: "Shoulders and Chest", duration: "1 hr", price: 105500 },
      { name: "Full Body", duration: "1 hr", price: 650000 },
      { name: "Chest and Breast", duration: "1 hr", price: 105500 },
      { name: "Full Belly", duration: "1 hr", price: 75000 },
    ]
  },
  {
    title: "Waxing",
    services: [
      { name: "Full Back Wax", duration: "25 min", price: 25500 },
      { name: "Brazilian", duration: "30 min", price: 25750 },
      { name: "Booty", duration: "25 min", price: 15500 },
      { name: "Under Arm", duration: "30 min", price: 7500 },
      { name: "Full Arm", duration: "30 min", price: 34500 },
      { name: "Half Arm", duration: "20 min", price: 17750 },
      { name: "Full Leg", duration: "30 min", price: 34500 },
      { name: "Half Leg", duration: "25 min", price: 17500 },
      { name: "Face", duration: "30 min", price: 15750 },
      { name: "Neck", duration: "25 min", price: 9500 },
      { name: "Chest", duration: "30 min", price: 15750 },
      { name: "Bum Cheeks", duration: "30 min", price: 16000 },
      { name: "Bikini Line", duration: "25 min", price: 12000 },
      { name: "Chin", duration: "25 min", price: 6000 },
      { name: "Upper Lip", duration: "25 min", price: 4500 },
      { name: "Eyebrow", duration: "25 min", price: 4500 },
      { name: "ADD-ONS", duration: "5 min", price: 2750 },
    ]
  },
  {
    title: "Pedicure & Nails",
    services: [
      { name: "Deluxe Jelly Pedicure", duration: "45 min", price: 25000 },
      { name: "Classic Pedicure", duration: "45 min", price: 20000 },
      { name: "Manicure", duration: "40 min", price: 10000 },
      { name: "Gel Polish Removal", duration: "15 min", price: 5000 },
      { name: "Gel Polish", duration: "25 min", price: 8000 },
      { name: "Soak Off", duration: "20 min", price: 10000 },
    ]
  },
  {
    title: "Body Treatments",
    services: [
      { name: "Royal Hammam Polish", duration: "45 min", price: 85000 },
      { name: "Turmeric Glow Body Scrub", duration: "1 hr", price: 65500 },
      { name: "Hammam Me", duration: "1 hr", price: 68500 },
      { name: "Moroccan Hammam Glow Bath", duration: "45 min", price: 75000 },
      { name: "Deluxe Coffee Body Scrub (Cellulite/Stretch Mark)", duration: "40 min", price: 68500 },
      { name: "Detoxifying Green Tea Scrub", duration: "1 hr", price: 68500 },
      { name: "Signature Brightening Hammam", duration: "45 min", price: 75000 },
      { name: "Body Detox", duration: "45 min", price: 40000 },
    ]
  },
  {
    title: "Body Enhancement",
    services: [
      { name: "Intensive Get Waisted", duration: "45 min", price: 25000 },
      { name: "Butt Enhancement & Sculpting", duration: "30 min", price: 17000 },
      { name: "Hip Enhancement & Sculpting", duration: "45 min", price: 17000 },
      { name: "Arm Fat Reduction", duration: "30 min", price: 25000 },
      { name: "Tummy Fat Reduction", duration: "40 min", price: 18000 },
      { name: "Get Waisted & Hip Enhancement", duration: "45 min", price: 35000 },
      { name: "Get Waisted & Butt Enhancement", duration: "45 min", price: 35000 },
    ]
  },
  {
    title: "Massage",
    services: [
      { name: "Deluxe Signature Massage", duration: "1 hr", price: 55750 },
      { name: "Himalayan Hot Stone Massage", duration: "1 hr", price: 70500 },
      { name: "Renewal Deep Tissue Massage", duration: "1 hr", price: 65500 },
      { name: "Prenatal Massage", duration: "1 hr", price: 90000 },
      { name: "Balanced CBD Massage", duration: "1 hr", price: 90750 },
      { name: "Back Massage", duration: "15 min", price: 25000 },
      { name: "Foot or Hand Massage", duration: "15 min", price: 25000 },
      { name: "Full Leg Massage", duration: "20 min", price: 30000 },
      { name: "Extra Time", duration: "15–30 min", price: 15000 },
      { name: "Couple Massage", duration: "1 hr", price: 101500 },
    ]
  },
  {
    title: "Special Packages",
    services: [
      { name: "Gentle Man's Deluxe", duration: "3 hr 10 min", price: 150000 },
      { name: "Deluxe Mini", duration: "2 hr 30 min", price: 135000 },
      { name: "Deluxe Me Right", duration: "3 hr 30 min", price: 203000 },
      { name: "Girl On a Budget", duration: "2 hr 30 min", price: 135000 },
      { name: "Deluxe Pamper For Him", duration: "4 hr", price: 236000 },
      { name: "Deluxe Pamper For Her", duration: "3 hr 30 min", price: 250000 },
      { name: "Deluxe Signature Massage Bundle (5 sessions)", duration: "5 hr", price: 270000 },
      { name: "Renewal Deep Tissue Massage Bundle (5 sessions)", duration: "5 hr", price: 320000 },
      { name: "Himalayan Salt Stone Massage Bundle (5 sessions)", duration: "5 hr", price: 340000 },
    ]
  },
];

export const shippingRates = {
  mainland: 2500,
  island: 4000,
};

export const productCategories = ["All", "Body Lotions", "Face Care", "Body Care"];
